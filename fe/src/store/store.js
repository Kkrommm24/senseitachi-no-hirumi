import { configureStore } from '@reduxjs/toolkit';
import selectedDishesReducer from 'store/slices/selectedDishesSlice';

export const store = configureStore({
  reducer: {
    selectedDishes: selectedDishesReducer,
  },
});

export default store;
