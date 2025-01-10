import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';
import styles from './stylesheets/styles.css';

const root = ReactDOM.createRoot(document.getElementById('contents'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);