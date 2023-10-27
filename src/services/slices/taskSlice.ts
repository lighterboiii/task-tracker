/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITask {
  id?: number | undefined;
  title: string;
  description: string;
  board: 'todo' | 'review' | 'done' | 'inprogress';
}

interface ITaskState {
  tasks: ITask[];
}

const initialState: ITaskState = {
  tasks: [],
};

let nextTaskId = 1;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<ITask>) => {
      const newTask: ITask = {
        id: nextTaskId++,
        title: action.payload.title,
        description: action.payload.description,
        board: 'todo',
      };
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        id: number | undefined;
        newBoard: 'todo' | 'review' | 'done' | 'inprogress';
      }>
    ) => {
      const { id, newBoard } = action.payload;
      const taskIndex = state.tasks.findIndex((t) => t.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].board = newBoard;
      }
    },
  },
});

export const { newTask, deleteTask, moveTask } = taskSlice.actions;

export default taskSlice.reducer;
