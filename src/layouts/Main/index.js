// Material UI
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// React Routing
import { Outlet } from 'react-router-dom';

// Localization
import { useTranslation } from "react-i18next";

// Layout Imports
import MainHeader from './MainHeader';
import MainLeftBar from './MainLeftBar';
import MainRightBar from './MainRightBar';
import Copyright from '../../components/Copyright';

// MUI Styling
const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

export default function MainLayout() {
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    i18n.language === "ru" ?  i18n.changeLanguage("en") : i18n.changeLanguage("ru")
  };

  return (
    <RootStyle>
      <MainHeader changeLanguage = {changeLanguage} t ={t}/>
      <Grid container minHeight='100vh' justifyContent='space-between' columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <MainLeftBar />
        
        <Grid item md={7} xs={12} order={{ xs: 3 }}>
          <Box sx={{ width: {xs: '90%', md: '95%'}, mx: 'auto', bgcolor: 'background.paper', pb: 6}}>
            <Outlet />
          </Box>
          <Copyright sx={{ display: {xs: 'block', md: 'none'} }}/>
        </Grid>

        {/* Background unit */}
        <MainRightBar />
      </Grid>
    </RootStyle>
  );
}