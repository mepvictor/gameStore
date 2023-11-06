import React, { useState } from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import CardProduct from '../CardProduct';

const drawerWidth = 240;

export default function DrawerPrincipal () {

    const [ products, setProducts ] = useState([ 
        {
            name: 'Computador',
            description: 'Esse é um computador de última geração',
            price: 2500,
            image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        },
        {
          name: 'Vídeo game',
          description: 'Testando apenas',
          price: 2500,
          image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        },
        {
          name: 'Vídeo game',
          description: 'Testando apenas',
          price: 2500,
          image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        }
     ])  

     const handleChange = () => {
      window.location.href = '/admin/alteracao'
     }

     const renderProducts = () => {
        if (products && products.length > 0) {
            return <CardProduct handleChange={handleChange} products={products} />
        }
     }

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
              <ListItemButton Button to='/admin/cadastro'>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary='Cadastrar' />
              </ListItemButton>
            </ListItem>

            <ListItem key='2' disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
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
          <h1 style={{ textAlign: 'center' }}>Produtos</h1>
          {renderProducts()}
        </Typography>
      </Box>
    </Box>
  );
}