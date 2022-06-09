import { useState, useEffect } from 'react';

// Material UI
import { ArrowForward } from '@mui/icons-material';
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Typography, Box, Grid, Link } from '@mui/material';

// Component Imports
import Page from '../components/Page'
import Loader from '../components/Loader';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Localization
import { useTranslation } from "react-i18next";

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

// Data Imports
import { getExhibitions } from '../data/exhibitions';

export default function Exhibitions({ t }){
    const { i18n } = useTranslation()

    const exhibitionList = getExhibitions();
    const [exhibitionsYear, setExhibitionsYear] = useState(2020)

    const handleChange = (event) => { setExhibitionsYear(event.target.value) }

    const LinkRouter = (props) => <Link component={RouterLink} {...props}/>;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBackground(`/images/julia-kudina.webp`))
        dispatch(setNavLink(t('home.sectionNames.exhibitions'), `/`))
    }, [dispatch, t]);

    return (
        <Page title={`${t("home.artistName")} | ${t("home.sectionNames.exhibitions")}`}>
            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                {i18n.language === "ru" ? 'Выставки': 'Exhibitions'}
            </Typography>
            <Grid container mt={{xs: 5, md: 25}}>
                <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                    <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 120, display: 'flex', flexDirection: 'column' }}>
                        <LinkRouter underline='none' to={`/`} key={`/`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary'>{t("home.sectionNames.biography")}</LinkRouter>
                        <LinkRouter underline='none' to={`/exhibitions`} key={`/exhibitions`} sx={{ width: 'fit-content', fontSize: 18}} color='text.primary' mt={1}>{t("home.sectionNames.exhibitions")}</LinkRouter>
                        <LinkRouter underline='none' to={`/contacts`} key={`/contacts`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.contacts")}</LinkRouter>
                        <LinkRouter underline='none' to={`/collection/towns`} key={`/collection/towns`} sx={{ width: 'fit-content', fontSize: 18}} color='text.secondary' mt={1}>{t("home.sectionNames.works")}</LinkRouter>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}> 
                    <FormControl sx={{ minWidth: 200}}>
                        <InputLabel id="exhibition-filter">{i18n.language === "ru" ? 'Год' : 'Years' }</InputLabel>
                        <Select
                            labelId="exhibition-filter"
                            id="exhibition-filter-select"
                            value={exhibitionsYear}
                            label="Год"
                            onChange={handleChange}
                            defaultValue={2020}
                        >
                            <MenuItem value={2010}>2010 - 2014</MenuItem>
                            <MenuItem value={2015}>2015 - 2019</MenuItem>
                            <MenuItem value={2020}>2020 - {i18n.language === "ru" ? 'Сейчас': 'Present' }</MenuItem>
                        </Select>
                    </FormControl>
                    {!exhibitionList.length ? <Loader /> : exhibitionList.filter(exhibition => exhibition.year - exhibitionsYear >= 0 && exhibition.year - exhibitionsYear < 5).map((exhibition) => (
                    <Box key={exhibition.id}>
                        <Box display="flex" py={3}>
                            <Typography color='text.secondary'>{exhibition.year}</Typography>
                            <Box ml={10}>
                                <Typography color='text.primary'>{i18n.language === "ru" ? exhibition.titleRu : exhibition.titleEn }</Typography>
                                <Typography color='text.secondary'>{i18n.language === "ru" ? exhibition.locationRu : exhibition.locationEn }</Typography>
                            </Box>
                                {exhibition.src && 
                                <IconButton style={{ backgroundColor: 'transparent' }} rel="noopener noreferrer" href={exhibition.src} target="_blank" size='large' sx={{
                                    color: 'black', 
                                    marginLeft: 'auto'
                                }}>
                                    <ArrowForward />
                                </IconButton>
                                }
                            </Box>
                            <Divider />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Page>
    );
}