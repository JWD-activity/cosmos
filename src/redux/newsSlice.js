import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLocalStorage, getLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  news: getLocalStorage('news') || {},
  error: '',
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const hasLocalData = getLocalStorage('news');
  if (hasLocalData) return hasLocalData;
  else {
    const response = await axios.get(
      'https://api.spaceflightnewsapi.net/v3/articles'
    );
    setLocalStorage('news', response.data);
    return response.data;
  }
});

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { getSpacecraft } = astronautSlice.actions;

export default newsSlice.reducer;
