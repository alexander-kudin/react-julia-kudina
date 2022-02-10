import React from 'react';

// Material UI
import { Box, Typography, Link } from '@mui/material';

// Localization
import { useTranslation } from "react-i18next";

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';

// Project imports
import Loader from './Loader';

const RandomArtwork = () => {
  const { i18n, t } = useTranslation();
  const randomWork = useSelector(state => state.artworksReducer.randomArtwork);
  const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

  return (
    !randomWork ? <Loader />: 
    (
        <Box sx={{ display: {xs: 'none', md: 'flex'}, flexDirection: 'column', p: 10}}>
            <Typography align='center'>{t("randomWork.title")}</Typography>
            
            <LinkRouter to={`/work/${randomWork.src}`} underline='none' key={`/work/${randomWork.src} + ${randomWork.titleEn}`} >
                <Box
                    component='img'
                    sx={{ width: '100%', objectFit: 'cover', my: 7 }}
                    alt={i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }
                    src={`/images/works/webp/${randomWork.src}.webp`}
                />
            </LinkRouter>
            <Typography variant='h6' align='center'>{i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }</Typography>
            <LinkRouter to={`/work/${randomWork.src}`} underline='none' key={`/work/${randomWork.src}`}  color='text.secondary' align='center'>{t("randomWork.details")}</LinkRouter>
        </Box>
    )
  );
}

export default RandomArtwork;
