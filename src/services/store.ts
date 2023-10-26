import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice';

const store = configureStore({
  reducer: {
    taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
