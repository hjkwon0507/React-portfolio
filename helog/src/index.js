import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from './firebase';
console.log(firebase);

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

