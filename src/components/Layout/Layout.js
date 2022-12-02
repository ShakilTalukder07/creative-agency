import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Layout;