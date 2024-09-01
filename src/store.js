import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './slices/propertySlice';
import cartReducer from './slices/cartSlice'; // Import cart slice

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    cart: cartReducer, // Add cart reducer
  },
});

export default store;
