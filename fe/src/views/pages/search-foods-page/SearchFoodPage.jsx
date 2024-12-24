import Food from "api/food";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FoodList from "../homepage/food-list";

const SearchFoodPage = () => {
  const [foods, setFoods] = useState([]);

  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('name');
  const queryIngredients = searchParams.get('ingredients');
  const queryFlavors = searchParams.get('flavors');
  const queryTags = searchParams.get('tags');
  const queryMinPrice = searchParams.get('minPrice');
  const queryMaxPrice = searchParams.get('maxPrice');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await Food.searchFoods({
          name: queryName,
          ingredients: queryIngredients,
          flavors: queryFlavors,
          tags: queryTags,
          minPrice: queryMinPrice,
          maxPrice: queryMaxPrice,
        });
        setFoods(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFoods();
  }, [queryName, queryIngredients, queryFlavors, queryTags, queryMinPrice, queryMaxPrice]);

  return (
    <div className="w-3/4 m-auto pt-4">
      <FoodList foods={foods} />
    </div>
  )
};

export default SearchFoodPage;
