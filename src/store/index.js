import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './ProductsSlice';
import { cartSlice } from './CartSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    api: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});