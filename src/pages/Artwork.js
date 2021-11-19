import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';

const Artwork = ({artWorks, setBackgroundSrc}) => {
    const { srcName } = useParams();
    const artWorkSelected = artWorks.find(work => work.src === srcName);
    return (
        <>
            {!artWorkSelected ? 
            <Container>
                <Box maxWidth="sm" width={{xs: "50%", sm: "auto"}} mt={{xs: 12, md: 40}} sx={{alignItems: 'flex-end', pb: 25}}>
                    <Typography component="h1" variant="h2" color="text.primary">Картина не найдена</Typography>
                    <Typography component={Link} href="/" underline="none" variant="h6" color="text.primary">На главную</Typography>
                </Box> 
            </Container>
            :
            <Container>
                { setBackgroundSrc(`/works/${artWorkSelected.src}`) }
                {/* Artwork Title unit */}
                <Box maxWidth="sm" width={{xs: "50%", sm: "auto"}} mt={{xs: 12, md: 40}} sx={{display: 'flex', alignItems: 'flex-end', pb: 25}}>
                    <Typography component="h1" variant="h2" color="text.primary">
                        {artWorkSelected.title}
                        <Typography variant="subtitle" color="text.secondary" sx={{fontSize: 25}} ml={2}>{artWorkSelected.year}</Typography>
                    </Typography>
                </Box>
                {/* End Artwork Title unit */}

                {/* Artwork Description unit */}
                <Grid container spacing={{ xs: 5}}>
                    <Grid container item xs={12} md={6}>
                        <Grid item xs={6} md={12}>
                            <Typography color="text.secondary" sx={{fontSize: 14}}>Размер</Typography>
                            <Typography sx={{fontSize: 14}}>{artWorkSelected.size}</Typography>
                        </Grid>
                        <Grid item xs={6} md={12}>
                            <Typography color="text.secondary" sx={{fontSize: 14, mt: {xs: 0, md: 5}}}>Материал</Typography>
                            <Typography sx={{fontSize: 14}}>{artWorkSelected.material}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{lineHeight: 2}} variant="p" component="p">
                            {artWorkSelected.description}
                        </Typography>
                    </Grid>
                </Grid>
                {/* End Artwork Description unit */}
                
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        objectFit: "cover",
                        mt: 15,
                    }}
                    alt={artWorkSelected.title}
                    src={`/images/works/${artWorkSelected.src}.jpg?w=161&fit=crop&auto=format`}
                />
            
            </Container>
            }
        </>
    )
}

export default Artwork;