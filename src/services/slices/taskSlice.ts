import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITask {
  id: string;
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

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<ITask>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const newTask: ITask = {
        id: action.payload.id,
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
        id: string;
        newBoard: 'todo' | 'review' | 'done' | 'inprogress';
      }>
    ) => {
      const { id, newBoard } = action.payload;
      const taskIndex = state.tasks.findIndex(
        (t) => t.id !== undefined && t.id === id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].board = newBoard;
      }
    },
  },
});

export const { newTask, deleteTask, moveTask } = taskSlice.actions;

export default taskSlice.reducer;
