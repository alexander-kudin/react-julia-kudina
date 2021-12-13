import * as React from 'react';
import { Dialog, ListItemText, ListItem, List, AppBar, Toolbar, IconButton, Typography  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const DrawerFull = ({ handleClose, open, t, changeLanguage}) => {
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
                            <Typography onClick={() => navigate(`/`)}  sx={{ textTransform: 'uppercase', flex: 1, color:'black', cursor:'pointer'}}>
                                {t("header.title")}
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
                    <ListItem onClick={() => {navigate(`/collection`); handleClose()}} sx={{cursor: 'pointer'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.allWorks")}/>
                    </ListItem>
                    <ListItem onClick={() => {navigate(`/`); handleClose()}} sx={{cursor: 'pointer'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.biography")} />
                    </ListItem>
                    <ListItem onClick={() => {navigate(`/exhibitions`); handleClose()}} sx={{cursor: 'pointer'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.exhibitions")}/>
                    </ListItem>
                    {/* <ListItem component={Link} href="/media" underline="none" color="text.primary">
                        <ListItemText primary={t("header.menuItems.media")}/>
                    </ListItem>
                    <ListItem component={Link} href="/contacts" underline="none" color="text.primary">
                        <ListItemText primary={t("header.menuItems.contacts")}/>
                    </ListItem> */}
                    <ListItem onClick={() => {changeLanguage(); handleClose()}} sx={{cursor: 'pointer'}} color="text.primary">
                        <ListItemText primary={t("languageChangeDescriptive")}/>
                    </ListItem>

                </List>
            </Box>
        </Dialog>
    );
}

export default DrawerFull;