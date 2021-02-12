import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
  },
});

export const { setCoin } = globalSlice.actions;

export const selectCoin = (state) => state.global.coin;

export default globalSlice.reducer;
