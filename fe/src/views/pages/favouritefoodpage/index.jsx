import { useState } from "react";
import { useTranslation } from 'react-i18next';
import FoodItem from "./FoodItem";
import { useEffect } from "react";
import Favorite from "api/favorite";

const FavoriteFoodPage = () => {
  const { t } = useTranslation();
  const [favoriteFood, setFavoriteFood] = useState([])
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const fetchFavoriteFood = () => {
    Favorite.getAllFavorite({ page, limit })
      .then((response) => {
        setFavoriteFood(response.data['favoriteFoods']);
        setTotalPages(response.data['totalPages']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeFood = (id) => {
    Favorite.deleteFavorite(id)
      .then(() => {
        fetchFavoriteFood();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFavoriteFood();
  }, [page, limit]);

  return (
    <div class="container">
      <h1 className="text-2xl font-semibold text-gray-800 p-4">
        {t('favorite_list')}
      </h1>
      <div className="pagination flex justify-center items-center space-x-4 my-4">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          disabled={page === 1}
        >
          {t('previous')}
        </button>
        <span className="text-lg font-medium">{t('page')} {page} {t('of')} {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          disabled={page === totalPages}
        >
          {t('next')}
        </button>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        {favoriteFood.length === 0 && (
          <div className="text-2xl font-semibold text-gray-800 p-4 text-center">
            {t('no_data')}
          </div>
        )}
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
