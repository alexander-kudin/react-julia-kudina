import * as React from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

import { Route, Routes } from 'react-router-dom';

import Header from './shared/Header.js';
import Artwork from './Artwork/Artwork.js';
import Artworks from './Collection/Artworks.js';
import Collection from './Collection/Collection.js';
import Home from './Home/Home.js';

import artworks from './shared/art-works.json';
import artSeries from './shared/art-series.json';

const App = () => {
  const theme = createTheme();
  const randomWork = artworks[Math.floor(Math.random() * artworks.length)];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home randomWork = {randomWork}/>} />
          <Route exact path="/:contentName" element={<Home randomWork = {randomWork}/>} />
          <Route exact path="/collection" element={<Collection randomWork = {randomWork} artSeries = {artSeries} />}>
            <Route path="" element={<Artworks artworks ={artworks} artSeries = {artSeries}/>} />
            <Route path=":seriesSlug" element={<Artworks artworks ={artworks} artSeries = {artSeries}/>} />
          </Route>
          <Route path="/work/:artworkSlug" element={<Artwork artworks = {artworks} artSeries = {artSeries} randomWork = {randomWork}/>} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
