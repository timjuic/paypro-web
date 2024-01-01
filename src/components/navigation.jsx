import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = ({ currentPage }) => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', fontSize:"40px", fontWeight:"bold" }}>
          PayPro
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button 
            color="inherit" 
            sx={{
              fontWeight: currentPage === 'Users' ? 'bold' : 'normal',
              boxShadow: currentPage === 'Users' ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none',
              color: 'black'
            }}
          >
            Users
          </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button 
            color="inherit" 
            sx={{
              fontWeight: currentPage === 'Merchants' ? 'bold' : 'normal',
              boxShadow: currentPage === 'Merchants' ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none',
              color: 'black'
            }}
          >
            Merchants
          </Button>

        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button 
            color="inherit" 
            sx={{
              fontWeight: currentPage === 'Terminals' ? 'bold' : 'normal',
              boxShadow: currentPage === 'Terminals' ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none',
              color: 'black'
            }}
          >
            Terminals
          </Button>

        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button 
            color="inherit" 
            sx={{
              fontWeight: currentPage === 'Transactions' ? 'bold' : 'normal',
              boxShadow: currentPage === 'Transactions' ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none',
              color: 'black'
            }}
          >
            Transactions
          </Button>

        </Box>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;