import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

import DrawerFull from './DrawerFull.js';

const useHandleDrawer = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const handleDrawer = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return [isOpen, handleDrawer];
};

const Header = ({changeLanguage, t}) => {
    const [isOpen, handleDrawer] = useHandleDrawer(false);
    let navigate = useNavigate();  

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='absolute' color='transparent' elevation={0}>
                <Toolbar sx={{width: { xs: '100%', md: "92.5%" }, mx: "auto", py: 5}}>
                    <Box flex={1}>
                        <Typography onClick={() => navigate(`/`)} sx={{ textTransform: 'uppercase', width:'fit-content', cursor:'pointer', color: {xs: 'white', md: 'black'}}}>
                            {t("header.title")}
                        </Typography>
                    </Box>
                        <Typography component='span' onClick={() => changeLanguage()} sx={{ mr: 2, color: 'white', textTransform: 'uppercase', cursor: 'pointer', display: { xs: 'none', sm: 'block' } }}>{t("languageChange")}</Typography>
                        <Typography component='span' onClick={handleDrawer} sx={{ mr: 2, cursor: 'pointer', color: 'white', display: { xs: 'none', sm: 'block' } }}>{t("header.menu")}</Typography>
                        <IconButton
                            sx={{ color: 'white' }}
                            onClick={handleDrawer}
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
                handleDrawer={handleDrawer}
                open={isOpen}
            />
        </Box>
    )
}

export default Header;