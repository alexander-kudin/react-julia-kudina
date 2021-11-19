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
import { Collapse, Link } from '@mui/material';
import { Box } from '@mui/system';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const DrawerFull = ({ handleClose, open}) => {

    const [openList, setOpenList] = React.useState(true);

    const navigate = useNavigate();

    const handleClick = () => {
        setOpenList(!openList);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='relative' color='transparent' elevation={0}>
                    <Toolbar sx={{width: {xs: "100%", md: "85%"}, mx: "auto", py: 5.7}}>
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
                    sx={{ width: '100%', bgcolor: 'background.paper' }} 
                    aria-labelledby="nested-list-subheader" 
                    component="nav"
                >
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
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="Коллекции" />
                        {openList ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openList} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={Link} href="/collection/Города" underline="none" color="text.primary">
                                <ListItemText sx={{ pl: 4 }} primary="Города" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Dialog>
    );
}

export default DrawerFull;