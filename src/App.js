// Material UI
import { createTheme, CssBaseline,  } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

// React Router Navigation
import Routes from './routes';

// Component Imports
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
