import React from "react";

// React Router Navigation
import { useRoutes, Navigate } from 'react-router-dom';

// Localization
import { useTranslation } from "react-i18next";

// Component Import
import Loader from "./components/Loader";

// Layout Imports
import MainLayout from "./layouts/Main";

// Main Page Imports
const Biography = React.lazy(() => import("./pages/Biography"));
const Exhibitions = React.lazy(() => import("./pages/Exhibitions"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const ArtworkList = React.lazy(() => import("./pages/ArtworkList"));
const ArtworkDetails = React.lazy(() => import("./pages/ArtworkDetails"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function Router() {
  const { t } = useTranslation();

  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element:  <React.Suspense fallback={ <Loader /> }><Biography t={t} /></React.Suspense> },
        { path: 'exhibitions', element:  <React.Suspense fallback={ <Loader /> }><Exhibitions t={t} /></React.Suspense> },
        { path: 'contacts', element:  <React.Suspense fallback={ <Loader /> }><Contacts t={t} /></React.Suspense> },

        {
          path: 'collection',
          children: [
            { path: '', element:  <React.Suspense fallback={ <Loader /> }><ArtworkList t={t} /></React.Suspense> },
            { path: ':seriesSlug', element:  <React.Suspense fallback={ <Loader /> }><ArtworkList t={t} /></React.Suspense> },
          ],
        },

        {
          path: 'artwork',
          children: [
            { path: '', element:  <React.Suspense fallback={ <Loader /> }><Navigate to="/collection" replace /></React.Suspense> },
            { path: ':artworkSlug', element:  <React.Suspense fallback={ <Loader /> }><ArtworkDetails t={t} /></React.Suspense> },
          ],
        },

        { path: '/privacy', element:  <React.Suspense fallback={ <Loader /> }><Privacy t={t} /></React.Suspense> },
        { path: '/404', element:  <React.Suspense fallback={ <Loader /> }><NotFound t={t} /></React.Suspense> },
      ]
   },
   
   { path: '*', element: <Navigate to="404" replace /> },
 ]);
}