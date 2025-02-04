import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from './slices/sectionSlice';
import navigationReducer from './slices/navigationSlice';
const store = configureStore({
  reducer: {
    section: sectionReducer,
    navigation: navigationReducer,
  },
});

export default store;




