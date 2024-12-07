import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from 'store/slices/favoritesSlice';

const FavoritesFood = () => {
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
      <h1>Favorites Food</h1>
      <ul>
        { Array.isArray(favorites) && favorites.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesFood;
