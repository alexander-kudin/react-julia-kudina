import * as React from 'react';
import { Container, Grid, Typography, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

import { Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const Collection = ({ randomWork, artSeries }) => {
    const { seriesSlug } = useParams();
    const [artSeriesSelected, setArtSeriesSelected] = React.useState(seriesSlug == null ? artSeries.find(series => series.seriesPath === 'all') : artSeries.find(series => series.seriesPath === seriesSlug));
    let navigate = useNavigate();

    React.useEffect(() => {
    }, [seriesSlug]);

    const handleChange = (event) => {
        let artSeriesSelection = artSeries.find(series => series.ruTitle === event.target.value);
        setArtSeriesSelected(artSeriesSelection);
        navigate(`/collection/${artSeriesSelection.seriesPath}`);
    }

    return (
        
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>{artSeriesSelected.seriesPath !== 'all' ? `Серия ${artSeriesSelected.ruTitle} ` : 'Все работы'}</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} fontSize={{xs: 30, md: 50}} component='h1' variant='h2' color='text.primary'>{artSeriesSelected.seriesPath !== 'all' ? `Серия ${artSeriesSelected.ruTitle} ` : 'Все работы'}</Typography>
                    <FormControl sx={{ minWidth: 200, mt: {xs: 12, md: 25}, mb: 7 }}>
                        <InputLabel id="collection-filter">Серия</InputLabel>
                        <Select
                            labelId="collection-filter"
                            id="collection-filter-select"
                            value={artSeriesSelected.ruTitle}
                            label="Коллекция"
                            onChange={handleChange}
                            defaultValue={'Города'}
                        >
                            <MenuItem value={'Все работы'}>Все работы</MenuItem>
                            <MenuItem value={'Города'}>Города</MenuItem>
                            <MenuItem value={'Графика'}>Графика</MenuItem>
                            <MenuItem value={'Женская эстетика'}>Женская эстетика</MenuItem>
                            <MenuItem value={'Цветы'}>Цветы</MenuItem>
                            <MenuItem value={'Ихтис'}>Ихтис</MenuItem>
                            <MenuItem value={'Фрукты'}>Фрукты</MenuItem>
                            <MenuItem value={'Абстракция'}>Абстракция</MenuItem>
                            <MenuItem value={'Тайны океана'}>Тайны океана</MenuItem>
                            <MenuItem value={'Натюрморт'}>Натюрморт</MenuItem>
                            <MenuItem value={'Пейзажи'}>Пейзажи</MenuItem>
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
                    <Typography align='center'>Случайная работа</Typography>
                    
                    <Box component={Link} href={`/work/${randomWork.src}`}>
                        <Box
                            component='img'
                            sx={{ width: '100%', objectFit: 'cover', my: 7 }}
                            alt={randomWork.title}
                            src={`/images/works/webp/${randomWork.src}.webp`}
                        />
                    </Box>
                    <Typography variant='h6' align='center'>{randomWork.title}</Typography>
                    <Typography component={Link} href={`/work/optimized/${randomWork.src}`} underline='none' color='text.secondary' align='center'>Подробнее</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Collection;