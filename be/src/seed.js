import { PrismaClient } from '@prisma/client';
import { Food } from './seeders/foodSeeder.js';
import { User } from './seeders/userSeeder.js';
import { Ingredient } from './seeders/ingredientSeeder.js';
import { FoodIngredient } from './seeders/foodIngredientSeeder.js';
import { Flavor } from './seeders/flavorSeeder.js';
import {  FoodFlavor } from './seeders/foodFlavorSeeder.js';
import { Tag } from './seeders/tagSeeder.js';
import { FoodTag } from './seeders/foodTagSeeder.js';
import { Favorite } from './seeders/favoriteSeeder.js';
import { Comment } from './seeders/commentSeeder.js';
import { Restaurant } from './seeders/restaurantSeeder.js';
import { FoodRestaurant } from './seeders/foodRestaurantSeeder.js';

const prisma = new PrismaClient();

async function main() {

     // Seed user
  for (let user of User) {
    await prisma.user.create({
      data: user,
    });
  }

  // Seed food
  for (let food of Food) {
    await prisma.food.create({
      data: food,
    });
  }

  // Seed ingredient
  for (let ingredient of Ingredient) {
    await prisma.ingredient.create({
      data: ingredient,
    });
  }

  // Seed FoodIngredient
for (let fi of FoodIngredient) {
  await prisma.foodIngredient.create({
    data: fi,
  });
}

// Seed Flavor
for (let flavor of Flavor) {
  await prisma.flavor.create({
    data: flavor,
  });
}

// seed FoodFlavor
for (let foodFlavor of FoodFlavor) {
  await prisma.foodFlavor.create({
    data: foodFlavor,
  });

}

// seed Tag
for (let tag of Tag) {
  await prisma.tag.create({
    data: tag,
  });
}

// seed FoodTag
for (let foodTag of FoodTag) {
  await prisma.foodTag.create({
    data: foodTag,
  });
}

// seed Favorite
for (let favorite of Favorite) {
  await prisma.favorite.create({
    data: favorite,
  });
}

// seed Comment
for (let comment of Comment) {
  await prisma.comment.create({
    data: comment,
  });
}

// seed Restaurant
for (let restaurant of Restaurant) {
  await prisma.restaurant.create({
      data: restaurant,
  });
}

// seed FoodRestaurant
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
