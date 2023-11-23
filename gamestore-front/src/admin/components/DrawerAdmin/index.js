import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const drawerWidth = 240;

export default function DrawerPrincipal ({ content }) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Área administrativa - GameStore
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key='1' disablePadding>
            <ListItemButton Button to='/admin/produtos'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Produtos' />
            </ListItemButton>
          </ListItem>

          <ListItem key='2' disablePadding>
            <ListItemButton Button to='/admin/cadastrar'>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary='Cadastrar' />
            </ListItemButton>
          </ListItem>

          <ListItem key='2' disablePadding>
            <ListItemButton Button to='/admin/historico-vendas'>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary='Histórico de vendas' />
            </ListItemButton>
          </ListItem>

          <ListItem key='3' disablePadding>
            <ListItemButton onClick={() => sessionStorage.removeItem('tokenAdmin')} to='/admin/login'>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary='Sair' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#dcdcdc', p: 3 }}
        style={{ minHeight: '100vh' }}
      >
        <Toolbar />
        <Typography>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}