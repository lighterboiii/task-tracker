import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskBoard from '../../components/TaskBoard/TaskBoard';
import Navigation from '../../components/Navigation/Navigation';
import Modal from '../../components/Modal/Modal/Modal';
import AddTaskPopup from '../../components/AddTaskPopup/AddTaskPopup';
import styles from './board.module.scss';

const BoardPage: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.board}>
      <button
        type="button"
        className={styles.board__button}
        onClick={() => setModalOpen(true)}
      >
        + Add item
      </button>
      <Routes>
        <Route
          path="/todo"
          element={
            <TaskBoard
              title="To Do"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              board="todo"
            />
          }
        />
        <Route
          path="/progress"
          element={
            <TaskBoard
              title="In Progress"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              board="inprogress"
            />
          }
        />
        <Route
          path="/review"
          element={
            <TaskBoard
              title="Review"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              board="review"
            />
          }
        />
        <Route
          path="/done"
          element={
            <TaskBoard
              title="Done"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              board="done"
            />
          }
        />
      </Routes>
      {isModalOpen && (
        <Modal onClick={toggleModal}>
          <AddTaskPopup toggleModal={toggleModal} />
        </Modal>
      )}
      <Navigation />
    </div>
  );
};

export default BoardPage;
