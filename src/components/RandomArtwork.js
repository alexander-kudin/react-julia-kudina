// Material UI
import { Box, Typography, Link } from '@mui/material';

// Localization
import { useTranslation } from "react-i18next";

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Component Imports
import Loader from './Loader';

// Data Imports
import { getRandomArtwork } from '../data/artworks';

export default function RandomArtwork(){
  const { i18n, t } = useTranslation();
  const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

  const randomWork = getRandomArtwork();

  return (
    !randomWork ? <Loader /> : 
    <Box sx={{ display: {xs: 'none', md: 'flex'}, flexDirection: 'column', p: 10}}>
      <Typography align='center'>{t("randomWork.title")}</Typography>
        
      <LinkRouter to={`/artwork/${randomWork.slug}`} underline='none' >
        <Box
          component='img'
          sx={{ width: '100%', objectFit: 'cover', my: 7 }}
          alt={i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }
          src={`/images/artwork-covers/${randomWork.slug}.webp`}
        />
      </LinkRouter>
      <Typography variant='h6' align='center'>{i18n.language === "ru" ? randomWork.titleRu : randomWork.titleEn }</Typography>
      <LinkRouter to={`/artwork/${randomWork.src}`} underline='none' key={`/work/${randomWork.src}`}  color='text.secondary' align='center'>{t("randomWork.details")}</LinkRouter>
    </Box>
  );
}
