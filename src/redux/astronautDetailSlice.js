import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_BASE, GET_ALL_ASTRONAUT } from '../utils/config';
import { setLocalStorage, getLocalStorage } from '../utils/utils';

const initialState = {
  isLoading: true,
  astronautDetails: getLocalStorage('astronautDetails') || {},
  error: '',
};

export const fetchAstronautDetails = createAsyncThunk(
  'astronauts/fetchAstronautDetails',
  async (id) => {
    const hasLocalData = getLocalStorage('astronautDetails');
    if (hasLocalData) return hasLocalData;
    else {
      const response = await axios.get(URL_BASE + GET_ALL_ASTRONAUT + id);
      setLocalStorage('astronautDetails', response.data);
      return response.data;
    }
  }
);

export const astronautDetailSlice = createSlice({
  name: 'astronautDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAstronautDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAstronautDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.astronautDetails = action.payload;
      })
      .addCase(fetchAstronautDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { getSpacecraft } = astronautSlice.actions;

export default astronautDetailSlice.reducer;

// useful resources
// https://redux-toolkit.js.org/api/createreducer#builderaddcase
// https://redux-toolkit.js.org/api/createreducer#builderaddmatcher