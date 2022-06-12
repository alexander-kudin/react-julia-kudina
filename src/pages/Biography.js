import * as React from 'react';

// Material UI
import { Link, Typography, Box, Grid } from '@mui/material';

// Project Imports
import Page from '../components/Page'

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Localization
import { Trans } from 'react-i18next';

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

export default function Biography({ t }){
    const LinkRouter = (props) => <Link component={RouterLink} {...props}/>;

    const LinkText = ({ href, children }) => {
        return <LinkRouter variant='span' to={ href || ''} key={ href || ''} target='_blank' underline='none' sx={{color: 'blue'}}>{children}</LinkRouter>;
    }

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setBackground(`/images/julia-kudina.webp`))
        dispatch(setNavLink(t('home.sectionNames.biography'), `/`))
    }, [dispatch, t]);

    return (
        <Page 
        title={t("pages.bio.metaTitle")}
        description={t("pages.bio.metaDescription")}
        canonicalLink="/"
        >
            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                {t("home.artistName")}
            </Typography>

            <Grid container mt={{xs: 5, md: 25}}>
                <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                    <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 120, display: 'flex', flexDirection: 'column' }}>
                        <LinkRouter underline='none' to={`/`} key={`/`} sx={{ width: 'fit-content', fontSize: 18}} color='text.primary'>{t("home.sectionNames.biography")}</LinkRouter>
                        <LinkRouter underline='none' to={`/exhibitions`} key={`/exhibitions`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.exhibitions")}</LinkRouter>
                        <LinkRouter underline='none' to={`/contacts`} key={`/contacts`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.contacts")}</LinkRouter>
                        <LinkRouter underline='none' to={`/collection/towns`} key={`/collection/towns`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.works")}</LinkRouter>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}> 
                    <Typography sx={{lineHeight: 2}} component="p">
                        <Trans i18nKey="home.description.part1" t={t} components={[<LinkText href='/artwork/scarlet-roses' />, <LinkText href='/artwork/irises-flowers-of-love' />]} />
                    </Typography>
                    <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
                        <Trans i18nKey="home.description.part2" t={t} components={[<LinkText href='/artwork/field-bouquet '/>, <LinkText href="/artwork/lilac" />]} />
                    </Typography>
                    <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
                        <Trans i18nKey="home.description.part3" t={t} components={[<LinkText href="/artwork/old-town-ekaterinodar" />]} />
                    </Typography>
                    <Typography sx={{lineHeight: 2, marginTop: 2, fontStyle: 'italic'}}>
                        <Trans i18nKey="home.description.author" t={t} components={[<a href="https://zen.yandex.ru/id/5daa0a845eb26800aee13768" rel="noreferrer" target='_blank'> </a>]} />
                    </Typography>
                </Grid>
            </Grid>
        </Page>
    );
}