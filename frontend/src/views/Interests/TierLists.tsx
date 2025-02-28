import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import ButtonAppBar from '../Auth/Login/components/welcome components/navbar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const TierLists: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item>
                <FormatListBulletedIcon sx={{ fontSize: 60, color: 'red' }} />
              </Grid>
              
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  Tier Lists
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" align="center" paragraph>
                  My personal tier lists for various categories
                </Typography>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Categories
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Coming soon...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default TierLists; 