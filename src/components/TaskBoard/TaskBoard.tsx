import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskBoard.module.scss';
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup';
import Modal from '../Modal/Modal/Modal';
import { RootState } from '../../services/store';
import { moveTask } from '../../services/slices/taskSlice';
import TaskElement from '../TaskElement/TaskElement';

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

  return (
    <div className={styles.tasks}>
      <h2>{title}</h2>
      <ul className={styles.tasks__list}>
        {taskList.map((task) => (
          <TaskElement task={task} handleMoveTask={handleMoveTask} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClick={toggleModal}>
          <AddTaskPopup toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default TaskBoard;
