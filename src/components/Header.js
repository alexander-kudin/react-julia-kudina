import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

const Header = () => {
    return (
        <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar color="transparent" elevation={0}>
                        <Toolbar sx={{mx: 5, py: 2}}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Юлия Кудина
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
        </React.Fragment>
    )
}

export default Header;