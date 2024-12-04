import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFavoriteFoodById = async (req, res) => {
  const userId = parseInt(req.params.userId);
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
