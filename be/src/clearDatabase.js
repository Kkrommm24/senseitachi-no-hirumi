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

    console.log('All data cleared');
  } catch (error) {
    console.error('Error clearing database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

clearDatabase();
