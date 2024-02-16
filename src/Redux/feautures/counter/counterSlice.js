// src/redux/slices/paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    resultsPerPage: 5, // Asume un valor inicial, ajústalo según necesites
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setResultsPerPage: (state, action) => {
      state.resultsPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setResultsPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
