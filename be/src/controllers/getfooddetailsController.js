import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getFoodDetails = async (req, res) => {
  const { id } = req.query;

  try {
    // Kiểm tra nếu không có ID được cung cấp
    if (!id) {
      return res.status(400).json({ error: 'Food ID is required.' });
    }

    // Tìm kiếm món ăn theo ID
    const food = await prisma.food.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        foodTag: {
          include: {
            tag: true,
          },
        },
        foodRestaurant: {
          include: {
            restaurant: true,
          },
        },
        ingredients: { // Sửa từ foodIngredients thành ingredients
          include: {
            ingredient: true,
          },
        },
        flavors: {
          include: {
            flavor: true,
          },
        },
        comments: true,
      },
    });

    // Xử lý nếu không tìm thấy món ăn
    if (!food) {
      return res.status(404).json({ message: 'Food not found.' });
    }

    // Chuẩn bị dữ liệu trả về
    const foodDetails = {
      name: food.name,
      image: food.image,
      description: food.description,
      tags: food.foodTag ? food.foodTag.map((ft) => ft.tag.name) : [], // Kiểm tra foodTag có tồn tại không
      restaurants: food.foodRestaurant ? food.foodRestaurant.map((fr) => ({
        name: fr.restaurant.name,
        longitude: fr.restaurant.longitude,
        latitude: fr.restaurant.latitude,
      })) : [], // Kiểm tra foodRestaurant có tồn tại không
        ingredients: food.ingredients ? food.ingredients.map((fi) => fi.ingredient.name) : [], // Kiểm tra ingredients có tồn tại không
        flavors: food.flavors ? food.flavors.map((ff) => ff.flavor.name) : [], // Kiểm tra flavors có tồn tại không
        comments: food.comments ? food.comments.map((comment) => ({
          userId: comment.userId,
          content: comment.content,
          createdAt: comment.createdAt,
        })) : [], // Kiểm tra comments có tồn tại không
    };

    // Trả về thông tin chi tiết món ăn
    res.status(200).json(foodDetails);
  } catch (error) {
    console.error('Error fetching food details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};