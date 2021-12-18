import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  spacecraft: {},
  error: '',
};

export const fetchSpacecraft = createAsyncThunk(
  'spacecraft/fetchSpacecraft',
  async () => {
    const response = await axios.get(
      'https://lldev.thespacedevs.com/2.2.0/config/spacecraft/',
      { params: { limit: 27 } }
    );
    return response.data;
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
