import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Typography,
  MenuItem,
  Tooltip,
  IconButton,
  Menu,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { logoLight } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { pages, superuserPages } from '../../navigation';
import { useAuth } from '../../../contexts/AuthContext';
import MobileMenu from './MobileMenu';


const settings = [
  { title: 'Profile', path: "/profile" },
  { title: 'Support', path: '/support-request' },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { userInfo, logout } = useAuth();

  const [email, setEmail] = useState("");

  const [isSuperuser, setIsSuperuser] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
    }
    if (userInfo && userInfo.role === 'admin') {
      setIsSuperuser(true);
    }
  }, [userInfo]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    console.log("Logged out successfully");
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {

    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = (navigatePath: string) => {
    return () => {
      setAnchorElUser(null);
      navigate(navigatePath);
    };
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box mr="auto">
            <Box component='img'
              src={logoLight}
              sx={{ width: '10vw', maxWidth: 70, maxHeight: 70 }}>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>

            {pages.map((page, i) => (
              <Box marginLeft={4} key={i}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  aria-describedby={page.path}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: theme.palette.primary.dark,
                    borderRadius: theme.shape.borderRadius,
                  }}
                >
                  <Link href={page.path} style={{ textDecoration: 'none' }}>
                    <Typography
                      color='white'
                      sx={{
                        padding: theme.spacing(1),
                        borderRadius: theme.shape.borderRadius,
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            ))}


            {isSuperuser && (
              superuserPages.map((page, i) => (
                <Box marginLeft={4} key={i}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    aria-describedby={page.path}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: theme.palette.primary.dark,
                      borderRadius: theme.shape.borderRadius,
                    }}
                  >
                    <Link href={page.path} style={{ textDecoration: 'none' }}>
                      <Typography
                        color='white'
                        sx={{
                          padding: theme.spacing(1),
                          borderRadius: theme.shape.borderRadius,
                        }}
                      >
                        {page.title}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              ))
            )}
            <Typography
              variant={'h6'}
              color={'white'}
              sx={{ marginLeft: 10 }}
            >
              {email}
            </Typography>

            <Box marginRight={20}>
            </Box>
          </Box>

          {isMobile && (
            <MobileMenu handleLogout={handleLogout} navigate={navigate} isSuperuser={isSuperuser} />
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar>
                  {userInfo?.name?.charAt(0)}{userInfo?.name?.split(' ')[1].charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseNavMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu(setting.path)}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem key="Sign Out" onClick={handleLogout}>
                <Typography textAlign="center">Sign Out</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* {!isMobile && (
            <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
          )} */}
        </Toolbar>
      </AppBar>

    </Box>
  );
}

export default Navbar;