import { configureStore } from '@reduxjs/toolkit';
import spacecraftReducer from './spacecraftSlice';
import spaceDetailReducer from './spaceDetailSlice';

const store = configureStore({
  reducer: {
    spacecraft: spacecraftReducer,
    spacecraftDetails: spaceDetailReducer,
  },
});

export default store;
