import { configureStore } from '@reduxjs/toolkit';
import spacecraftReducer from './spacecraftSlice';
import spaceDetailReducer from './spaceDetailSlice';
import astronautsReducer from './astronautSlice';
import astroDetailReducer from './astronautDetailSlice';
import newsReducer from './newsSlice';

const store = configureStore({
  reducer: {
    spacecraft: spacecraftReducer,
    spacecraftDetails: spaceDetailReducer,
    astronauts: astronautsReducer,
    astronautDetails: astroDetailReducer,
    news: newsReducer,
  },
});

// store.subscribe(() => {
// console.log('State', store.getState().spacecraft);
// });

export default store;

// useful resources
// https://redux-toolkit.js.org/usage/usage-guide
// Store Subscriptions https://www.youtube.com/watch?v=0r3eKhWag-8
