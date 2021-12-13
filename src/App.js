import * as React from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

import { Route, Routes } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import Header from './shared/Header.js';
import Artwork from './Artwork/Artwork.js';
import Artworks from './Collection/Artworks.js';
import Collection from './Collection/Collection.js';
import Home from './Home/Home.js';

import artworks from './shared/art-works.json';
import artSeries from './shared/art-series.json';

const App = () => {
  const { i18n, t } = useTranslation();
  const theme = createTheme();
  const [randomWork, setRandomWork] = React.useState(artworks[Math.floor(Math.random() * artworks.length)]);

  const randmWorkReset = () => {
    setRandomWork(artworks[Math.floor(Math.random() * artworks.length)])
  }

  const changeLanguage = () => {
    i18n.language === "ru" ?  i18n.changeLanguage("en") : i18n.changeLanguage("ru")
  };

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeLanguage = {changeLanguage} t ={t}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home randomWork = {randomWork} t ={t}/>} />
          <Route exact path="/:contentName" element={<Home randomWork = {randomWork} t ={t}/>} />
          <Route exact path="/collection" element={<Collection randomWork = {randomWork} artSeries = {artSeries} t ={t} />}>
            <Route path="" element={<Artworks artworks ={artworks} artSeries = {artSeries} t ={t}/>} />
            <Route path=":seriesSlug" element={<Artworks artworks ={artworks} artSeries = {artSeries} t ={t}/>} />
          </Route>
          <Route path="/work/:artworkSlug" element={<Artwork randmWorkReset = {randmWorkReset} artworks = {artworks} artSeries = {artSeries} randomWork = {randomWork} t ={t}/>} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
