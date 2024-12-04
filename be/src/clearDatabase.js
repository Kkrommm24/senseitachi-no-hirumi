import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clearDatabase = async () => {
  try {
    await prisma.foodFlavor.deleteMany();
    await prisma.foodIngredient.deleteMany();
    await prisma.foodTag.deleteMany();
    await prisma.foodRestaurant.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.favorite.deleteMany();
    await prisma.food.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.flavor.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.restaurant.deleteMany();
    await prisma.user.deleteMany();

    // Reset ID của các bảng
    await prisma.$executeRaw`ALTER SEQUENCE "Food_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Ingredient_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Flavor_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Tag_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Restaurant_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "FoodIngredient_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "FoodFlavor_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "FoodTag_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "FoodRestaurant_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Favorite_id_seq" RESTART WITH 1`;
    await prisma.$executeRaw`ALTER SEQUENCE "Comment_id_seq" RESTART WITH 1`;


    console.log('All data cleared');
  } catch (error) {
    console.error('Error clearing database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

clearDatabase();
