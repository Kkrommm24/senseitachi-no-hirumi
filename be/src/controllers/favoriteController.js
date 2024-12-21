import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFavoriteFoodById = async (req, res) => {
  const userId = parseInt(req.userId);
  const { page, limit } = req.query;

  const pageNumber = page ? parseInt(page) : null;
  const limitNumber = limit ? parseInt(limit) : null;

  try {
    const userWithFavorites = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        favorites: {
          include: {
            food: true
          },
          skip: pageNumber && limitNumber ? (pageNumber - 1) * limitNumber : undefined,
          take: limitNumber || undefined,
        },
      },
    });

    if (!userWithFavorites) {
      return res.status(404).json({ message: 'User not found' });
    }

    const totalFavorites = await prisma.favorite.count({
      where: {
        userId: userId,
      },
    });

    let totalPages = null;

    if (pageNumber && limitNumber) {
      totalPages = Math.ceil(totalFavorites / limitNumber);
    }

    const favoriteFoods = userWithFavorites.favorites.map(favorite => favorite.food);
    res.status(200).json({
      favoriteFoods,
      totalFavorites,
      totalPages,
      currentPage: pageNumber || 1,
      pageSize: limitNumber || totalFavorites,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const addToFavorite = async (req, res) => {
  const { foodId } = req.body;
  const userId = req.userId; // From auth middleware

  try {
    console.log(foodId, userId);

    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId,
        foodId
      }
    });

    if (existingFavorite) {
      return res.status(400).json({ message: 'Food already in favorites' });
    }

    const favorite = await prisma.favorite.create({
      data: {
        userId,
        foodId
      }
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeFromFavorite = async (req, res) => {
  const foodId = parseInt(req.params.foodId, 10);
  const userId = req.userId; // From auth middleware

  try {
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId,
        foodId
      }
    });

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    await prisma.favorite.delete({
      where: {
        id: favorite.id
      }
    });

    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
