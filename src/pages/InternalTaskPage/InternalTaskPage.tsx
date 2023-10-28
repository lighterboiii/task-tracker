/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../services/store';
import { moveTask } from '../../services/slices/taskSlice';

interface ITaskPage {
  handleMoveTask: any;
}

const InternalTaskPage: FC<ITaskPage> = ({ handleMoveTask }) => {
  const { id } = useParams();
  const tasksList = useSelector((store: RootState) => store.taskSlice.tasks);
  const selectedTask = useMemo(() => {
    return tasksList.find((task) => task.id === id);
  }, [tasksList, id]);

  console.log(tasksList);
  console.log(selectedTask);
  return (
    <div className="taskPage">
      <h2>{selectedTask!.title}</h2>
      <div>
        <button
          type="button"
          onClick={() => handleMoveTask(selectedTask!.id, 'todo')}
        >
          Todo
        </button>
        <button
          type="button"
          onClick={() => handleMoveTask(selectedTask!.id, 'inprogress')}
        >
          Processing
        </button>
        <button
          type="button"
          onClick={() => handleMoveTask(selectedTask!.id, 'review')}
        >
          Review
        </button>
        <button
          type="button"
          onClick={() => handleMoveTask(selectedTask!.id, 'done')}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default InternalTaskPage;
