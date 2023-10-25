/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice';

const store = configureStore({
  reducer: {
    boardReducer,
  },
});

export default store;
