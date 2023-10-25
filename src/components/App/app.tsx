/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" element={<Layout />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default App;
