import * as React from 'react';
import { Dialog, ListItemText, ListItem, List, AppBar, Toolbar, IconButton, Typography  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const DrawerFull = ({ handleDrawer, open, t, changeLanguage}) => {
    let navigate = useNavigate();

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleDrawer}
            TransitionComponent={Transition}
        >
            <Box sx={{ flexGrow: 1, width: {xs: "100%", md: "92.5%"}, mx: "auto" }}>
                <AppBar position='relative' color='transparent' elevation={0}>
                    <Toolbar sx={{py: 5.7}}>
                        <Box flex={1}>
                            <Typography onClick={() => navigate(`/`)}  sx={{ textTransform: 'uppercase', width: 'fit-content', color:'black', cursor:'pointer'}}>
                                {t("header.title")}
                            </Typography>
                        </Box>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleDrawer}
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
                    <ListItem onClick={() => {navigate(`/collection/towns`); handleDrawer()}} sx={{cursor: 'pointer',  width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.allWorks")}/>
                    </ListItem>
                    <ListItem onClick={() => {navigate(`/`); handleDrawer()}} sx={{cursor: 'pointer',  width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.biography")} />
                    </ListItem>
                    <ListItem onClick={() => {navigate(`/exhibitions`); handleDrawer()}} sx={{cursor: 'pointer',  width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.exhibitions")}/>
                    </ListItem>
                    <ListItem onClick={() => {navigate(`/contacts`); handleDrawer()}} sx={{cursor: 'pointer',  width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.contacts")}/>
                    </ListItem>
                    <ListItem onClick={() => {changeLanguage(); handleDrawer()}} sx={{cursor: 'pointer',  width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("languageChangeDescriptive")}/>
                    </ListItem>

                </List>
            </Box>
        </Dialog>
    );
}

export default DrawerFull;