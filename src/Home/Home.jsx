import React from 'react';

// Material UI
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

// React Router Navigation
import { useParams } from 'react-router';
import { Link as RouterLink } from "react-router-dom";

// Component Imports
import Biography from './Biography';
import Exhibitions from './Exhibitions';
import Contacts from './Contacts/Contacts';
import RandomArtwork from '../shared/RandomArtwork';

const Home = ({ t }) => {
    const { contentName } = useParams();
    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:"column" }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>{t("home.sideTitle")}</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                        {(contentName === 'bio' || !contentName) && t("home.artistName")}
                        {contentName === 'exhibitions' && t("home.sectionNames.exhibitions")}
                        {contentName === 'media' && t("home.sectionNames.media")}
                        {contentName === 'contacts' && t("home.sectionNames.contacts")}
                    </Typography>
                    <Grid container mt={{xs: 5, md: 25}}>
                        <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                            <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 120, display: 'flex', flexDirection: 'column' }}>
                                <LinkRouter underline='none' to={`/`} key={`/`} sx={{ width: 'fit-content', fontSize: 18}} color={contentName === 'bio' || !contentName ? 'text.primary' : 'text.secondary'}>{t("home.sectionNames.biography")}</LinkRouter>
                                <LinkRouter underline='none' to={`/exhibitions`} key={`/exhibitions`} sx={{ width: 'fit-content', fontSize: 18}} color={contentName === 'exhibitions' ? 'text.primary' : 'text.secondary'} mt={1}>{t("home.sectionNames.exhibitions")}</LinkRouter>
                                <LinkRouter underline='none' to={`/contacts`} key={`/contacts`} sx={{ width: 'fit-content', fontSize: 18}} color={contentName === 'contacts' ? 'text.primary' : 'text.secondary'} mt={1}>{t("home.sectionNames.contacts")}</LinkRouter>
                                <LinkRouter underline='none' to={`/collection/towns`} key={`/collection/towns`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.works")}</LinkRouter>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}> 
                            {(contentName === 'bio' || !contentName) && <Biography t = {t} />}
                            {contentName === 'exhibitions' && <Exhibitions />}
                            {contentName === 'contacts' && <Contacts t = {t} />}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} sx={{ top:'0', bottom: '0', position: {md: 'sticky'}}} height="100%" backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box sx={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/julia-kudina.webp)',
                    backgroundRepeat: 'no-repeat',
                    height: {xs: '30vh', md: '100vh'},
                    backgroundSize: 'cover',
                    backgroundPosition: {xs: '50% 35%', md: 'center center'}
                }}></Box>
                <RandomArtwork />
            </Grid>
        </Grid>
    )
}

export default Home;