import React from 'react';
import { Container, Typography, Grid, Paper, ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import ButtonAppBar from '../Auth/Login/components/welcome components/navbar';
import CollectionsIcon from '@mui/icons-material/Collections';

const itemData = [
  {
    img: '/images/image1.jpg',
    title: 'Image 1',
  },
  {
    img: '/images/image2.jpg',
    title: 'Image 2',
  },
  {
    img: '/images/image3.jpg',
    title: 'Image 3',
  },
];

const Gallery: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item>
                <CollectionsIcon sx={{ fontSize: 60, color: 'red' }} />
              </Grid>
              
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  My Gallery
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" align="center" paragraph>
                  something something picture here
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Gallery;

