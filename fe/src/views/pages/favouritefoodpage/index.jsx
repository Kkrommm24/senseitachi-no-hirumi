import { useState } from "react";
import FoodItem from "./FoodItem";

const FavoriteFoodPage = () => {
  const [favoriteFood, setFavoriteFood] = useState([])
  const removeFood = (id) => {
    setFavoriteFood(prevFoods => prevFoods.filter(food => food.id !== id));
  };

  return (
    <div class="container">
    <h1 className="text-2xl font-semibold text-gray-800 p-4"> 
      お気に入り一覧
    </h1>
    <div className="max-w-6xl mx-auto p-4">
      {favoriteFood.length === 0 && (<div className="text-2xl font-semibold text-gray-800 p-4 text-center">データがありません</div>)}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteFood.map((food) => (
         <FoodItem key={food.id} {...food} removeFood={removeFood} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default FavoriteFoodPage;