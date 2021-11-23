import * as React from 'react';
import { createTheme, CssBaseline } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Artwork from './pages/Artwork.js';
import ArtCollection from './pages/ArtCollection.js';
import Home from './pages/Home.js';
import { ThemeProvider } from '@mui/private-theming';

import artWorks from './art-works.json';

const App = () => {
  const theme = createTheme();
  const [randomWork, setRandomWork] = React.useState(artWorks[Math.floor(Math.random() * artWorks.length)]);
  const [backgroundSrc, setBackgroundSrc] = React.useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Routes>
          <Route exact path="/" 
            element={
              <Home 
                randomWork = {randomWork}
              />} 
          />
          <Route exact path="/collection" 
            element={ 
              <ArtCollection 
                artWorks ={artWorks}
                backgroundSrc = {backgroundSrc}
                randomWork = {randomWork}
              />}
          />
          <Route path="/work/:srcName" 
            element={
              <Artwork 
                artWorks = {artWorks} 
                setBackgroundSrc = {setBackgroundSrc}
                randomWork = {randomWork}
                backgroundSrc = {backgroundSrc}
              />} 
            />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
