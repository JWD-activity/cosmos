import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_BASE, GET_ALL_SPACECRAFT } from '../utils/config';
import { setLocalStorage, getLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  spacecraft: getLocalStorage('spacecraft') || {},
  error: '',
};

export const fetchSpacecraft = createAsyncThunk(
  'spacecraft/fetchSpacecraft',
  async () => {
    const hasLocalData = getLocalStorage('spacecraft');
    if (hasLocalData) return hasLocalData;
    else {
      const response = await axios.get(URL_BASE + GET_ALL_SPACECRAFT, {
        params: { limit: 27 },
      });
      setLocalStorage('spacecraft', response.data);
      return response.data;
    }
  }
);

export const spacecraftSlice = createSlice({
  name: 'spacecraft',
  initialState,
  reducers: {
    getSpacecraft(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpacecraft.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSpacecraft.fulfilled, (state, action) => {
        state.isLoading = false;
        state.spacecraft = action.payload;
      })
      .addCase(fetchSpacecraft.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { getSpacecraft } = spacecraftSlice.actions;

export default spacecraftSlice.reducer;
