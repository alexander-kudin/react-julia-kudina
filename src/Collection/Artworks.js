import * as React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const Artworks = ({ artworks, artSeries }) => {
    const { seriesSlug } = useParams();
    let navigate = useNavigate();
    const artSeriesSelected = seriesSlug == null ? artSeries.find(series => series.seriesPath === 'all') : artSeries.find(series => series.seriesPath === seriesSlug);
    const artworksFiltered = artSeriesSelected.seriesPath === 'all' ? artworks : artworks.filter(artwork => artwork.seriesId === artSeriesSelected.id);

    React.useEffect(() => {
    }, [seriesSlug]);

    const useWindowSize = () => {
        const [size, setSize] = React.useState(0);
        React.useLayoutEffect(() => {
          function updateSize() {
            setSize(window.innerWidth);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    return (
        <ImageList sx={{ overflow: 'hidden', height: '100%', position: 'relative', pb: 10 }} cols={useWindowSize() > 850 ? 2 : 1} variant='woven' gap={120}>
            {artworksFiltered.map((artwork) => (
                <ImageListItem onClick={() => navigate(`/work/${artwork.src}`)} sx={{cursor:'pointer'}} key={artwork.src}>
                    <img
                        src={`/images/works/webp/${artwork.src}.webp?w=161&fit=crop&auto=format`}
                        srcSet={`/images/works/webp/${artwork.src}.webp?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={artwork.title}
                        loading='lazy'
                    />
                    <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                        <Typography variant='subtitle1' color='text.secondary' sx={{ fontSize: 11, width: 'fit-content', display: 'block' }}>{artwork.size}</Typography>
                        <Typography component='h3' color='text.primary' sx={{ fontSize: {xs: 32, md: 24}, lineHeight: 1, fontWeight: 300 }} ml={2}>{artwork.title}</Typography>
                    </Box>
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Artworks;