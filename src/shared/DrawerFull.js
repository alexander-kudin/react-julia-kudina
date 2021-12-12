import * as React from 'react';
import { Dialog, ListItemText, ListItem, List, AppBar, Toolbar, IconButton, Typography  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const DrawerFull = ({ handleClose, open}) => {
    let navigate = useNavigate();

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <Box sx={{ flexGrow: 1, width: {xs: "100%", md: "92.5%"}, mx: "auto" }}>
                <AppBar position='relative' color='transparent' elevation={0}>
                    <Toolbar sx={{py: 5.7}}>
                            <Typography onClick={() => navigate(`/`)}  sx={{ flex: 1, color:'black', cursor:'pointer'}}>
                                JULIA KUDINA
                            </Typography>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                            <CloseIcon />
                            </IconButton>
                    </Toolbar>
                </AppBar>
                
                <List
                    sx={{ bgcolor: 'background.paper' }} 
                    aria-labelledby="nested-list-subheader" 
                    component="nav" 
                >
                    <ListItem onClick={() => navigate(`/collection`)} cursor="pointer" color="text.primary">
                        <ListItemText primary="Все работы"/>
                    </ListItem>
                    <ListItem onClick={() => navigate(`/`)} cursor="pointer" color="text.primary">
                        <ListItemText primary="Биография" />
                    </ListItem>
                    <ListItem onClick={() => navigate(`/exhibitions`)} cursor="pointer" color="text.primary">
                        <ListItemText primary="Выставки"/>
                    </ListItem>
                    {/* <ListItem component={Link} href="/media" underline="none" color="text.primary">
                        <ListItemText primary="Медиа"/>
                    </ListItem>
                    <ListItem component={Link} href="/contacts" underline="none" color="text.primary">
                        <ListItemText primary="Контакты"/>
                    </ListItem> */}

                </List>
            </Box>
        </Dialog>
    );
}

export default DrawerFull;