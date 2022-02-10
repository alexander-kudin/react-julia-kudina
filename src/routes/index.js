import React from "react";

// React Router Navigation
import { Route, Routes } from 'react-router-dom';

// Localization
import { useTranslation } from "react-i18next";

// Component Imports
import Home from '../Home/Home';
import Collection from '../Collection/Collection';
import Artworks from '../Collection/Artworks';
import Artwork from '../Artwork/Artwork';
// import Privacy from "../Privacy/Privacy";
// import NotFound from '../shared/NotFound';

function AppRoutes() {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route exact path="/" element={<Home t ={t}/>} />
      <Route exact path="/:contentName" element={<Home t ={t}/>} />
      <Route exact path="/collection" element={<Collection t ={t} />}>
        <Route path="" element={<Artworks t ={t}/>} />
        <Route path=":seriesSlug" element={<Artworks t ={t}/>} />
      </Route>
      <Route path="/work/:artworkSlug" element={<Artwork t ={t}/>} />

      {/* <Route path="/privacy" element={<Privacy />} /> */}

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;