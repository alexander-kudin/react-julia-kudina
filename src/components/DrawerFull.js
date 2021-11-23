import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const DrawerFull = ({ handleClose, open}) => {

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
                            <Typography component={Link} href="/" underline="none"  sx={{ flex: 1, color:'black'}}>
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
                    <ListItem component={Link} href="/collection" underline="none" color="text.primary">
                        <ListItemText primary="Коллекция"/>
                    </ListItem>
                    <ListItem component={Link} href="#bio" underline="none" color="text.primary">
                        <ListItemText primary="Биография" />
                    </ListItem>
                    <ListItem component={Link} href="#exhibitions" underline="none" color="text.primary">
                        <ListItemText primary="Выставки"/>
                    </ListItem>
                    <ListItem component={Link} href="#media" underline="none" color="text.primary">
                        <ListItemText primary="Медиа"/>
                    </ListItem>
                    <ListItem component={Link} href="#contacts" underline="none" color="text.primary">
                        <ListItemText primary="Контакты"/>
                    </ListItem>

                </List>
            </Box>
        </Dialog>
    );
}

export default DrawerFull;