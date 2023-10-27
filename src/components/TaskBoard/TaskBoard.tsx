import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskBoard.scss';
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup';
import Modal from '../Modal/Modal/Modal';
import { RootState } from '../../services/store';
import { moveTask } from '../../services/slices/taskSlice';

interface IProps {
  title: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  board: 'todo' | 'review' | 'done' | 'inprogress';
}

const TaskBoard: FC<IProps> = ({ title, isModalOpen, toggleModal, board }) => {
  const dispatch = useDispatch();
  const taskList = useSelector((store: RootState) =>
    store.taskSlice.tasks.filter((task) => task.board === board)
  );

  const handleMoveTask = (
    id: number | undefined,
    newBoard: 'todo' | 'review' | 'done' | 'inprogress'
  ) => {
    dispatch(moveTask({ id, newBoard }));
  };
  console.log(taskList);

  return (
    <div className={styles.board}>
      <h2>{board}</h2>
      <p>{title}</p>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <div>
              <strong>Title:</strong> {task.title}
            </div>
            <div>
              <strong>Description:</strong> {task.description}
            </div>
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
      <button
        type="button"
        className={styles.board__button}
        onClick={toggleModal}
      >
        + Add item
      </button>
      {isModalOpen && (
        <Modal onClick={toggleModal}>
          <AddTaskPopup toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default TaskBoard;
