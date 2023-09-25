import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const cartJSON = localStorage.getItem("cart");
  return cartJSON ? JSON.parse(cartJSON) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [], // Initialize from local storage
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);

      saveCartToLocalStorage(state); // Save to local storage
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const updatedCart = state.filter((item) => item.id !== itemId);
      saveCartToLocalStorage(updatedCart); // Save to local storage

      return updatedCart;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const itemToIncrement = state.find((item) => item.id === id);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        saveCartToLocalStorage(state); // Save to local storage
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const itemToDecrement = state.find((item) => item.id === id);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        saveCartToLocalStorage(state); // Save to local storage
      }
    },
    initializeCartFromLocalStorage: (state, action) => {
      return getCartFromLocalStorage();
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  initializeCartFromLocalStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
