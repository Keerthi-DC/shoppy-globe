// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { [productId]: { product, quantity } }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const id = product.id;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { product, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
