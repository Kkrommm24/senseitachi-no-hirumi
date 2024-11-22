import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchFoodsByTag = async (req, res) => {
  const { tags } = req.query;

  try {
    // Kiểm tra tham số tags
    if (!tags) {
      return res.status(400).json({ error: 'Tags are required for filtering.' });
    }

    // Tách danh sách tags từ query parameters
    const tagList = tags.split(',');

    // Truy vấn bảng food dựa trên các tag
    const foods = await prisma.food.findMany({
      where: {
        foodTag: {
          some: { tag: { name: { in: tagList } } }, // Lọc món ăn dựa trên danh sách tag name
        },
      },
      include: {
        foodTag: { include: { tag: true } }, // Bao gồm thông tin chi tiết về các tag
      },
    });

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
