import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { User } from './seeders/userSeeder.js';
import { Ingredient } from './seeders/ingredientSeeder.js';
import { Flavor } from './seeders/flavorSeeder.js';
import { Tag } from './seeders/tagSeeder.js';
import { Food } from './seeders/foodSeeder.js';
import { FoodIngredient } from './seeders/foodIngredientSeeder.js';
import { FoodFlavor } from './seeders/foodFlavorSeeder.js';
import { FoodTag } from './seeders/foodTagSeeder.js';
import { Favorite } from './seeders/favoriteSeeder.js';
import { Comment } from './seeders/commentSeeder.js';
import { Restaurant } from './seeders/restaurantSeeder.js';
import { FoodRestaurant } from './seeders/foodRestaurantSeeder.js';

const prisma = new PrismaClient();

async function main() {
  // Xóa dữ liệu hiện có trong các bảng
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

  // Seed user
  for (let user of User) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  // Seed ingredient
  for (let ingredient of Ingredient) {
    await prisma.ingredient.create({
      data: ingredient,
    });
  }

  // Seed flavor
  for (let flavor of Flavor) {
    await prisma.flavor.create({
      data: flavor,
    });
  }

  // Seed tag
  for (let tag of Tag) {
    await prisma.tag.create({
      data: tag,
    });
  }

  // Seed food
  for (let food of Food) {
    await prisma.food.create({
      data: food,
    });
  }

  // Seed FoodIngredient
  for (let fi of FoodIngredient) {
    await prisma.foodIngredient.create({
      data: fi,
    });
  }

  // Seed FoodFlavor
  for (let foodFlavor of FoodFlavor) {
    await prisma.foodFlavor.create({
      data: foodFlavor,
    });
  }

  // Seed FoodTag
  for (let foodTag of FoodTag) {
    await prisma.foodTag.create({
      data: foodTag,
    });
  }

  // Seed favorite
  for (let favorite of Favorite) {
    await prisma.favorite.create({
      data: favorite,
    });
  }

  // Seed comment
  for (let comment of Comment) {
    await prisma.comment.create({
      data: comment,
    });
  }

  // Seed restaurant
  for (let restaurant of Restaurant) {
    await prisma.restaurant.create({
      data: restaurant,
    });
  }

  // Seed FoodRestaurant
  for (let foodRestaurant of FoodRestaurant) {
    await prisma.foodRestaurant.create({
      data: foodRestaurant,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
