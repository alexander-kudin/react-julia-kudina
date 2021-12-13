import * as React from 'react';
import { Container, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

import { useTranslation } from "react-i18next";

import { Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const Collection = ({ randomWork, artSeries, t }) => {
    const { seriesSlug } = useParams();
    const { i18n } = useTranslation();
    
    const [artSeriesSelected, setArtSeriesSelected] = React.useState(seriesSlug == null ? artSeries.find(series => series.seriesPath === 'all') : artSeries.find(series => series.seriesPath === seriesSlug));
    let navigate = useNavigate();

    React.useEffect(() => {
    }, [seriesSlug]);

    const handleChange = (event) => {
        let artSeriesSelection = artSeries.find(series => series.id === event.target.value);
        setArtSeriesSelected(artSeriesSelection);
        navigate(`/collection/${artSeriesSelection.seriesPath}`);
    }

    return (
        
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>{i18n.language === "ru" ? artSeriesSelected.titleRu : artSeriesSelected.titleEn}</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} fontSize={{xs: 30, md: 50}} component='h1' variant='h2' color='text.primary'>{i18n.language === "ru" ? artSeriesSelected.titleRu : artSeriesSelected.titleEn}</Typography>
                    <FormControl sx={{ minWidth: 200, mt: {xs: 12, md: 25}, mb: 7 }}>
                        <InputLabel id="collection-filter">{i18n.language === "ru" ? 'Серия' : 'Series'}</InputLabel>
                        <Select
                            labelId="collection-filter"
                            id="collection-filter-select"
                            value={artSeriesSelected.id}
                            label={i18n.language === "ru" ? 'Серия' : 'Series'}
                            onChange={handleChange}
                            defaultValue={'Города'}
                        >
                            <MenuItem value={0}>{t("collection.series.allWorks")}</MenuItem>
                            <MenuItem value={1}>{t("collection.series.towns")}</MenuItem>
                            <MenuItem value={2}>{t("collection.series.graphics")}</MenuItem>
                            <MenuItem value={3}>{t("collection.series.womenAesthetic")}</MenuItem>
                            <MenuItem value={4}>{t("collection.series.flowers")}</MenuItem>
                            <MenuItem value={5}>{t("collection.series.ichthys")}</MenuItem>
                            <MenuItem value={6}>{t("collection.series.fruits")}</MenuItem>
                            <MenuItem value={7}>{t("collection.series.abstractionism")}</MenuItem>
                            <MenuItem value={8}>{t("collection.series.oceanSecrets")}</MenuItem>
                            <MenuItem value={9}>{t("collection.series.stillLife")}</MenuItem>
                            <MenuItem value={10}>{t("collection.series.landscapes")}</MenuItem>
                            <MenuItem value={11}>{t("collection.series.philosophicalFantasy")}</MenuItem>
                        </Select>
                    </FormControl>
                    <Outlet />
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} sx={{ top:'0', bottom: '0', position: {md: 'sticky'}}} height="100%" backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/julia-kudina.webp)`,
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
                    <Typography onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}} color='text.secondary' align='center'>{t("randomWork.details")}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Collection;