import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import News from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <News />
  </BrowserRouter>,
  document.getElementById('root')
);
