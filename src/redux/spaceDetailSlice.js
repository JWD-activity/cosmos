import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL_BASE, GET_ALL_SPACECRAFT } from '../utils/config';
import { setLocalStorage, getLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  spacecraftDetails: getLocalStorage('spacecraftDetails') || {},
  error: '',
};

export const fetchSpaceDetails = createAsyncThunk(
  'spacecraft/fetchSpaceDetails',
  async (id) => {
    const response = await axios.get(URL_BASE + GET_ALL_SPACECRAFT + id);
    setLocalStorage('spacecraftDetails', response.data);
    return response.data;
  }
);

export const spaceDetailSlice = createSlice({
  name: 'spacecraftDetails',
  initialState,
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
        state.error = 'Sorry, Something went worng!';
      });
  },
});

export default spaceDetailSlice.reducer;

// useful resources
// https://redux-toolkit.js.org/api/createreducer#builderaddcase
// https://redux-toolkit.js.org/api/createreducer#builderaddmatcher
