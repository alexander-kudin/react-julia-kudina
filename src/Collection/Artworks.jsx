import * as React from 'react';

// Material UI
import { ImageList, ImageListItem, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Localization
import { useTranslation } from "react-i18next";

// Redux
import { useSelector } from 'react-redux';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";
import { useParams } from 'react-router';

const Artworks = () => {
    const { seriesSlug } = useParams();
    const { i18n } = useTranslation();

    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

    const artworks = useSelector(state => state.artworksReducer.artworks);
    const artSeries = useSelector(state => state.seriesReducer);

    const artSeriesSelected = seriesSlug == null ? artSeries.find(series => series.seriesPath === 'all') : artSeries.find(series => series.seriesPath === seriesSlug);
    const artworksFiltered = artSeriesSelected.seriesPath === 'all' ? artworks : artworks.filter(artwork => artwork.seriesId === artSeriesSelected.seriesId);

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
                <LinkRouter to={`/work/${artwork.src}`} key={`/work/${artwork.src}`} underline='none'>
                    <ImageListItem>
                        <img
                            src={`/images/works/webp/${artwork.src}.webp?w=161&fit=crop&auto=format`}
                            srcSet={`/images/works/webp/${artwork.src}.webp?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={artwork.title}
                            loading='lazy'
                        />
                        <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 2}}>
                            <Typography variant='subtitle1' color='text.secondary' sx={{ fontSize: 11, width: 'fit-content', display: 'block' }}>{artwork.size}</Typography>
                            <Typography component='h3' color='text.primary' sx={{ fontSize: {xs: 32, md: 24}, lineHeight: 1, fontWeight: 300 }} ml={2}>{i18n.language === "ru" ? artwork.titleRu : artwork.titleEn }</Typography>
                        </Box>
                    </ImageListItem>
                </LinkRouter>
            ))}
        </ImageList>
    )
}

export default Artworks;