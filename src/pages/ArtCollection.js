import * as React from 'react';
import { Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const ArtCollection = ({artWorks}) => {
    const { collectionName } = useParams();
    const artCollection = artWorks.filter(work => work.collection === collectionName);
    const navigate = useNavigate();
    return (
        <Container>
            <Typography mt={{xs: 12, md: 40}} px={{xs: 5, md: 0}} component="h1" variant="h2" color="text.primary">{collectionName}</Typography>
            <ImageList sx={{ overflow: 'hidden', height: '100%', position: 'relative', mt: {xs: 12, md: 25}, px: {xs: 5, md: 0} }} cols={{ xs: 1, md: 2}} variant="woven" gap={120}>
            {artCollection.map((artWork) => (
                <ImageListItem onClick={() => navigate(`/work/${artWork.src}`)} sx={{cursor:"pointer"}} key={artWork.src}>
                <img
                    src={`/images/works/${artWork.src}.jpg?w=161&fit=crop&auto=format`}
                    srcSet={`/images/works/${artWork.src}.jpg?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={artWork.title}
                    loading="lazy"
                />
                    <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                        <Typography variant='subtitle1' color="text.secondary" sx={{ fontSize: 11 }}>{artWork.year}</Typography>
                        <Typography component="h3" color="text.primary" sx={{ fontSize: {xs: 40, md: 27}, lineHeight: 1, fontWeight: 300 }} ml={2}>{artWork.title}</Typography>
                    </Box>
                </ImageListItem>
            ))}
            </ImageList>
            {/* <Grid container justifyContent='space-between' sx={{ mt: {xs: 12, md: 25}}}>
            {artCollection.map((artWork, i) => (
                <Grid item onClick={() => navigate(`/work/${artWork.src}`)} xs={12} md={5} key={i} sx={{mb:10}}>
                    <img
                        width='100%'
                        src={`/images/works/${artWork.src}.jpg?w=161&fit=crop&auto=format`}
                        srcSet={`/images/works/${artWork.src}.jpg?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={artWork.title}
                        loading="lazy"
                    />
                    <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                        <Typography variant='subtitle1' color="text.secondary" sx={{fontSize: 12}}>{artWork.year}</Typography>
                        <Typography component="h3" color="text.primary" sx={{fontSize: 32, lineHeight: 1}} ml={2}>{artWork.title}</Typography>
                    </Box>
                </Grid>
            ))}
            </Grid> */}
            
        </Container>
    )
}

export default ArtCollection;