import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const searchFoods = async (req, res) => {
  const { name, type, minPrice, maxPrice, ingredients, flavors, tags } = req.query;

  try {
    const foods = await prisma.food.findMany({
      where: {
        AND: [
          name ? { name: { contains: name, mode: 'insensitive' } } : {},
          type ? { foodTag: { some: { tag: { name: type } } } } : {},
          minPrice ? { price: { gte: parseFloat(minPrice) } } : {},
          maxPrice ? { price: { lte: parseFloat(maxPrice) } } : {},
          ingredients ? { ingredients: { some: { ingredient: { name: { in: ingredients.split(',') } } } } } : {},
          flavors ? { flavors: { some: { flavor: { name: { in: flavors.split(',') } } } } } : {},
          tags ? { foodTag: { some: { tag: { name: { in: tags.split(',') } } } } } : {},
        ],
      },
      include: {
        foodTag: { include: { tag: true } },
        comments: true,
        favorites: true,
        ingredients: { include: { ingredient: true } },
        flavors: { include: { flavor: true } },
      },
    });

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getIngredients = async (req, res) => {
  try {
    const ingredients = await prisma.ingredient.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    res.json(ingredients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFlavors = async (req, res) => {
  try {
    const flavors = await prisma.flavor.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    res.json(flavors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTags = async (req, res) => {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getAllFoods = async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      let userId = null;

      if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
          try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            userId = decoded.userId;
          } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
          }
        }
      }

      const foods = await prisma.food.findMany({
        include: {
          foodTag: { include: { tag: true } },
          comments: true,
          favorites: true,
          ingredients: { include: { ingredient: true } },
          flavors: { include: { flavor: true } },
        },
      });

      if (userId) {
        const favoriteFoods = await prisma.favorite.findMany({
          where: { userId },
          select: { foodId: true },
        });

        const favoriteFoodIds = favoriteFoods.map(fav => fav.foodId);

        const foodsWithFavorites = foods.map(food => ({
          ...food,
          isFavorites: favoriteFoodIds.includes(food.id),
        }));

        return res.json(foodsWithFavorites);
      } else {
        const foodsWithFavorites = foods.map(food => ({
          ...food,
          isFavorites: false,
        }));

        return res.json(foodsWithFavorites);
      }
    } catch (error) {
      console.error('Error fetching foods:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

export const addFood = async (req, res) => {
  const { name, description, images, price, ingredients, flavors, tags, restaurant } = req.body;
  const userId = req.user.id;

  console.log('Input data:', req.body);

  try {
    // Validate ingredients
    const validIngredients = await prisma.ingredient.findMany({
      where: { name: { in: ingredients } }
    });

    console.log('Valid ingredients:', validIngredients);

    if (validIngredients.length !== ingredients.length) {
      return res.status(400).json({ message: 'Invalid ingredients' });
    }

    // Validate flavors
    const validFlavors = await prisma.flavor.findMany({
      where: { name: { in: flavors } }
    });

    console.log('Valid flavors:', validFlavors);

    if (validFlavors.length !== flavors.length) {
      return res.status(400).json({ message: 'Invalid flavors' });
    }

    // Validate tags
    const validTags = await prisma.tag.findMany({
      where: { name: { in: tags } }
    });

    console.log('Valid tags:', validTags);

    if (validTags.length !== tags.length) {
      return res.status(400).json({ message: 'Invalid tags' });
    }

    // Create or find the restaurant based on name and address
    let restaurantData = await prisma.restaurant.findFirst({
      where: {
        name: restaurant.name,
        address: restaurant.address
      }
    });

    console.log('Restaurant data:', restaurantData);

    if (!restaurantData) {
      restaurantData = await prisma.restaurant.create({
        data: {
          name: restaurant.name,
          address: restaurant.address,
          longitude: restaurant.longitude,
          latitude: restaurant.latitude,
        }
      });

      console.log('Created restaurant data:', restaurantData);
    }

    const newFood = await prisma.food.create({
      data: {
        name,
        description,
        images,
        price,
        createdBy: userId,
        ingredients: {
          create: validIngredients.map(ingredient => ({
            ingredient: {
              connect: { id: ingredient.id }
            }
          }))
        },
        flavors: {
          create: validFlavors.map(flavor => ({
            flavor: {
              connect: { id: flavor.id }
            }
          }))
        },
        foodTag: {
          create: validTags.map(tag => ({
            tag: {
              connect: { id: tag.id }
            }
          }))
        },
        foodRestaurant: {
          create: {
            restaurant: {
              connect: { id: restaurantData.id }
            }
          }
        }
      }
    });

    console.log('Created food data:', newFood);

    res.status(201).json(newFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAdminOrUserFoods = async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const userId = req.user.id;
    console.log('User ID:', userId);
    const isAdmin = req.user.isAdmin;

    const foods = await prisma.food.findMany({
      where: isAdmin ? {} : { createdBy: userId },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        images: true,
        createdBy: true,
        foodRestaurant: true
      }
    });

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateFood = async (req, res) => {
  try {
    const foodId = req.query.id;
    const userId = req.user.id;
    const isAdmin = req.user.isAdmin;
    const { name, description, images, price, ingredients, flavors, tags, restaurant } = req.body;

    // Check if food exists
    const food = await prisma.food.findUnique({
      where: { id: parseInt(foodId) }
    });

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    // Check permissions
    if (!isAdmin && food.createdBy !== userId) {
      return res.status(403).json({ message: 'Not authorized to edit this food' });
    }

    // Validate ingredients
    const validIngredients = await prisma.ingredient.findMany({
      where: { name: { in: ingredients } }
    });

    if (validIngredients.length !== ingredients.length) {
      return res.status(400).json({ message: 'Invalid ingredients' });
    }

    // Validate flavors
    const validFlavors = await prisma.flavor.findMany({
      where: { name: { in: flavors } }
    });

    if (validFlavors.length !== flavors.length) {
      return res.status(400).json({ message: 'Invalid flavors' });
    }

    // Validate tags
    const validTags = await prisma.tag.findMany({
      where: { name: { in: tags } }
    });

    if (validTags.length !== tags.length) {
      return res.status(400).json({ message: 'Invalid tags' });
    }

    // Update restaurant data
    let restaurantData = await prisma.restaurant.findFirst({
      where: {
        name: restaurant.name,
        address: restaurant.address
      }
    });

    if (!restaurantData) {
      restaurantData = await prisma.restaurant.create({
        data: {
          name: restaurant.name,
          address: restaurant.address,
          longitude: restaurant.longitude,
          latitude: restaurant.latitude,
        }
      });
    }

    // Update food with transaction
    const updatedFood = await prisma.$transaction(async (prisma) => {
      // Delete existing relations
      await prisma.foodIngredient.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodFlavor.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodTag.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodRestaurant.deleteMany({
        where: { foodId: parseInt(foodId) }
      });

      // Update food with new data
      return await prisma.food.update({
        where: { id: parseInt(foodId) },
        data: {
          name,
          description,
          images,
          price,
          ingredients: {
            create: validIngredients.map(ingredient => ({
              ingredient: {
                connect: { id: ingredient.id }
              }
            }))
          },
          flavors: {
            create: validFlavors.map(flavor => ({
              flavor: {
                connect: { id: flavor.id }
              }
            }))
          },
          foodTag: {
            create: validTags.map(tag => ({
              tag: {
                connect: { id: tag.id }
              }
            }))
          },
          foodRestaurant: {
            create: {
              restaurant: {
                connect: { id: restaurantData.id }
              }
            }
          }
        }
      });
    });

    res.json(updatedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const foodId = req.query.id;
    const userId = req.user.id;
    const isAdmin = req.user.isAdmin;

    // Check if food exists
    const food = await prisma.food.findUnique({
      where: { id: parseInt(foodId) }
    });

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    // Check permissions
    if (!isAdmin && food.createdBy !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this food' });
    }

    // Delete food and related data using transaction
    await prisma.$transaction(async (prisma) => {
      // Delete related data first
      await prisma.foodIngredient.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodFlavor.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodTag.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.foodRestaurant.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.favorite.deleteMany({
        where: { foodId: parseInt(foodId) }
      });
      await prisma.comment.deleteMany({
        where: { foodId: parseInt(foodId) }
      });

      // Finally delete the food
      await prisma.food.delete({
        where: { id: parseInt(foodId) }
      });
    });

    res.json({ message: 'Food deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
