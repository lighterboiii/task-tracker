// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    todo: [],
    inProgress: [],
    review: [],
    done: [],
  },
  reducers: {
    addTask: (state, action) => {
      const { board, task } = action.payload;
      state[board].push(task);
    },
    moveTask: (state, action) => {
      const { from, to, task } = action.payload;
      state[from] = state[from].filter((t) => t.id !== task.id);
      state[to].push(task);
    },
  },
});

export const { addTask, moveTask } = boardSlice.actions;
export default boardSlice.reducer;
