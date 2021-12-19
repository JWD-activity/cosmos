import { configureStore } from '@reduxjs/toolkit';
import spacecraftReducer from './spacecraftSlice';
import spaceDetailReducer from './spaceDetailSlice';
import astronautsReducer from './astronautSlice';
import newsReducer from './newsSlice';

const store = configureStore({
  reducer: {
    spacecraft: spacecraftReducer,
    spacecraftDetails: spaceDetailReducer,
    astronauts: astronautsReducer,
    news: newsReducer,
  },
});

store.subscribe(() => {
  // console.log('State', store.getState().spacecraft);
});

export default store;
