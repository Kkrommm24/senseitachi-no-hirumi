import { PrismaClient } from '@prisma/client';

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
      const foods = await prisma.food.findMany({
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

export const addFood = async (req, res) => {
  const { name, description, images, price, ingredients, flavors, tags, restaurant } = req.body;

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
