import React from 'react';

// Material UI
import { createTheme, CssBaseline,  } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

// React Router Navigation
import Routes from './routes';

// Localization
import { useTranslation } from "react-i18next";

// Component Imports
import ScrollToTop from "./shared/ScrollToTop";
import Header from './shared/Header';

// Redux
import { useDispatch } from 'react-redux';
import { getArtworks } from './redux/actions/artworksActions.js';
import { getSeries } from './redux/actions/seriesActions.js';
import { getExhibitions } from './redux/actions/exhibitionsActions.js';

const App = () => {
  const { i18n, t } = useTranslation();
  const theme = createTheme();

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(getSeries());
      dispatch(getArtworks());
      dispatch(getExhibitions());
  }, [dispatch]);


  const changeLanguage = () => {
    i18n.language === "ru" ?  i18n.changeLanguage("en") : i18n.changeLanguage("ru")
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop>
        <Header changeLanguage = {changeLanguage} t ={t}/>
        <main>
          <Routes />
        </main>
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App;
