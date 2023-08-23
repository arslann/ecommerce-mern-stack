import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { authApi } from './authService';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
