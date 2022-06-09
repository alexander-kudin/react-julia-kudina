import { useState, useEffect } from 'react';

// Material UI
import { ImageList, ImageListItem, Link, Typography, Box, InputLabel, FormControl, Select, MenuItem } from '@mui/material';

// Component Imports
import Page from '../components/Page'
import Loader from '../components/Loader';

// Localization
import { useTranslation } from "react-i18next";

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";
import { useNavigate, useParams } from 'react-router';

// Data Imports
import { getArtworks } from '../data/artworks';
import { getSeries, getSeriesBySlug, seriesExists } from '../data/series';

export default function ArtworkList({ t }){
    const { seriesSlug } = useParams();
    const { i18n } = useTranslation();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

    const artworkList = getArtworks()
    const seriesList = getSeries()
    const [currentSeries, setCurrentSeries] = useState(null);

    useEffect(() => {
        if (!seriesSlug){ return navigate('/collection/towns'); }
        if (!seriesExists(seriesSlug)){ return navigate('/collection/towns'); }

        setCurrentSeries(getSeriesBySlug(seriesSlug))

        dispatch(setBackground(`/images/julia-kudina.webp`));
        dispatch(setNavLink(i18n.language === "ru" ? 'Коллекция' : 'Artworks', '/collection'));

    }, [dispatch, i18n.language, navigate, seriesSlug])

    const artworksFiltered = currentSeries?.slug !== 'all' ? 
    artworkList.filter((artwork) => artwork?.seriesId === currentSeries?.id)
    : artworkList;

    return (
        (!artworkList || !seriesList) || !currentSeries
          ? <Loader /> : 
        <Page title={`${t("home.artistName")} | ${i18n.language === "ru" ? currentSeries?.titleRu : currentSeries?.titleEn}`}>
            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                {i18n.language === "ru" ? currentSeries?.titleRu : currentSeries?.titleEn}
            </Typography>

            <FormControl sx={{ minWidth: 200, mt: {xs: 12, md: 25}, mb: 7 }}>
                <InputLabel id="collection-filter">{i18n.language === "ru" ? 'Серия' : 'Series'}</InputLabel>
                <Select
                    labelId="collection-filter"
                    id="collection-filter-select"
                    value={currentSeries?.slug}
                    label={i18n.language === "ru" ? 'Серия' : 'Series'}
                    onChange={(e) => navigate(`/collection/${e.target.value}`)}
                    defaultValue={'towns'}
                >
                    {seriesList.map((series) => (
                        <MenuItem value={series.slug}>{i18n.language === "ru" ? series.titleRu : series.titleEn}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <ImageList sx={{ overflow: 'hidden', height: '100%', position: 'relative', pb: 10 }} variant='woven' gap={120}>
                {artworksFiltered?.map(artwork => (
                    <LinkRouter to={`/artwork/${artwork.slug}`} key={artwork.id} underline='none'>
                        <ImageListItem>
                            <img
                                src={`/images/artwork-covers/${artwork.slug}.webp`}
                                alt={artwork.titleEn}
                                loading='lazy'
                            />
                            <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                                <Typography variant='subtitle1' color='text.secondary' sx={{ fontSize: 11, width: 'fit-content', display: 'block' }}>{`${artwork.height} x ${artwork.width} ${i18n.language === "ru" ? 'см' : 'cm'}`}</Typography>
                                <Typography component='h3' color='text.primary' sx={{ fontSize: {xs: 32, md: 24}, lineHeight: 1, fontWeight: 300 }} ml={2}>{i18n.language === "ru" ? artwork.titleRu : artwork.titleEn }</Typography>
                            </Box>
                        </ImageListItem>
                    </LinkRouter>
                ))}
            </ImageList>
        </Page>
    )
}