import { createSlice } from '@reduxjs/toolkit';

export const selectedDishesSlice = createSlice({
  name: 'food',
  initialState: {
    value: [],
  },
  reducers: {
    selectDish: (state, action) => {
      state.value.push(action.payload);
    },
    deselectDish: (state, action) => {
      state.value = state.value.filter(food => food.id !== action.payload);
    },
  },
});

export const { selectDish, deselectDish } = selectedDishesSlice.actions;

export default selectedDishesSlice.reducer;
