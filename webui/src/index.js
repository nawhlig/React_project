import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import NmapArray from "./exam/NmapArray"
import Githublist from "./exam/Githublist"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Githublist/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
