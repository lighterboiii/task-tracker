// TaskBoard.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask } from '../../services/slices/taskSlice';
import { RootState } from '../../services/store';

interface ITaskElementProps {
  board: 'todo' | 'review' | 'done' | 'inprogress';
}

const TaskElement: React.FC<ITaskElementProps> = ({ board }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) =>
    state.taskSlice.tasks.filter((task) => task.board === board)
  );

  const handleMoveTask = (
    id: number | undefined,
    newBoard: 'todo' | 'review' | 'done' | 'inprogress'
  ) => {
    dispatch(moveTask({ id, newBoard }));
  };

  console.log(tasks);
  return (
    <div>
      <h2>Task Element</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <button
              type="button"
              onClick={() => handleMoveTask(task.id, 'todo')}
            >
              Move to Todo
            </button>
            <button
              type="button"
              onClick={() => handleMoveTask(task.id, 'review')}
            >
              Move to Review
            </button>
            <button
              type="button"
              onClick={() => handleMoveTask(task.id, 'done')}
            >
              Move to Done
            </button>
            <button
              type="button"
              onClick={() => handleMoveTask(task.id, 'inprogress')}
            >
              Move to In Progress
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskElement;
