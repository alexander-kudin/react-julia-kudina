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

import RUartworks from './shared/ru/RUart-works.json';
import RUartSeries from './shared/ru/RUart-series.json';

import ENartworks from './shared/en/ENart-works.json';
import ENartSeries from './shared/en/ENart-series.json';

const App = () => {
  const { i18n, t } = useTranslation();
  const [artworks, setArtworks] = React.useState(i18n.language === "ru" ?  RUartworks : ENartworks)
  const [artSeries, setArtSeries] = React.useState(i18n.language === "ru" ?  RUartSeries : ENartSeries)
  const theme = createTheme();
  const randomWork = artworks[Math.floor(Math.random() * artworks.length)];

  const changeLanguage = () => {
    if (i18n.language === "ru"){
      i18n.changeLanguage("en");
      setArtworks(ENartworks);
      setArtSeries(ENartSeries);
      return;
    }
    i18n.changeLanguage("ru");
    setArtworks(RUartworks);
    setArtSeries(RUartSeries);
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
          <Route path="/work/:artworkSlug" element={<Artwork artworks = {artworks} artSeries = {artSeries} randomWork = {randomWork} t ={t}/>} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
