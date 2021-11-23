import React from 'react';
import { Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ArrowForward } from '@mui/icons-material';
import exhibitions from '../exhibitions.json';

const Home = ({ randomWork }) => {

    const [TextBio,setTextBio]=React.useState(false);
    const [TextExhibitions,setTextExhibitions]=React.useState(false);
    const [TextMedia,setTextMedia]=React.useState(false);
    const [TextContact,setTextContact]=React.useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            // console.log(window.scrollY);

            setTextBio(true);
             if (window.scrollY >= 900 && window.scrollY <= 1700 ) {
                setTextBio(false);
                setTextExhibitions(true);
                setTextMedia(false);
                setTextContact(false);
            }

            else {
                setTextExhibitions(false);
                setTextMedia(false);
                setTextContact(false);
            }
    
        }
    };
      
    React.useEffect(() => {
        window.addEventListener('scroll', changeBackground);
      
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'block' } }}>
                <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:"column" }}>
                <Typography sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Главная</Typography>
                </Container>
            </Grid>

            <Grid item md={7} xs={12} order={{ xs: 3 }}>
                <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
                    <Typography id="bio" mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                        Юлия Кудина
                    </Typography>
                    <Grid container mt={{xs: 5, md: 25}}>
                        <Grid container item xs={12} md={5} display={{xs: 'none', md: 'flex'}} flexDirection = 'column'>
                            <Box sx={{ position: '-webkit-sticky', top:120, display: 'flex', flexDirection: 'column' }}>
                                <Typography component={Link} href="#bio" sx={{textDecoration:'none', fontSize: 18}} color={TextBio? 'text.primary' : 'text.secondary'}>Биография</Typography>
                                <Typography component={Link} href="#exhibitions" sx={{textDecoration:'none', fontSize: 18}} color={TextExhibitions? 'text.primary' : 'text.secondary'} mt={1}>Выставки</Typography>
                                <Typography component={Link} href="#media" sx={{textDecoration:'none', fontSize: 18}} color={TextMedia? 'text.primary' : 'text.secondary'} mt={1}>Медиа</Typography>
                                <Typography component={Link} href="#contacts" sx={{textDecoration:'none', fontSize: 18}} color={TextContact? 'text.primary' : 'text.secondary'} mt={1}>Контакты</Typography>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={12} md={7}> 
                            <Box>
                                <Typography sx={{lineHeight: 2}} component="p">
                                    Кудина Юлия Борисовна родилась 22 февраля 1992, в Краснодаре. В 2012 году окончила институт начального среднего профессионального образования при Кубанском государственном университете, по специальности «дизайн среды». В данный момент продолжает обучение в Кубанском государственном университете, на художественно графическом факультете. Является членом Союза художников России с 2016 года. В течении семи лет учится в студии живописи заслуженного художника России С. Д. Воржева. С 2010 года ведет педагогическую деятельность, по направлению живопись. Начиная с 2009 года участница краевых, региональных и международных выставок и конкурсов по живописи.
                                </Typography>
                            </Box>
                            <Box id="exhibitions" mt={6}>
                                <Typography component="h3" variant="h6" mb={2}>Выставки</Typography>
                                {
                                exhibitions.map((exhibition) => (
                                <Box key={exhibition.title}>
                                    <Box display="flex" py={3}>
                                        <Typography color='text.secondary'>{exhibition.year}</Typography>
                                        <Box ml={10}>
                                            <Typography color='text.primary'>{exhibition.title}</Typography>
                                            <Typography color='text.secondary'>{exhibition.location}</Typography>
                                        </Box>
                                        {exhibition.src && 
                                            <IconButton 
                                            style={{ backgroundColor: 'transparent' }}
                                            rel="noopener noreferrer"
                                            href={exhibition.src}
                                            target="_blank"
                                            size='large'
                                            sx={{color: 'black', marginLeft: 'auto'}}
                                            >
                                                <ArrowForward />
                                            </IconButton>
                                        }
                                    </Box>
                                    <Divider />
                                </Box>))
                                }
                            </Box>
                            <Box id="media">

                            </Box>
                            <Box id="contacts">

                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* Background unit */}
            <Grid item md={3} xs={12} backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/julia-kudina.webp)',
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

export default Home;