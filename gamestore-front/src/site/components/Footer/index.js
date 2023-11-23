import React from 'react'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';

const Footer = () => {
    return (
        <ThemeProvider theme={themeSite}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 150, marginBottom: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#f15a28' }}>ATENDIMENTO</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Assistência Técnica</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Empresa</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Como comprar</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Pagamento</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#f15a28' }}>ATENDIMENTO</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>(14) 99999-9999</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>(14) 99999-9999</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Via telegram</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#f15a28' }}>REDES SOCIAIS</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Facebook</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Instagram</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#f15a28' }}>FORMAS DE PAGAMENTO</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Cartão de crédito</span>
                    <span style={{ fontSize: 18, color: '#fff' }}>Cartão de débito</span>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Footer



