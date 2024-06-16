import React, { useEffect, useState } from 'react';
import { useTheme, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { IsLoading } from './';
import { AuthLayout } from '../layouts';

export default function NotFound() {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState('/');
  const { isAuthenticated, isLoading } = useAuth();
  const theme = useTheme();

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectTo('/login');
    } else {
      setRedirectTo('/');
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <AuthLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: theme.spacing(2),
          textAlign: 'center',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sorry, we couldn't find the page you're looking for.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(redirectTo)}
          sx={{ mt: theme.spacing(2) }}
        >
          Go to Home
        </Button>
      </Box>
    </AuthLayout>
  );
}
