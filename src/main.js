import React from 'react';
import ReactDOM from '@esm-bundle/react-dom';
import App from './App.js';
import './styles.css';

ReactDOM.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App),
  ),
  document.getElementById('root'),
);
