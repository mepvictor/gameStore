import * as React from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';

export default function InputSearch() {
  return (
    <ThemeProvider theme={themeSite}>
        <div style={{ display: 'flex', flexDirection: 'row', width: 250}}>
            <Input style={{ color: '#FFF' }} color='secondary' placeholder='O que você procura?' />
            <IconButton style={{ color: '#FFF' }}  type="button" aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    </ThemeProvider>
  );
}