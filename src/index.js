import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Styling
import './index.css';

// React Router Navigation
import { BrowserRouter as Router } from 'react-router-dom';

// Localization
import "./i18n";

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/reducers';


// Project imports
import App from './App';
import Loader from './shared/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ <Loader /> }>
      <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root')
);