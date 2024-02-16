// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice'; // Ajusta la ruta según corresponda

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
