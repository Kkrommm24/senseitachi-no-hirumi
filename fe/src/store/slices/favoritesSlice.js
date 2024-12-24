import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Food from 'api/food';

// Tạo một async thunk để gọi API
export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
  const response = await Food.getFavoritesFood('11');
  console.log(response);

  return response.data.favoriteFoods;
});

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(food => food.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
