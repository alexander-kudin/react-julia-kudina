import * as React from 'react';
import { Container, createTheme, CssBaseline, Grid, Link, Typography } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Artwork from './pages/Artwork.js';
import ArtCollection from './pages/ArtCollection.js';
import Home from './pages/Home.js';
import { ThemeProvider } from '@mui/private-theming';
import { Box } from '@mui/system';

import artWorksJSON from './art-works.json';

const App = () => {
  const theme = createTheme();
  const [artWorks, setArtWorks] = React.useState(artWorksJSON);
  const [randomWork, setRandomWork] = React.useState(artWorks[Math.floor(Math.random() * artWorks.length)]);
  const [backgroundSrc, setBackgroundSrc] = React.useState("julia-kudina");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Grid container minHeight="100vh" justifyContent="space-between" columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: "none", md:"block" } }}>
            <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:"column" }}>
              <Typography sx={{mt: {xs: 12, md: 42}, textTransform: "uppercase", transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Page Titile</Typography>
            </Container>
          </Grid>

          <Grid item md={7} xs={12} order={{ xs: 3 }}>
            <Box sx={{
              width: {xs: "100%", md: "95%"}, 
              mx: "auto",
              bgcolor: 'background.paper',
              pb: 6,
            }}>
              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/collection/:collectionName" 
                  element={ <ArtCollection artWorks={artWorks}/> }
                />
                <Route 
                  path="/work/:srcName" 
                  element={<Artwork artWorks={artWorks} setBackgroundSrc={setBackgroundSrc}/>} 
                  />
              </Routes>
            </Box>
          </Grid>

          {/* Background unit */}
          <Grid item md={3} xs={12} backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} 
          >
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/${backgroundSrc}.jpg)`,
                backgroundRepeat: 'no-repeat',
                height: {xs: '30vh', md: '100vh'},
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            ></Box>
            <Box sx={{
              display: {xs: 'none', md: 'flex', flexDirection: 'column'},
              p: 10
            }}>
              <Typography align='center'>Случайная работа</Typography>
            
              <Box component={Link} href={`/work/${randomWork.src}`}>
                <Box
                  component='img'
                  sx={{
                      width: '100%',
                      objectFit: 'cover',
                      my: 15,
                  }}
                  alt={randomWork.title}
                  src={`/images/works/${randomWork.src}.jpg`}
                />
              </Box>
              <Typography variant="h6" align='center'>{randomWork.title}</Typography>
              <Typography component={Link} href={`/work/${randomWork.src}`} underline="none" color="text.secondary" align='center'>Подробнее</Typography>
            </Box>
          </Grid>
          {/* End Background unit */}

        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
