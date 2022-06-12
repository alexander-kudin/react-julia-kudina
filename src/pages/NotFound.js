import { useEffect } from 'react';

// Material UI
import { Typography } from '@mui/material';

// Component Imports
import Page from '../components/Page'

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Localization
import { useTranslation } from "react-i18next";

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

export default function NotFound({ t }){
    const { i18n } = useTranslation()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBackground(`/images/julia-kudina.webp`))
        dispatch(setNavLink(null, `/`))
    }, [dispatch, t]);

    return (
        <Page 
        title={t("pages.404.metaTitle")}
        description={t("pages.404.metaDescription")}
        canonicalLink="/404"
        sx={{ textAlign: 'center' }}
        >
            <Typography sx={{fontSize: {xs: 35, md: 50}, mt: {xs: 12, md: 30} }} component='h1' variant='h2' color='text.primary'>
                {i18n.language === "ru" ? 'Страница не найдена или перемещена': 'Page not found or moved'}
            </Typography>
            <Typography sx={{fontSize: {xs: 80, md: 150}}}>404</Typography>
            <RouterLink to={'/'} sx={{ underline: 'none', color: 'text.primary'}}>
                {i18n.language === "ru" ? 'На главную': 'Home Page'}
            </RouterLink>
        </Page>
    );
}