import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { HashLink as Anchor } from 'react-router-hash-link';
import { Box } from '@mui/system';

const Biography = ({ randomWork }) => {
    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:"column" }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Page Titile</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                        Юлия Кудина
                    </Typography>
                    <Grid container mt={{xs: 5, md: 25}}>
                        <Grid container item sx={{display: {xs: 'none', md: 'flex'}}} xs={12} md={5} flexDirection='column'>
                            <Typography component={Anchor} to="/#bio" sx={{textDecoration:'none'}} color='text.primary'>Биография</Typography>
                            <Typography component={Anchor} to="/#bio" sx={{textDecoration:'none'}} color='text.secondary' mt={1}>Выставки</Typography>
                            <Typography component={Anchor} to="/#bio" sx={{textDecoration:'none'}} color='text.secondary' mt={1}>Медиа</Typography>
                            <Typography component={Anchor} to="/#bio" sx={{textDecoration:'none'}} color='text.secondary' mt={1}>Контакты</Typography>
                        </Grid>
                        <Grid item xs={12} md={7}> 
                            <Typography id="bio" sx={{lineHeight: 2}} variant="p" component="p">
                                Кудина Юлия Борисовна родилась 22 февраля 1992, в Краснодаре. В 2012 году окончила институт начального среднего профессионального образования при Кубанском государственном университете, по специальности «дизайн среды». В данный момент продолжает обучение в Кубанском государственном университете, на художественно графическом факультете. Является членом Союза художников России с 2016 года. В течении семи лет учится в студии живописи заслуженного художника России С. Д. Воржева. С 2010 года ведет педагогическую деятельность, по направлению живопись. Начиная с 2009 года участница краевых, региональных и международных выставок и конкурсов по живописи.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/julia-kudina.jpg)',
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
                    <Typography component={Link} href={`/work/${randomWork.src}`} underline='none' color='text.secondary' align='center'>Подробнее</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Biography;