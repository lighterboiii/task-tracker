import ReactDOM from 'react-dom/client';
import './index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './services/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
