import React from 'react';

import { Box, Typography } from '@mui/material';

import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Loader from './Loader.js';

const RandomArtwork = () => {
  const { i18n, t } = useTranslation();
  const randomWork = useSelector(state => state.artworksReducer.randomArtwork);
  let navigate = useNavigate();

  return (
    !randomWork ? <Loader />: 
    (
        <Box sx={{ display: {xs: 'none', md: 'flex'}, flexDirection: 'column', p: 10}}>
            <Typography align='center'>{t("randomWork.title")}</Typography>
            
            <Box onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}} >
                <Box
                    component='img'
                    sx={{ width: '100%', objectFit: 'cover', my: 7 }}
                    alt={i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }
                    src={`/images/works/webp/${randomWork.src}.webp`}
                />
            </Box>
            <Typography variant='h6' align='center'>{i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }</Typography>
            <Typography onClick={() => navigate(`/work/${randomWork.src}`)} sx={{cursor: 'pointer'}} color='text.secondary' align='center'>{t("randomWork.details")}</Typography>
        </Box>
    )
  );
}

export default RandomArtwork;
