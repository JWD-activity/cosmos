import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_BASE, GET_ALL_ASTRONAUT } from '../utils/config';
import { setLocalStorage, getLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  astronauts: getLocalStorage('astronauts') || {},
  error: '',
};

export const fetchAstronauts = createAsyncThunk(
  'astronauts/fetchAstronauts',
  async () => {
    const hasLocalData = getLocalStorage('astronauts');
    if (hasLocalData) return hasLocalData;
    else {
      const response = await axios.get(URL_BASE + GET_ALL_ASTRONAUT, {
        params: { limit: 100 },
      });
      setLocalStorage('astronauts', response.data.results);
      return response.data;
    }
  }
);

export const astronautSlice = createSlice({
  name: 'astronauts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAstronauts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAstronauts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.astronauts = action.payload;
      })
      .addCase(fetchAstronauts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { getSpacecraft } = astronautSlice.actions;

export default astronautSlice.reducer;
