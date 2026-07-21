// src/store/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  term: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state) => state.search.term;
export default searchSlice.reducer;
