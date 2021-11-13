import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Artwork = () => {
    return (
        <React.Fragment>
            <main>
                <Grid container position="static">
                    <Grid container item md={1} order={{ xs: 1 }}  sx={{ bgcolor: '#dddddd', width: '100%'}} ></Grid>

                    <Grid item md={8} order={{ xs: 3 }} px={18}>

                        {/* Artwork Title unit */}
                        <Box maxWidth="sm" component="main" sx={{display: 'flex', alignItems: 'flex-end', pt: 33, pb: 20}}>
                            <Box>
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    color="text.primary"
                                >
                                    Тёплый Вечер
                                </Typography>
                            </Box>
                            <Typography variant="h6" color="text.secondary" ml={2}>2012</Typography>
                        </Box>
                        {/* End Artwork Title unit */}

                        {/* Artwork Description unit */}
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="span" color="text.secondary">Size</Typography>
                                <Typography variant="h6" gutterBottom>2.0m x 4.5m</Typography>
                                <Typography variant="sapn" color="text.secondary">Material</Typography>
                                <Typography variant="h6" >Wood, Ink</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" component="p">
                                    Quickly build an effective pricing table for your potential customers with
                                    this layout. It's built with default MUI components with little
                                    customization.
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* End Artwork Description unit */}
                        <Box
                            component="img"
                            sx={{
                                height: "25%",
                                width: "100%",
                                objectFit: "cover",
                                mt: 5
                            }}
                            alt="The house from the offer."
                            src="https://source.unsplash.com/random"
                        />

                    </Grid>

                    {/* Artwork Background unit */}
                    <Grid item md={3} xs={0} order={{ xs: 2, sm: 3 }} sx={{ backgroundImage:'url(https://source.unsplash.com/random)', width: '100%'}} >
                        
                    </Grid>
                    {/* End Artwork Background unit */}

                </Grid>
            
            </main>
        </React.Fragment>
    )
}

export default Artwork;