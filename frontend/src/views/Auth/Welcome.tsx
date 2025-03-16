import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ButtonAppBar from './Login/components/welcomecomponents/navbar';

const Welcome: React.FC = () => {
  useEffect(() => {
    console.log('Attempting to load image from:', '/images/AlbertWhisker.png');
  }, []);

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Website
          </Typography>
          <img 
            src="/images/AlbertWhisker.png"
            alt="Albert Whisker" 
            style={{ width: '100%', maxWidth: '600px', height: 'auto', margin: '20px 0' }}
            onError={(e) => {
              console.error('Image failed to load:', e.currentTarget.src);
            }}
            onLoad={() => {
              console.log('Image loaded successfully');
            }}
          />
          <Typography variant="h6" paragraph>
            This is the welcome page of my website. Here you can find various sections about my interests, projects, and more.
          </Typography>
          <Typography variant="h6" paragraph>
            boobap
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Welcome;
