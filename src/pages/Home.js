import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { HashLink as Anchor } from 'react-router-hash-link';

const Biography = () => {
    return (
        <Container>

            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component="h1" variant="h2" color="text.primary">
                Юлия Кудина
            </Typography>

            <Grid container mt={{xs: 5, md: 25}}>
                <Grid container item sx={{display: {xs: 'none', md: 'flex'}}} xs={12} md={5} flexDirection='column'>
                    <Typography component={Anchor} to="/#bio" sx={{textDecoration:"none"}} color='text.primary'>Биография</Typography>
                    <Typography component={Anchor} to="/#bio" sx={{textDecoration:"none"}} color='text.secondary' mt={1}>Выставки</Typography>
                    <Typography component={Anchor} to="/#bio" sx={{textDecoration:"none"}} color='text.secondary' mt={1}>Медиа</Typography>
                    <Typography component={Anchor} to="/#bio" sx={{textDecoration:"none"}} color='text.secondary' mt={1}>Контакты</Typography>
                </Grid>
                <Grid item xs={12} md={7}> 
                    <Typography id="bio" sx={{lineHeight: 2}} variant="p" component="p">
                        Кудина Юлия Борисовна родилась 22 февраля 1992, в Краснодаре. В 2012 году окончила институт начального среднего профессионального образования при Кубанском государственном университете, по специальности «дизайн среды». В данный момент продолжает обучение в Кубанском государственном университете, на художественно графическом факультете. Является членом Союза художников России с 2016 года. В течении семи лет учится в студии живописи заслуженного художника России С. Д. Воржева. С 2010 года ведет педагогическую деятельность, по направлению живопись. Начиная с 2009 года участница краевых, региональных и международных выставок и конкурсов по живописи.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Biography;