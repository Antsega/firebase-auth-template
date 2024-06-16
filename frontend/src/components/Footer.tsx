import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
    const theme = useTheme();
    return (
        <Box component="footer" sx={{ 
            py: 3, 
            justifyContent: 'center', 
            position: 'relative', 
            bottom: 0, 
            width: '100%', 
            left: 0,
            right: 0,
            margin: 'auto',
            boxSizing: 'border-box'
        }}>
            <Container>
                <Typography variant="body2" color={theme.palette.primary.main} align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://freetech.co">
                        FreeTech
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </Container>
        </Box>
    );
}
