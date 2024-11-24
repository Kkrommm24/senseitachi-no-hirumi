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
