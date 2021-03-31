//bootstrap + mdb
import "bootstrap/dist/css/bootstrap.css";
import  'mdbootstrap/css/mdb.css';
import {Provider} from "react-redux"
import store from "./redux/store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
