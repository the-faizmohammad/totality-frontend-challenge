import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './slices/propertySlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});

export default store;
