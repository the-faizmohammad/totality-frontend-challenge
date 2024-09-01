// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const {
        id, title, price, location, image, landArea,
      } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id, title, price, location, image, landArea, quantity: 1,
        });
      }

      state.totalItems += 1;
      state.totalCost += parseFloat(price);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalCost -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalItems += quantity - existingItem.quantity;
        state.totalCost += (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    },
  },
});

export const {
  addToCart, removeFromCart, updateQuantity, clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
