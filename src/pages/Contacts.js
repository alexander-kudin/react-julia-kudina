import * as React from 'react';

// Material UI
import { Box, Grid, Link, Typography } from '@mui/material';

// Project Imports
import Page from '../components/Page'

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Component Imports
import { ContactDialog, ContactForm } from '../sections/contacts'

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

const useHandleDialog = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const handleDialog = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return [isOpen, handleDialog];
};

export default function Contacts({ t }){
    const [open, handleDialog] = useHandleDialog(false);
    const LinkRouter = (props) => <Link component={RouterLink} {...props}/>;

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setBackground(`/images/julia-kudina.webp`))
        dispatch(setNavLink(t('home.sectionNames.contacts'), `/`))
    }, [dispatch, t]);

    return (
        <Page title={`${t("home.artistName")} | ${t("home.sectionNames.contacts")}`}>
            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                {t("home.sectionNames.contacts")}
            </Typography>

            <Grid container mt={{xs: 5, md: 25}}>
                <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                    <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 120, display: 'flex', flexDirection: 'column' }}>
                        <LinkRouter underline='none' to={`/`} key={`/`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary'>{t("home.sectionNames.biography")}</LinkRouter>
                        <LinkRouter underline='none' to={`/exhibitions`} key={`/exhibitions`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.exhibitions")}</LinkRouter>
                        <LinkRouter underline='none' to={`/contacts`} key={`/contacts`} sx={{ width: 'fit-content', fontSize: 18}} color='text.primary' mt={1}>{t("home.sectionNames.contacts")}</LinkRouter>
                        <LinkRouter underline='none' to={`/collection/towns`} key={`/collection/towns`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.works")}</LinkRouter>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}> 
                    <Typography onClick={handleDialog} sx={{cursor:'pointer', mb: 2}}>+7 (918) 455 19 20</Typography>
                    <Typography component='a' href='mailto:artkudina@gmail.com?subject=Письмо с artkudina.ru' sx={{textDecoration:'none', color:'black'}}>artkudina@gmail.com</Typography>
                    <Typography variant="h6" gutterBottom mt={5}>{t('home.contacts.formTitle')}</Typography>
                    <ContactForm t = {t}/>
                    <ContactDialog open = {open} handleDialog = {handleDialog} t = {t}/>
                </Grid>
            </Grid>
        </Page>
    );
}