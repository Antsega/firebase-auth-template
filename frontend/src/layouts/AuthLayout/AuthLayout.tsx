
import React from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { logoNoBackground, authBackground } from '../../assets';
import Footer from '../../components/Footer';

interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({
    children,
}: Props): JSX.Element => {

    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundImage: `url(${authBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                // top: 0,
                // left: 0,
                // zIndex: -1
            }}>
            <Container
                sx={{
                    backgroundColor: theme.palette.primary.light,
                    borderRadius: theme.shape.borderRadius,
                    paddingBottom: theme.spacing(2.5),
                }}
                component="main"
                maxWidth="xs">
                <Box sx={{
                    marginTop: theme.spacing(10),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box
                        component="img"
                        src={logoNoBackground}
                        sx={{
                            height: '60px',
                            width: '120px',
                            backgroundColor: 'white',
                            marginTop: theme.spacing(2),
                            padding: theme.spacing(2.5),
                            borderRadius: theme.shape.borderRadius
                        }} />
                    <main >
                        {children}
                    </main>
                </Box>
            </Container>

            <Footer />

        </Container>
    );
}
export default AuthLayout;