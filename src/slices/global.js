import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinID: '1',
  searchQuery: 'Bitcoin',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCoinID: (state, action) => {
      state.coinID = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCoinID, setSearchQuery } = globalSlice.actions;

export const selectCoinID = (state) => state.global.coinID;
export const selectSearchQuery = (state) => state.global.searchQuery;

export default globalSlice.reducer;
