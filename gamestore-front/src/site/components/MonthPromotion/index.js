import React from 'react'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';

const PromotionMonth = () => {

    return (
        <ThemeProvider theme={themeSite}>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 100 }}>
                <span style={{ fontSize: 30, color: '#Fff', fontWeight: 'bold' }}>PROMOÇÃO DO MÊS</span>
                <div style={{ borderTop: '1px solid #f15a28', display: 'flex', justifyContent: 'center' }}>
                    <span style={{ marginTop: 30, color: '#FFF', fontSize: 22 }}>Nenhum produto encontrado :(</span>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default PromotionMonth



