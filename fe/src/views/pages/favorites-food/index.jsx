import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchFavorites } from 'store/slices/favoritesSlice';

const FavoritesFood = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const favoritesStatus = useSelector((state) => state.favorites.status);

  useEffect(() => {
    if (favoritesStatus === 'idle') {
      dispatch(fetchFavorites());
    }
  }, [favoritesStatus, dispatch]);

  return (
    <div>
      <h1>{t('favorites_food')}</h1>
      <ul>
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((food) => (
            <li key={food.id}>{food.name}</li>
          ))
        ) : (
          <p>{t('no_favorites')}</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritesFood;
