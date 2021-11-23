import * as React from 'react';
import { Container, Grid, ImageList, ImageListItem, Typography, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ArtCollection = ({ artWorks, randomWork }) => {
    const [artCollection, setArtCollection] = React.useState(artWorks.filter(work => work.collection === 'Города'));
    const [collectionName, setCollectionName] = React.useState('Города');

    const navigate = useNavigate();

    const handleChange = (event) => {
        setCollectionName(event.target.value);
        if (event.target.value === 'Все работы'){
            setArtCollection(artWorks);
            return;
        }
        setArtCollection(
            artWorks.filter(work => work.collection === event.target.value)
        );
    }

    return (
        
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Работы</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} fontSize={{xs: 30, md: 50}} component='h1' variant='h2' color='text.primary'>{collectionName !== 'Все работы' ? `Коллекция ${collectionName} ` : 'Все работы'}</Typography>
                    <FormControl sx={{ minWidth: 200, mt: {xs: 12, md: 25}, mb: 7 }}>
                        <InputLabel id="collection-filter">Коллекция</InputLabel>
                        <Select
                            labelId="collection-filter"
                            id="collection-filter-select"
                            value={collectionName}
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
                    <ImageList sx={{ overflow: 'hidden', height: '100%', position: 'relative', pb: 10 }} cols={window.innerWidth > 850 ? 2 : 1} variant='woven' gap={120}>
                    {artCollection.map((artWork) => (
                        <ImageListItem onClick={() => navigate(`/work/${artWork.src}`)} sx={{cursor:'pointer'}} key={artWork.src}>
                            <img
                                src={`/images/works/webp/${artWork.src}.webp?w=161&fit=crop&auto=format`}
                                srcSet={`/images/works/webp/${artWork.src}.webp?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={artWork.title}
                                loading='lazy'
                            />
                            <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                                <Typography variant='subtitle1' color='text.secondary' sx={{ fontSize: 11 }}>{artWork.year}</Typography>
                                <Typography component='h3' color='text.primary' sx={{ fontSize: {xs: 40, md: 27}, lineHeight: 1, fontWeight: 300 }} ml={2}>{artWork.title}</Typography>
                            </Box>
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
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

export default ArtCollection;