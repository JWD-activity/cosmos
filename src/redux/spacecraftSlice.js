import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpacecraft.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchSpacecraft.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.spacecraft = action.payload;
      })
      .addCase(fetchSpacecraft.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          'Oops! Something went worng, while fetching the Spacecraft data.';
      });
  },
});

export default spacecraftSlice.reducer;

// useful resources
// https://redux-toolkit.js.org/api/createreducer#builderaddcase
// https://redux-toolkit.js.org/api/createreducer#builderaddmatcher
