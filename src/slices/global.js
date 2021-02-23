import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinID: '1',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCoinID: (state, action) => {
      state.coinID = action.payload;
    },
  },
});

export const {
  setCoinID,
  incrementLoadCount,
  resetLoadCount,
} = globalSlice.actions;

export const selectCoinID = (state) => state.global.coinID;
export const selectLoadCount = (state) => state.global.loadCount;

export default globalSlice.reducer;
