import React from 'react';
import { Container, Box, CircularProgress, Typography } from '@mui/material';


export default function IsLoading() {

    return (
        <Container maxWidth="xl" style={{ height: '100vh' }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
            >
                <Typography sx={{ margin: 5 }}>
                    Loading...
                </Typography>
                <CircularProgress />
            </Box>
        </Container>
    );
};