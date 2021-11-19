import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
import { Box } from '@mui/system';

const HeaderDrawer = ({toggleDrawer, isDrawerOpen}) => {
    
      const list = () => (
        <Box
          sx={{ paper: { xs: "100%", md: 250 }}}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <List>
              <ListItem button component={Link} href="/works">
                <ListItemText primary='Работы' />
              </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemText primary='Города' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Графика' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Женская Эстетика' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Цветы' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Ихтис' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Фрукты' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Фантазийная Философия' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Абстракция' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Тайны Океана' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Натюрморт' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Пейзажи' />
                </ListItem>
            </List>
        </Box>
      );
    

    return (
        <Drawer
            anchor={'right'}
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    )
}

export default HeaderDrawer;