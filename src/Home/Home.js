import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import Biography from './Biography.js';
import Exhibitions from './Exhibitions.js';

const Home = ({ randomWork }) => {
    const { contentName } = useParams();
    let navigate = useNavigate();

    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:"column" }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Главная</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                        {(contentName === 'bio' || !contentName) && 'Юлия Кудина'}
                        {contentName === 'exhibitions' && 'Выставки'}
                        {contentName === 'media' && 'СМИ'}
                        {contentName === 'contacts' && 'Контакты'}
                    </Typography>
                    <Grid container mt={{xs: 5, md: 25}}>
                        <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                            <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 120, display: 'flex', flexDirection: 'column' }}>
                                <Typography onClick={() => navigate(`/`)} sx={{textDecoration: 'none', cursor: 'pointer', fontSize: 18}} color={contentName === 'bio' || !contentName ? 'text.primary' : 'text.secondary'}>Биография</Typography>
                                <Typography onClick={() => navigate(`/exhibitions`)} sx={{textDecoration: 'none', cursor: 'pointer', fontSize: 18}} color={contentName === 'exhibitions' ? 'text.primary' : 'text.secondary'} mt={1}>Выставки</Typography>
                                <Typography onClick={() => navigate(`/collection/towns`)} sx={{textDecoration: 'none', cursor: 'pointer', fontSize: 18}} color={contentName === 'exhibitions' ? 'text.primary' : 'text.secondary'} mt={1}>Работы</Typography>
                                {/* <Typography component='a' href='/media' sx={{textDecoration: 'none', cursor: 'pointer', fontSize: 18}} color={contentName === 'media' ? 'text.primary' : 'text.secondary'} mt={1}>Медиа</Typography>
                                <Typography component='a' href='/contacts' sx={{textDecoration: 'none', cursor: 'pointer', fontSize: 18}} color={contentName === 'contacts' ? 'text.primary' : 'text.secondary'} mt={1}>Контакты</Typography> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}> 
                            {(contentName === 'bio' || !contentName) && <Biography />}
                            {contentName === 'exhibitions' && <Exhibitions />}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} sx={{ top:'0', bottom: '0', position: {md: 'sticky'}}} height="100%" backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/julia-kudina.webp)',
                        backgroundRepeat: 'no-repeat',
                        height: {xs: '30vh', md: '100vh'},
                        backgroundSize: 'cover',
                        backgroundPosition: {xs: '50% 35%', md: 'center center'}
                    }}
                ></Box>
                <Box sx={{ display: {xs: 'none', md: 'flex'}, flexDirection: 'column', p: 10}}>
                    <Typography align='center'>Случайная работа</Typography>
                    
                    <Box onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}} >
                        <Box
                            component='img'
                            sx={{ width: '100%', objectFit: 'cover', my: 7 }}
                            alt={randomWork.title}
                            src={`/images/works/webp/${randomWork.src}.webp`}
                        />
                    </Box>
                    <Typography variant='h6' align='center'>{randomWork.title}</Typography>
                    <Typography onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}} color='text.secondary' align='center'>Подробнее</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;