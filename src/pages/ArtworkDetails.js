import { useState, useEffect } from 'react';

// Material UI
import { Box, Grid, Typography } from '@mui/material';

// Component Imports
import Page from '../components/Page'
import Loader from '../components/Loader';
import Image from '../components/Image';

// Localization
import { useTranslation } from "react-i18next";

// React Router Navigation
import { useNavigate, useParams } from 'react-router';

// Redux
import { useDispatch } from 'react-redux';
import { resetRandomArtwork } from '../redux/actions/artworksActions';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

// Utils
import { fCurrency } from '../utils/formatNumber';

// Data Imports
import { artworkExists, getArtworkBySlug } from '../data/artworks';
import { getSeriesById } from '../data/series';

export default function ArtworkDetails({ t }){
    const { artworkSlug } = useParams();
    const { i18n } = useTranslation();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const currentArtwork = getArtworkBySlug(artworkSlug);
    const [currentSeries, setCurrentSeries] = useState(null)

    useEffect(() => {
        if (!artworkExists(artworkSlug)){ return navigate('/collection/towns'); }
        setCurrentSeries(getSeriesById(currentArtwork.seriesId))

        dispatch(setBackground(`/images/artwork-covers/${currentArtwork.slug}.webp`))
        dispatch(resetRandomArtwork())
        dispatch(setNavLink(i18n.language === "ru" ? currentSeries?.titleRu : currentSeries?.titleEn, `/collection/${currentSeries?.slug}`))
    }, [dispatch, i18n.language, artworkSlug, navigate, currentArtwork, currentSeries]);

    return (
        !currentArtwork  ? <Loader /> : 
        <Page 
        title={`${t("pages.artworkDetails.metaTitle")} ${i18n.language === "ru" ? currentArtwork?.titleRu : currentArtwork?.titleEn}`}
        description={t("pages.artworkDetails.metaDescription")}
        canonicalLink={`/artwork/${currentArtwork.slug}`}
        >
            {/* Artwork Title unit */}
            <Box maxWidth='80%' mt={{xs: 12, md: 40}} sx={{display: 'flex', alignItems: 'flex-end', pb: {xs: 5, md: 25}}}>
                <Typography component='h1' fontSize={{xs: 40, md: 50}} width="fit-content" variant='h2' color='text.primary'>
                {i18n.language === "ru" ? currentArtwork.titleRu : currentArtwork.titleEn }
                    <Typography variant='subtitle' color='text.secondary' sx={{fontSize: 25}} ml={2}>{currentArtwork.year}</Typography>
                </Typography>
            </Box>
            {/* End Artwork Title unit */}

            {/* Artwork Description unit */}
            <Grid container spacing={{ xs: 5}}>
                <Grid container item xs={12} md={6}>
                    <Grid item xs={4} md={6}>
                        <Typography color='text.secondary' sx={{fontSize: 14}}>{t("artwork.size")}</Typography>
                        <Typography sx={{fontSize: 14}}>{`${currentArtwork.height} x ${currentArtwork.width} ${i18n.language === "ru" ? 'см' : 'cm'}`}</Typography>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Typography color='text.secondary' sx={{fontSize: 14}}>{t("artwork.material")}</Typography>
                        <Typography sx={{fontSize: 14}}>{i18n.language === "ru" ? currentArtwork.materialRu : currentArtwork.materialEn }</Typography>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Typography color='text.secondary' sx={{fontSize: 14, mt: {xs: 0, md: 5}}}>{t("artwork.price")}</Typography>
                        <Typography sx={{fontSize: 14}}>{currentArtwork.isSold ? t("artwork.sold") : fCurrency(currentArtwork.price)}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{lineHeight: 2}} component='p'>
                    {i18n.language === "ru" ? currentArtwork.descriptionRu : currentArtwork.descriptionEn}
                    </Typography>
                </Grid>
            </Grid>
            {/* End Artwork Description unit */}

            <Image 
                sx={{ mt: {xs: 5, md: 15} }}
                src={`/images/artwork-covers/${currentArtwork.slug}.webp`}
                title = {i18n.language === "ru" ? `${currentArtwork.titleRu}, ${currentArtwork.year}` : `${currentArtwork.titleEn}, ${currentArtwork.year}` }
                alt = {i18n.language === "ru" ? `${currentArtwork.titleRu}, ${currentArtwork.year}` : `${currentArtwork.titleEn}, ${currentArtwork.year}` }
            />
        </Page>
    )
}