import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    // Add more actions for modifying the cart if needed
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
