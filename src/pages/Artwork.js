import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';

const Artwork = ({artWorks, setBackgroundSrc, randomWork, backgroundSrc}) => {
    const { srcName } = useParams();
    const artWorkSelected = artWorks.find(work => work.src === srcName);
    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Коллекция {artWorkSelected.collection}</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                {!artWorkSelected ? 
                    <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                        <Box maxWidth='sm' width={{xs: '50%', sm: 'auto'}} mt={{xs: 12, md: 40}} sx={{alignItems: 'flex-end', pb: 25}}>
                            <Typography component='h1' variant='h2' fontSize={{xs: 30, md: 50}} color='text.primary'>Картина не найдена</Typography>
                            <Typography component={Link} href='/' underline='none' variant='h6' color='text.primary'>На главную</Typography>
                        </Box> 
                    </Box>
                :
                    <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                        { setBackgroundSrc(`/works/webp/${artWorkSelected.src}`) }
                        {/* Artwork Title unit */}
                        <Box maxWidth='80%' mt={{xs: 12, md: 40}} sx={{display: 'flex', alignItems: 'flex-end', pb: {xs: 5, md: 25}}}>
                            <Typography component='h1' fontSize={{xs: 40, md: 50}} width="fit-content" variant='h2' color='text.primary'>
                                {artWorkSelected.title}
                                <Typography variant='subtitle' color='text.secondary' sx={{fontSize: 25}} ml={2}>{artWorkSelected.year}</Typography>
                            </Typography>
                        </Box>
                        {/* End Artwork Title unit */}

                        {/* Artwork Description unit */}
                        <Grid container spacing={{ xs: 5}}>
                            <Grid container item xs={12} md={6}>
                                <Grid item xs={6} md={12}>
                                    <Typography color='text.secondary' sx={{fontSize: 14}}>Размер</Typography>
                                    <Typography sx={{fontSize: 14}}>{artWorkSelected.size}</Typography>
                                </Grid>
                                <Grid item xs={6} md={12}>
                                    <Typography color='text.secondary' sx={{fontSize: 14, mt: {xs: 0, md: 5}}}>Материал</Typography>
                                    <Typography sx={{fontSize: 14}}>{artWorkSelected.material}</Typography>
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
                }
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/${backgroundSrc}.webp)`,
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
                    <Typography component={Link} href={`/work/${randomWork.src}`} underline='none' color='text.secondary' align='center'>Подробнее</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Artwork;