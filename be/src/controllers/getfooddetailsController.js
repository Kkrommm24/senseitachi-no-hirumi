import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getFoodDetails = async (req, res) => {
  const { id } = req.query;
  const userId = req.userId; // Lấy userId từ request header đã qua middleware

  try {
    // Kiểm tra nếu không có ID hoặc userId
    if (!id) {
      return res.status(400).json({ error: 'Food ID is required.' });
    }
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid or missing user ID.' });
    }

    // Tìm kiếm món ăn theo ID
    const food = await prisma.food.findUnique({
      where: {
        id: parseInt(id, 10),
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
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        flavors: {
          include: {
            flavor: true,
          },
        },
        comments: {
          include: {
            user: true, // Đảm bảo bao gồm người dùng tạo comment
          },
        },
      },
    });

    // Xử lý nếu không tìm thấy món ăn
    if (!food) {
      return res.status(404).json({ message: 'Food not found.' });
    }

    // Kiểm tra xem món ăn có trong danh sách yêu thích của người dùng hiện tại không
    const isFavourite = await prisma.favorite.findFirst({
      where: {
        foodId: food.id,
        userId: userId, // Đảm bảo userId là số nguyên
      },
    })
      ? 1
      : 0;

    // Chuẩn bị dữ liệu trả về
    const foodDetails = {
      name: food.name,
      image: food.image,
      description: food.description,
      price: food.price,
      tags: Array.isArray(food.foodTag) ? food.foodTag.map((ft) => ft.tag?.name) : [],
      restaurants: Array.isArray(food.foodRestaurant)
        ? food.foodRestaurant.map((fr) => ({
            name: fr.restaurant.name,
            longitude: fr.restaurant.longitude,
            latitude: fr.restaurant.latitude,
          }))
        : [],
      ingredients: Array.isArray(food.ingredients)
        ? food.ingredients.map((fi) => fi.ingredient.name)
        : [],
      flavors: Array.isArray(food.flavors)
        ? food.flavors.map((ff) => ff.flavor.name)
        : [],
      comments: Array.isArray(food.comments)
        ? food.comments.map((comment) => ({
            userId: comment.userId,
            userName: comment.user?.name, // Sử dụng optional chaining để tránh lỗi
            content: comment.content,
            createdAt: comment.createdAt,
          }))
        : [],
      isFavourite,
    };

    // Trả về thông tin chi tiết món ăn
    res.status(200).json(foodDetails);
  } catch (error) {
    console.error('Error fetching food details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
