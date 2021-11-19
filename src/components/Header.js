import * as React from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

import HeaderDrawer from './Drawer.js'
import DrawerFull from './DrawerFull.js';

const Header = () => {

    // const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const toggleDrawer = (drawerSate) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }

    //     setIsDrawerOpen(drawerSate);
    // };
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='absolute' color='transparent' elevation={0}>
                <Toolbar sx={{width: { xs: '100%', md: "92.5%" }, mx: "auto", py: 5}}>
                        <Typography component={Link} href="/" underline="none" sx={{ flex: 1, color: {xs: 'white', md: 'black'}}}>
                            JULIA KUDINA
                        </Typography>
                        <Typography component='div' onClick={handleClickOpen} sx={{ mr: 2, color: 'white', display: { xs: 'none', sm: 'block' } }}>Меню</Typography>
                        <IconButton 
                            onClick={handleClickOpen}
                            size='large'
                            edge='start'
                            aria-label='menu'
                            sx={{color: 'white'}}
                        >
                            <MenuIcon />
                        </IconButton>
                </Toolbar>
            </AppBar>
            {/* <HeaderDrawer
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
            /> */}
            <DrawerFull 
                handleClose={handleClose}
                open={open}
            />
        </Box>
    )
}

export default Header;