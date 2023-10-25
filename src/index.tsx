import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './components/App/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);