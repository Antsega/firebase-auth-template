import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const ButtonAppBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit" onClick={() => navigate('/contact-us')}>
            CONTACT US
          </Button>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { navigate('/'); handleClose(); }}>Home</MenuItem>
            <MenuItem onClick={() => { navigate('/welcome'); handleClose(); }}>Welcome</MenuItem>
            <MenuItem onClick={() => { navigate('/about'); handleClose(); }}>About</MenuItem>
            <MenuItem onClick={() => { navigate('/interests/anime'); handleClose(); }}>Anime</MenuItem>
            <MenuItem onClick={() => { navigate('/interests/games'); handleClose(); }}>Games</MenuItem>
            <MenuItem onClick={() => { navigate('/interests/tier-lists'); handleClose(); }}>Tier Lists</MenuItem>
            <MenuItem onClick={() => { navigate('/interests/cookie-run'); handleClose(); }}>Cookie Run Kingdom</MenuItem>
            <MenuItem onClick={() => { navigate('/gallery'); handleClose(); }}>Gallery</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
