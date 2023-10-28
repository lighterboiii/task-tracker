import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './TaskBoard.module.scss';
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup';
import Modal from '../Modal/Modal/Modal';
import { RootState } from '../../services/store';
import TaskElement from '../TaskElement/TaskElement';

interface IProps {
  title: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  board: 'todo' | 'review' | 'done' | 'inprogress';
}

const TaskBoard: FC<IProps> = ({ title, isModalOpen, toggleModal, board }) => {
  const taskList = useSelector((store: RootState) =>
    store.taskSlice.tasks.filter((task) => task.board === board)
  );

  return (
    <div className={styles.tasksBoard}>
      <div className={styles.tasksBoard__headContainer}>
        <h2 className={styles.tasksBoard__title}>{title}</h2>
      </div>
      <ul className={styles.tasksBoard__list}>
        {taskList.map((task) => (
          <TaskElement key={task.id} task={task} />
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
