import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import ButtonAppBar from '../Auth/Login/components/welcome components/navbar';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Anime: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item>
                <LiveTvIcon sx={{ fontSize: 60, color: 'red' }} />
              </Grid>
              
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  Anime
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" align="center" paragraph>
                  My favorite anime series and recommendations
                </Typography>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Top Picks
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

export default Anime; 