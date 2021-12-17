import { configureStore } from '@reduxjs/toolkit';
import spacecraftReducer from './spacecraftSlice';

const store = configureStore({
  reducer: { spacecraft: spacecraftReducer },
});

export default store;
