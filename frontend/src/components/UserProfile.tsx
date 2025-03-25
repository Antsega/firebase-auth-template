import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import ButtonAppBar from '../views/Auth/Login/components/welcomecomponents/navbar';

interface UserData {
  name: string;
  email: string;
  createdAt: string;
}

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData);
          } else {
            // If user document doesn't exist, create one
            const newUserData: UserData = {
              name: user.displayName || '',
              email: user.email || '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(doc(db, 'users', user.uid), newUserData);
            setUserData(newUserData);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                  User Profile
                </Typography>
              </Grid>

              {userData ? (
                <>
                  <Grid item>
                    <Typography variant="h6">
                      Name: {userData.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      Email: {userData.email}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      Member since: {new Date(userData.createdAt).toLocaleDateString()}
                    </Typography>
                  </Grid>
                </>
              ) : (
                <Grid item>
                  <Typography>Loading user data...</Typography>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default UserProfile; 