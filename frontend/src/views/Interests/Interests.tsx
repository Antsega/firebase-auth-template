import React from 'react';
import { Container, Typography, Paper, Box, Grid, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonAppBar from '../Auth/Login/components/welcome components/navbar';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

interface NavigationButton {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  items: Array<{ text: string }>;
}

const NAVIGATION_BUTTONS: NavigationButton[] = [
  {
    label: 'Anime Page',
    path: '/interests/anime',
    icon: <LiveTvIcon />,
  },
  {
    label: 'Games Page',
    path: '/games',
    icon: <SportsEsportsIcon />,
  },
  {
    label: 'Tier Lists',
    path: '/interests/tier-lists',
    icon: <FormatListBulletedIcon />,
  },
];

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    {React.cloneElement(icon as React.ReactElement, { sx: { fontSize: 30, color: 'red', mr: 2 } })}
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  </Box>
);

const InterestSection: React.FC<SectionProps> = ({ title, icon, items }) => {
  return (
    <Grid item>
      <SectionHeader icon={icon} title={title} />
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

const Interests: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={4} direction="column">
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  My Interests
                </Typography>
              </Grid>

              {/* Navigation Buttons */}
              <Grid item container spacing={2} justifyContent="center">
                {NAVIGATION_BUTTONS.map((button, index) => (
                  <Grid item key={button.path}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={button.icon}
                      onClick={() => navigate(button.path)}
                      sx={{ mr: index !== NAVIGATION_BUTTONS.length - 1 ? 2 : 0 }}
                    >
                      {button.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              {/* Anime Section */}
              <InterestSection
                title="Best Anime"
                icon={<LiveTvIcon />}
                items={[
                  { text: "1. " },
                  { text: "2. " },
                  { text: "3. " },
                  { text: "4. " },
                  { text: "5. " },
                ]}
              />

              <Divider sx={{ my: 2 }} />

              {/* Games Section */}
              <InterestSection
                title="Best Games"
                icon={<VideogameAssetIcon />}
                items={[
                  { text: "1. " },
                  { text: "2. " },
                  { text: "3. " },
                  { text: "4. " },
                  { text: "5. " },
                ]}
              />

              <Divider sx={{ my: 2 }} />

              {/* Tier Lists Section */}
              <InterestSection
                title="Tier Lists"
                icon={<FormatListBulletedIcon />}
                items={[
                  { text: "• Best anime" },
                  { text: "• Best games" },
                  { text: "• Tier lists" },
                  { text: "• Random stuff" },
                ]}
              />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Interests; 