import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './TaskBoard.module.scss';
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup';
import Modal from '../Modal/Modal/Modal';
import { RootState } from '../../services/store';
import { moveTask } from '../../services/slices/taskSlice';
import TaskElement from '../TaskElement/TaskElement';
import ChevronIcon from '../../ui/icons/chevron-icon/chevron-icon';

interface IProps {
  title: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  board: 'todo' | 'review' | 'done' | 'inprogress';
}

const TaskBoard: FC<IProps> = ({ title, isModalOpen, toggleModal, board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskList = useSelector((store: RootState) =>
    store.taskSlice.tasks.filter((task) => task.board === board)
  );

  const handleMoveTask = (
    id: string,
    newBoard: 'todo' | 'review' | 'done' | 'inprogress'
  ) => {
    dispatch(moveTask({ id, newBoard }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__headContainer}>
        <button
          type="button"
          className={styles.tasks__button}
          onClick={handleBack}
        >
          <ChevronIcon position="left" />
        </button>
        <h2 className={styles.tasks__title}>{title}</h2>
      </div>
      <ul className={styles.tasks__list}>
        {taskList.map((task) => (
          <TaskElement
            key={task.id}
            task={task}
            handleMoveTask={handleMoveTask}
          />
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
