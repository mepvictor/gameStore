import React from 'react'
import Header from '../../components/Header'
import Button from '@mui/material/Button';
import { themeSite } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

const MyAccount = () => {

    const handleLogout = () => {
        sessionStorage.removeItem('tokenSite')
        window.location.href = '/'
    }

  return (
    <ThemeProvider theme={themeSite}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#181818', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{ width: '70%' }}>
                <Header />

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <span style={{ fontSize: 46, color: '#FFF' }}>Histórico de compras</span>
                </div>
                <Button variant="contained" color='secondary' style={{ marginTop: 20 }} onClick={() => handleLogout()}>Sair</Button>
                
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span style={{ color: '#f15a28'}}>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span style={{ color: '#f15a28'}}>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span style={{ color: '#f15a28'}}>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span style={{ color: '#f15a28'}}>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
            </div>
    </div>
  </ThemeProvider>
  )
}

export default MyAccount


