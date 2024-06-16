import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Link,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { pages, superuserPages } from '../../navigation';
import { useAuth } from '../../../contexts/AuthContext';


interface MobileMenuProps {
    handleLogout: () => void;
    navigate: (path: string) => void;
    isSuperuser: boolean;
}

const MobileMenu = ({ handleLogout, navigate, isSuperuser }: MobileMenuProps) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMobileNavigation = (path: string) => {
        navigate(path);
        setMobileOpen(false);
    };

    return (
        <>
            <Box alignItems={'center'} sx={{
                display: { xs: 'flex', md: 'none' },
                backgroundColor: theme.palette.primary.light,
                borderRadius: '8px',
                marginRight: 2,

            }}>
                <Button
                    aria-label="Menu"
                    variant={'outlined'}
                    onClick={handleDrawerToggle}
                    sx={{
                        borderRadius: 2,
                        minWidth: 'auto',
                        padding: 1,
                        color: 'black',
                    }}
                >
                    <MenuIcon />
                </Button>
            </Box>
            <Drawer
                anchor={'right'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        position: 'center',
                        borderRadius: '8px',
                        // backgroundColor: theme.palette.primary.light, 
                        color: theme.palette.text.primary,
                    },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
                    <List>
                        {pages.map((page, index) => (
                            <ListItemButton key={index} onClick={() => handleMobileNavigation(page.path)}>
                                <ListItemText primary={page.title} />
                            </ListItemButton>
                        ))}
                    </List>
                    {isSuperuser && (
                        <List>
                            {superuserPages.map((page, index) => (
                                <ListItemButton key={index} onClick={() => handleMobileNavigation(page.path)}>
                                    <ListItemText primary={page.title} />
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                    <Divider />
                    <ListItemButton color="inherit" onClick={handleLogout}>Sign Out</ListItemButton>
                </Box>
            </Drawer>
        </>
    );
}


export default MobileMenu;