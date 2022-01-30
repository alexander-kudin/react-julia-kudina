import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import "./i18n";

import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers/index.js';

import ScrollToTop from "./shared/ScrollToTop.js";

import App from './App';
import Loader from './shared/Loader.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={
      <Loader />
    }>
      <ReduxProvider store={store}>
        <Router>
          <ScrollToTop>
              <App />
          </ScrollToTop>
        </Router>
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root')
);