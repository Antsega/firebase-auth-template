import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../contexts/AuthContext';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

interface MenuItemType {
  label: string;
  path: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // Red color
    },
  },
});

const MENU_ITEMS: MenuItemType[] = [
  { label: 'Home', path: '/welcome' },
  { label: 'About', path: '/about' },
  { label: 'Interests', path: '/interests' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Tier Lists', path: '/interests/tier-lists' },
  { label: 'Contact Us', path: '/contact-us' },
];

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [interestsAnchorEl, setInterestsAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const interestsOpen = Boolean(interestsAnchorEl);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInterestsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setInterestsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInterestsClose = () => {
    setInterestsAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleContactUs = () => {
    navigate('/contact-us');
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
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

            <Button color="inherit" onClick={handleInterestsMenu}>
              INTERESTS
            </Button>
            <Button color="inherit" onClick={handleContactUs}>
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
              <MenuItem onClick={() => { navigate('/welcome'); handleClose(); }}>Welcome Page</MenuItem>
              <MenuItem onClick={() => { navigate('/about'); handleClose(); }}>About</MenuItem>
              <MenuItem onClick={() => { navigate('/interests'); handleClose(); }}>Interests</MenuItem>
              <MenuItem onClick={() => { navigate('/gallery'); handleClose(); }}>Gallery</MenuItem>
              <MenuItem onClick={() => { navigate('/tier-lists'); handleClose(); }}>Tier Lists</MenuItem>
              <MenuItem onClick={() => { navigate('/contact-us'); handleClose(); }}>Contact Us</MenuItem>
            </Menu>

            {/* Interests Menu */}
            <Menu
              id="interests-menu"
              anchorEl={interestsAnchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={interestsOpen}
              onClose={handleInterestsClose}
            >
              <MenuItem onClick={() => { navigate('/interests/anime'); handleInterestsClose(); }}>Anime</MenuItem>
              <MenuItem onClick={() => { navigate('/interests/games'); handleInterestsClose(); }}>Games</MenuItem>
              <MenuItem onClick={() => { navigate('/interests/tier-lists'); handleInterestsClose(); }}>Tier Lists</MenuItem>
              <MenuItem onClick={() => { navigate('/interests/cookie-run'); handleInterestsClose(); }}>Cookie Run Kingdom</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default NavigationBar;
