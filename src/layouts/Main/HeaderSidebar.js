import * as React from 'react';

// Material UI
import { Dialog, ListItemText, ListItem, List, AppBar, Toolbar, IconButton, Link  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props}/>
});

const HeaderSidebar = ({ handleDrawer, open, t, changeLanguage}) => {
    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;

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
                            <LinkRouter onClick={() => handleDrawer()} underline='none' to={`/`} key={`/`} sx={{ textTransform: 'uppercase', width: 'fit-content', color:'black'}}>
                                {t("header.title")}
                            </LinkRouter>
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
                
                <List sx={{ bgcolor: 'background.paper' }} aria-labelledby="nested-list-subheader" component="nav" >
                 
                    <ListItem component={LinkRouter} onClick={() => handleDrawer()} underline='none' to={`/collection/towns`} key={`/collection/towns`} sx={{width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.allWorks")}/>
                    </ListItem>
                    <ListItem component={LinkRouter}  onClick={() => handleDrawer()} underline='none' to={`/`} key={`/`} sx={{width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.biography")} />
                    </ListItem>
                    <ListItem component={LinkRouter} onClick={() => handleDrawer()} underline='none' to={`/exhibitions`} key={`/exhibitions`} sx={{width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.exhibitions")}/>
                    </ListItem>
                    <ListItem component={LinkRouter} onClick={() => handleDrawer()} underline='none' to={`/contacts`} key={`/contacts`} sx={{width: 'fit-content'}} color="text.primary">
                        <ListItemText primary={t("header.menuItems.contacts")}/>
                    </ListItem>
                    <ListItem onClick={() => {changeLanguage(); handleDrawer()}} sx={{width: 'fit-content', cursor: 'pointer'}} color="text.primary">
                        <ListItemText primary={t("languageChangeDescriptive")}/>
                    </ListItem>

                </List>
            </Box>
        </Dialog>
    );
}

export default HeaderSidebar;