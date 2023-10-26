/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TrackerComponent from '../../components/TrackerComponent/TrackerComponent';
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
            <TrackerComponent
              title="To Do"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          }
        />
        <Route
          path="/progress"
          element={
            <TrackerComponent
              title="In Progress"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          }
        />
        <Route
          path="/review"
          element={
            <TrackerComponent
              title="Review"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          }
        />
        <Route
          path="/done"
          element={
            <TrackerComponent
              title="Done"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          }
        />
      </Routes>
      {isModalOpen && (
        <Modal onClick={toggleModal}>
          <AddTaskPopup />
        </Modal>
      )}
      <Navigation />
    </div>
  );
};

export default BoardPage;
