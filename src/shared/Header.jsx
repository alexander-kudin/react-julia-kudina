import * as React from 'react';

// Material UI
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Component Imports
import DrawerFull from './DrawerFull';

const useHandleDrawer = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const handleDrawer = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return [isOpen, handleDrawer];
};

const Header = ({changeLanguage, t}) => {
    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;
    const [isOpen, handleDrawer] = useHandleDrawer(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='absolute' color='transparent' elevation={0}>
                <Toolbar sx={{width: { xs: '100%', md: "92.5%" }, mx: "auto", py: 5}}>
                    <Box flex={1}>
                        <LinkRouter to={`/`} key={`/`} underline='none' sx={{ textTransform: 'uppercase', width:'fit-content', color: {xs: 'white', md: 'black'}}}>
                            {t("header.title")}
                        </LinkRouter>
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