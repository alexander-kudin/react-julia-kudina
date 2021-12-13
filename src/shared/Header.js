import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

import DrawerFull from './DrawerFull.js';

const Header = ({changeLanguage, t}) => {
    const [open, setOpen] = React.useState(false);
    let navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='absolute' color='transparent' elevation={0}>
                <Toolbar sx={{width: { xs: '100%', md: "92.5%" }, mx: "auto", py: 5}}>
                        <Typography onClick={() => navigate(`/`)} sx={{ textTransform: 'uppercase', flex: 1, cursor:'pointer', color: {xs: 'white', md: 'black'}}}>
                            {t("header.title")}
                        </Typography>
                        <Typography component='div' onClick={() => changeLanguage()} sx={{ mr: 2, color: 'white', textTransform: 'uppercase', cursor: 'pointer', display: { xs: 'none', sm: 'block' } }}>{t("languageChange")}</Typography>
                        <Typography component='div' onClick={handleClickOpen} sx={{ mr: 2, cursor: 'pointer', color: 'white', display: { xs: 'none', sm: 'block' } }}>{t("header.menu")}</Typography>
                        <IconButton 
                            sx={{ color: 'white' }}
                            onClick={handleClickOpen}
                            size='large'
                            edge='start'
                            aria-label='menu'
                        >
                            <MenuIcon />
                        </IconButton>
                </Toolbar>
            </AppBar>
            <DrawerFull 
                changeLanguage = {changeLanguage}
                t = {t}
                handleClose={handleClose}
                open={open}
            />
        </Box>
    )
}

export default Header;