/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import TrackerComponent from '../../components/TrackerComponent/tracker-component';
import Navigation from '../../components/Navigation/Navigation';
import styles from './board.module.scss';

const BoardPage: FC = () => {
  return (
    <div className={styles.board}>
      <h2>It's empty here yet</h2>
      <Routes>
        <Route path="/todo" element={<TrackerComponent title="To Do" />} />
        <Route
          path="/progress"
          element={<TrackerComponent title="In Progress" />}
        />
        <Route path="/review" element={<TrackerComponent title="Review" />} />
        <Route path="/done" element={<TrackerComponent title="Done" />} />
      </Routes>
      <Navigation />
    </div>
  );
};

export default BoardPage;
