import { useEffect } from 'react';

// Material UI
import { createTheme, CssBaseline,  } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

// React Router Navigation
import Routes from './routes';

// Component Imports
import ScrollToTop from "./components/ScrollToTop";

// Redux
import { useDispatch } from 'react-redux';
import { getArtworks } from './redux/actions/artworksActions.js';
import { getSeries } from './redux/actions/seriesActions.js';
import { getExhibitions } from './redux/actions/exhibitionsActions.js';

const App = () => {
  const theme = createTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeries());
    dispatch(getArtworks());
    dispatch(getExhibitions());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
