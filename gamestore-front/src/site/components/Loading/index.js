import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { themeSite } from '../../../theme';

import { ThemeProvider } from '@mui/material/styles';

export default function LoadingSite({ marginTop }) {
    return (
        <ThemeProvider theme={themeSite}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: marginTop ? `${marginTop}%`: '0' }}>
                <CircularProgress color='secondary' />
            </Box>
        </ThemeProvider>
    );
}