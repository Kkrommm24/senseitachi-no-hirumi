import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    value: [],
  },
  reducers: {
    addFood: (state, action) => {
      state.value.push(action.payload);
    },
    removeFood: (state, action) => {
      state.value = state.value.filter(food => food.id !== action.payload);
    },
  },
});

export const { addFood, removeFood } = foodSlice.actions;

export default foodSlice.reducer;
