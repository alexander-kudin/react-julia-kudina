import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useTranslation } from "react-i18next";

import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Artwork = ({randomWork, artworks, artSeries, t, randmWorkReset}) => {
    const { artworkSlug } = useParams();
    const { i18n } = useTranslation();
    let navigate = useNavigate();
    const artWorkSelected = artworks.find(work => work.src === artworkSlug);
    const artSeriesSelected = artSeries.find(series => series.id === artWorkSelected.seriesId) 

    React.useEffect(() => {
        randmWorkReset();
    }, [artworkSlug]);


    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography onClick={() => navigate(`/collection/${artSeriesSelected.seriesPath}`)}  sx={{mt: {xs: 12, md: 42}, cursor:'pointer', textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>{artSeriesSelected.title}</Typography>
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
                            <Grid item xs={6} md={12}>
                                <Typography color='text.secondary' sx={{fontSize: 14}}>{t("artwork.size")}</Typography>
                                <Typography sx={{fontSize: 14}}>{artWorkSelected.size}</Typography>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <Typography color='text.secondary' sx={{fontSize: 14, mt: {xs: 0, md: 5}}}>{t("artwork.material")}</Typography>
                                <Typography sx={{fontSize: 14}}>{i18n.language === "ru" ? artWorkSelected.materialRu : artWorkSelected.materialEn }</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{lineHeight: 2}} component='p'>
                                {artWorkSelected.description}
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
                <Box sx={{ display: {xs: 'none', md: 'flex', flexDirection: 'column'}, p: 10}}>
                    <Typography align='center'>{t("randomWork.title")}</Typography>
                    
                    <Box onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}}>
                        <Box
                            component='img'
                            sx={{ width: '100%', objectFit: 'cover', my: 7 }}
                            alt={i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }
                            src={`/images/works/webp/${randomWork.src}.webp`}
                        />
                    </Box>
                    <Typography variant='h6' align='center'>{i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }</Typography>
                    <Typography onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}}  color='text.secondary' align='center'>{t("randomWork.details")}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Artwork;