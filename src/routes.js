import React from "react";

// React Router Navigation
import { useRoutes, Navigate } from 'react-router-dom';

// Localization
import { useTranslation } from "react-i18next";

// Layout Imports
import MainLayout from "./layouts/Main";

// Main Page Imports
import Biography from "./pages/Biography";
import Exhibitions from "./pages/Exhibitions";
import Contacts from "./pages/Contacts";
import ArtworkList from "./pages/ArtworkList";
import ArtworkDetails from "./pages/ArtworkDetails";
import Privacy from "./pages/Privacy";

export default function Router() {
  const { t } = useTranslation();

  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Biography t={t} /> },
        { path: 'exhibitions', element: <Exhibitions t={t} /> },
        { path: 'contacts', element: <Contacts t={t} /> },

        {
          path: 'collection',
          children: [
            { path: '', element: <ArtworkList t={t} /> },
            { path: ':seriesSlug', element: <ArtworkList t={t} /> },
          ],
        },

        {
          path: 'artwork',
          children: [
            { path: '', element: <Navigate to="/collection" replace /> },
            { path: ':artworkSlug', element: <ArtworkDetails t={t} /> },
          ],
        },

        { path: '/privacy', element: <Privacy t={t} /> },
      ]
   },

  //  { path: '/404', element: <NotFound /> },
   { path: '*', element: <Navigate to="/" replace /> },
 ]);
}