import * as React from 'react';

// Material UI
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Localization
import { useTranslation } from "react-i18next";

// React Router Navigation
import { useParams } from 'react-router';
import { Link as RouterLink } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { resetRandomArtwork } from '../redux/actions/artworksActions.js';

// Component Imports
import RandomArtwork from '../shared/RandomArtwork';
import Loader from '../shared/Loader';

const Artwork = ({t}) => {
    const { artworkSlug } = useParams();
    const { i18n } = useTranslation();

    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

    const artworks = useSelector(state => state.artworksReducer.artworks);
    const artSeries = useSelector(state => state.seriesReducer);

    const artWorkSelected = artworks.find(work => work.src === artworkSlug);
    const artSeriesSelected = artSeries.find(series => series.seriesId === artWorkSelected?.seriesId) 

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(resetRandomArtwork())
    }, [artworkSlug, dispatch]);


    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            {!artWorkSelected && !artSeriesSelected ? <Loader /> : 
            (
                <>
                    <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                        <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                        <LinkRouter to={`/collection/${artSeriesSelected.seriesPath}`} underline='none' key={`/collection/${artSeriesSelected.seriesPath}`}  sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr', color: 'black'}}>{i18n.language === "ru" ? artSeriesSelected.titleRu : artSeriesSelected.titleEn}</LinkRouter>
                        </Container>
                    </Grid>

                    <Grid item md={7} xs={12} order={{ xs: 3 }}>
                        <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                            {/* Artwork Title unit */}
                            <Box maxWidth='80%' mt={{xs: 12, md: 40}} sx={{display: 'flex', alignItems: 'flex-end', pb: {xs: 5, md: 25}}}>
                                <Typography component='h1' fontSize={{xs: 40, md: 50}} width="fit-content" variant='h2' color='text.primary'>
                                {i18n.language === "ru" ? artWorkSelected.titleRu : artWorkSelected.titleEn }
                                    <Typography variant='subtitle' color='text.secondary' sx={{fontSize: 25}} ml={2}>{artWorkSelected.year}</Typography>
                                </Typography>
                            </Box>
                            {/* End Artwork Title unit */}

                            {/* Artwork Description unit */}
                            <Grid container spacing={{ xs: 5}}>
                                <Grid container item xs={12} md={6}>
                                    <Grid item xs={4} md={6}>
                                        <Typography color='text.secondary' sx={{fontSize: 14}}>{t("artwork.size")}</Typography>
                                        <Typography sx={{fontSize: 14}}>{artWorkSelected.size}</Typography>
                                    </Grid>
                                    <Grid item xs={4} md={6}>
                                        <Typography color='text.secondary' sx={{fontSize: 14}}>{t("artwork.material")}</Typography>
                                        <Typography sx={{fontSize: 14}}>{i18n.language === "ru" ? artWorkSelected.materialRu : artWorkSelected.materialEn }</Typography>
                                    </Grid>
                                    <Grid item xs={4} md={6}>
                                        <Typography color='text.secondary' sx={{fontSize: 14, mt: {xs: 0, md: 5}}}>{t("artwork.price")}</Typography>
                                        <Typography sx={{fontSize: 14}}>{artWorkSelected.price}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{lineHeight: 2}} component='p'>
                                    {i18n.language === "ru" ? artWorkSelected.descriptionRu : artWorkSelected.descriptionEn}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* End Artwork Description unit */}
                            
                            <Box
                                component='img'
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    mt: {xs: 5, md: 15}
                                }}
                                alt={artWorkSelected.title}
                                src={`/images/works/webp/${artWorkSelected.src}.webp?w=161&fit=crop&auto=format`}
                            />
                        </Box>
                    </Grid>

                    {/* Background unit */}
                    <Grid item md={3} xs={12} sx={{ top:'0', bottom: '0', position: {md: 'sticky'}}} height="100%" backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                        <Box
                            sx={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/works/webp/${artWorkSelected.src}.webp?w=161&fit=crop&auto=format)`,
                                backgroundRepeat: 'no-repeat',
                                height: {xs: '30vh', md: '100vh'},
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                        ></Box>
                        <RandomArtwork />
                    </Grid>
                </>
            )}
        </Grid>
    )
}

export default Artwork;