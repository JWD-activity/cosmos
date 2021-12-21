import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_ALL_NEWS } from '../utils/config';
import { setLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  news: [],
  error: '',
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(GET_ALL_NEWS);
  setLocalStorage('news', response.data);
  return response.data;
});

export const newsSlice = createSlice({
  name: 'news',
  initialState,
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

export default newsSlice.reducer;

// useful resources
// https://redux-toolkit.js.org/api/createreducer#builderaddcase
// https://redux-toolkit.js.org/api/createreducer#builderaddmatcher
