import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, name, price, thumbnail } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, thumbnail, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalCost += price;
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity >= 0) {
        state.totalItems += quantity - item.quantity;
        state.totalCost += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
        if (item.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.quantity * item.price;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;