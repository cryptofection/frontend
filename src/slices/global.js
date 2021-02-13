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

export const { setCoinID } = globalSlice.actions;

export const selectCoinID = (state) => state.global.coinID;

export default globalSlice.reducer;
