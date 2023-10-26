/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITask {
  title: string;
  description: string;
  board?: string;
}

interface ITaskState {
  tasks: ITask[];
}

const initialState: ITaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<ITask>) => {
      const newTask: ITask = {
        title: action.payload.title,
        description: action.payload.description,
        board: 'todo',
      };
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { newTask } = taskSlice.actions;

export default taskSlice.reducer;
