import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import "./i18n";

import ScrollToTop from "./shared/ScrollToTop.js";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root')
);