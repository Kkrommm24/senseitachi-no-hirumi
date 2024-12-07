import { configureStore } from '@reduxjs/toolkit';
import selectedDishesReducer from 'store/slices/selectedDishesSlice';
import favoritesReducer from 'store/slices/favoritesSlice';

export const store = configureStore({
    reducer: {
        selectedDishes: selectedDishesReducer,
        favorites: favoritesReducer,
    },
});

export default store;
