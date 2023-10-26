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

  const handleCloseModal = () => {
    setModalOpen(false);
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
        <Route path="/todo" element={<TrackerComponent title="To Do" />} />
        <Route
          path="/progress"
          element={<TrackerComponent title="In Progress" />}
        />
        <Route path="/review" element={<TrackerComponent title="Review" />} />
        <Route path="/done" element={<TrackerComponent title="Done" />} />
      </Routes>
      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <AddTaskPopup />
        </Modal>
      )}
      <Navigation />
    </div>
  );
};

export default BoardPage;
