import * as React from 'react';
import { Container, Grid, ImageList, ImageListItem, Typography, Link, List } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const ArtCollection = ({ artWorks, randomWork }) => {
    const { collectionName } = useParams();
    const artCollection = artWorks.filter(work => work.collection === collectionName);
    const navigate = useNavigate();
    return (
        
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Работы</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} fontSize={{xs: 30, md: 50}} component='h1' variant='h2' color='text.primary'>Коллекция {collectionName}</Typography>
                    <ImageList sx={{ overflow: 'hidden', height: '100%', position: 'relative', mt: {xs: 12, md: 25}, pb: 10 }} cols={window.innerWidth > 850 ? 2 : 1} variant='woven' gap={120}>

                    {artCollection.map((artWork) => (
                        <ImageListItem onClick={() => navigate(`/work/${artWork.src}`)} sx={{cursor:'pointer'}} key={artWork.src}>
                            <img
                                src={`/images/works/optimized/${artWork.src}.jpg?w=161&fit=crop&auto=format`}
                                srcSet={`/images/works/optimized/${artWork.src}.jpg?w=161&fit=crop&auto=format&dpr=2 2x`}
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
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/works/optimized/${randomWork.src}.jpg)`,
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
                            src={`/images/works/optimized/${randomWork.src}.jpg`}
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