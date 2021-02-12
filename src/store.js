import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import { global } from 'slices';

export default configureStore({
  reducer: {
    global,
  },
  preloadedState: load(),
  middleware: [save(), ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});
