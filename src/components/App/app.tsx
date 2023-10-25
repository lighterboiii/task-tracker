/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrackerComponent from '../../pages/Todo/tracker-component';
import Navigation from '../Navigation/Navigation';
import styles from './app.module.scss';
import Header from '../Header/Header';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Header />
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
    </BrowserRouter>
  );
};

export default App;
