import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import ButtonAppBar from './Login/components/welcome components/navbar';

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Have questions? We'd love to hear from you. Send us a message.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Your Message"
                id="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2,
                  backgroundColor: 'red',
                  '&:hover': {
                    backgroundColor: '#d32f2f'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
