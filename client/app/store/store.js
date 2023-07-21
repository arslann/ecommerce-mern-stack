import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { authApi } from './authService';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
