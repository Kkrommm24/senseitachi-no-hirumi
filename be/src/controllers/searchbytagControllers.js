import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchFoodsByTag = async (req, res) => {
  const { tags } = req.query;

  try {
    if (!tags) {
      return res.status(400).json({ error: 'Tags are required for filtering.' });
    }

    const tagList = tags.split(',').map((tag) => tag.trim());

    const foods = await prisma.food.findMany({
      where: {
        AND: tagList.map((tagName) => ({
          foodTag: {
            some: {
              tag: {
                name: tagName,
              },
            },
          },
        })),
      },
      select: {
        id: true,
        name: true,
        images: true, 
      },
    });

    if (foods.length === 0) {
      return res.status(404).json({ message: 'No foods found with all the given tags.' });
    }

    res.status(200).json(foods); // Trả về danh sách tên món ăn
  } catch (error) {
    console.error('Error searching foods by all tags:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
