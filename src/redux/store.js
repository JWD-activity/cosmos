import { configureStore } from '@reduxjs/toolkit';
import spacecraftReducer from './spacecraftSlice';
import spaceDetailReducer from './spaceDetailSlice';
import astronautsReducer from './astronautSlice';

const store = configureStore({
  reducer: {
    spacecraft: spacecraftReducer,
    spacecraftDetails: spaceDetailReducer,
    astronauts: astronautsReducer,
  },
});

store.subscribe(() => {
  // console.log('State', store.getState().spacecraft);
});

export default store;
