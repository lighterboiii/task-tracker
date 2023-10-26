/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITaskState {
  title: string;
  description: string;
}

const initialState: ITaskState = {
  title: '',
  description: '',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<ITaskState>) => {
      const { title, description } = action.payload;
      state.title = title;
      state.description = description;
    },
  },
});

export const { newTask } = taskSlice.actions;

export default taskSlice.reducer;
