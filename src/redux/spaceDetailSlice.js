import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL_BASE, GET_ALL_SPACECRAFT } from '../utils/config';

const initialState = {
  isLoading: true,
  spacecraftDetails: {},
  error: '',
};

export const fetchSpaceDetails = createAsyncThunk(
  'spacecraft/fetchSpaceDetails',
  async (id) => {
    const response = await axios.get(`${URL_BASE}${GET_ALL_SPACECRAFT}${id}`);
    return response.data;
  }
);

export const spaceDetailSlice = createSlice({
  name: 'spacecraftDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpaceDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSpaceDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.spacecraftDetails = action.payload;
      })
      .addCase(fetchSpaceDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { getSpacecraft } = spaceDetailSlice.actions;

export default spaceDetailSlice.reducer;
