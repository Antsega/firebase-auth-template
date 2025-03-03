import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import ButtonAppBar from '../Auth/Login/components/welcome components/navbar';
import PersonIcon from '@mui/icons-material/Person';

const About: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item>
                <PersonIcon sx={{ fontSize: 60, color: 'red' }} />
              </Grid>
              
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  About Me
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" align="center" paragraph>
                  This page is here to document my journey with creating a website. You can find coding, anime, games and many more of my interests here.
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" paragraph>
                  First off, I'm 24 years old, just getting started with coding and this is my first website. Not sure exactly what I'll use this for yet, but for now I guess I'll just put some random stuff here.
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                  Maybe I'll link some things that I like here as tier lists or 
                </Typography>
                <Typography variant="body1" paragraph>
                  • Best anime<br />
                  • Best games<br />
                  • Tier lists<br />
                  • Cookie Run Kingdom stuff<br />
                  • (dunno yet)
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default About; 