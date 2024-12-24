import { configureStore } from '@reduxjs/toolkit';
import selectedDishesReducer from 'store/slices/selectedDishesSlice';
import favoritesReducer from 'store/slices/favoritesSlice';
import userReducer from 'store/slices/userSlice';

export const store = configureStore({
    reducer: {
        selectedDishes: selectedDishesReducer,
        favorites: favoritesReducer,
        user: userReducer,
    },
});

export default store;
