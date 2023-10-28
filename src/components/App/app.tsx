/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header/Header';
import BoardPage from '../../pages/BoardPage/board';
import HomePage from '../../pages/HomePage/home';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boards/*" element={<BoardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
