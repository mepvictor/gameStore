import React from 'react'
import DrawerPrincipal from '../../components/DrawerAdmin';
const HistoricoVendas = () => {

    const renderContent = () => {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <span style={{ fontSize: 46, color: '#000' }}>Histórico de Vendas</span>
                </div>
           
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', 
                backgroundColor: '#FFF', width: '100%', height: 60, marginTop: 25, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                    <span>Immortal Realms: Vampire Wars - Switch</span>     
                    <span>R$ 2000,00</span>    
                    <span>Cartão de crédito</span>
                    <span>22/11/2023</span>   
                </div>  
            </>
        )
    }


  return <DrawerPrincipal  content={renderContent()} />
}

export default HistoricoVendas


