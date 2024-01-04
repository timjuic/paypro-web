import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonStyle = (path) => ({
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    boxShadow: location.pathname === path ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none',
    color: 'black',
    flexGrow: 1,
    textAlign: 'center',
  });

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', fontSize: "40px", fontWeight: "bold" }}>
          PayPro
        </Typography>
        <Button color="inherit" sx={getButtonStyle('/users')} onClick={() => navigate('/users')}>
          Users
        </Button>
        <Button color="inherit" sx={getButtonStyle('/merchants')} onClick={() => navigate('/merchants')}>
          Merchants
        </Button>
        <Button color="inherit" sx={getButtonStyle('/terminals')} onClick={() => navigate('/terminals')}>
          Terminals
        </Button>
        <Button color="inherit" sx={getButtonStyle('/transactions')} onClick={() => navigate('/transactions')}>
          Transactions
        </Button>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
