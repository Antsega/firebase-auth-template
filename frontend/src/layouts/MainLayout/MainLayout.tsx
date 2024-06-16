import React from 'react';

import Navbar from './components/NavBar';
import Footer from '../../components/Footer';
import { Box, Container } from '@mui/system';

interface Props {
    children: React.ReactNode;
}

const Main = ({
    children,
}: Props): JSX.Element => {

    return (
        <Box>
            <Navbar />
            <Container
                maxWidth="xl"
                sx={{ marginTop: 2 }}
            >
                <main >
                    {children}
                </main>
            </Container>
            <Footer />
        </Box>
    );
}
export default Main;