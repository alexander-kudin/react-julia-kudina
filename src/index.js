import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// React Router Navigation
import { BrowserRouter } from 'react-router-dom';

// React Helmet
import { HelmetProvider } from 'react-helmet-async';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/reducers';

// Project imports
import App from './App';
import Loader from './components/Loader';

// Localization
import "./i18n";

ReactDOM.render(
    <Suspense fallback={ <Loader /> }>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxProvider>
      </HelmetProvider>
    </Suspense>,

  document.getElementById('root')
);