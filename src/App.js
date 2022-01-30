import React from 'react';

import { createTheme, CssBaseline,  } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

import { Route, Routes } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import Header from './shared/Header.js';
import Artwork from './Artwork/Artwork.js';
import Artworks from './Collection/Artworks.js';
import Collection from './Collection/Collection.js';
import Home from './Home/Home.js';

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
      <Header changeLanguage = {changeLanguage} t ={t}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home t ={t}/>} />
          <Route exact path="/:contentName" element={<Home t ={t}/>} />
          <Route exact path="/collection" element={<Collection t ={t} />}>
            <Route path="" element={<Artworks t ={t}/>} />
            <Route path=":seriesSlug" element={<Artworks t ={t}/>} />
          </Route>
          <Route path="/work/:artworkSlug" element={<Artwork t ={t}/>} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
