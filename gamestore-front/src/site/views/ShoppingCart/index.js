import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { themeSite } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import GamesList from '../../components/GamesList';
import Button from '@mui/material/Button'

const ShoppingCart = () => {

    const [ itensCarrinho, setItensCarrinho ] = useState([])

    useEffect(() => {
        getItens();
    }, []); // Isso garante que o useEffect seja chamado apenas na montagem inicial

    useEffect(() => {
        // Esta função será acionada toda vez que itensCarrinho for alterado
        sessionStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    }, [itensCarrinho]);

    const getItens = async () => {
        const storedItens = JSON.parse(await sessionStorage.getItem('itensCarrinho'))
        setItensCarrinho(storedItens)
    }


    const handleBuy = () => {
        sessionStorage.removeItem('itensCarrinho')
        window.location.href = '/'
    }

    const handleRemoveItem = (value) => {
        const updatedItens = itensCarrinho.filter((item) => item !== value);
        setItensCarrinho(updatedItens);
    }

    const renderButtonBuy = () => {
        if (itensCarrinho?.length !== 0) return  <Button variant="contained" color='secondary' style={{ marginTop: 20 }} onClick={() => handleBuy()}>Finalizar pagamento</Button>
    }


  return (
    <ThemeProvider theme={themeSite}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#181818', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{ width: '70%' }}>
                <Header />
                <GamesList />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <span style={{ fontSize: 46, color: '#FFF' }}>Carrinho de compras</span>
                </div>
                <div style={{ display:'flex', flexDirection: 'column', backgroundColor: '#FFF', borderRadius: 8, marginTop: 25, paddingBottom: 25}}>
                    {console.log(itensCarrinho)}
                    {itensCarrinho?.length !== 0 && itensCarrinho?.map((value, i) => (
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: 35, borderRadius: 5, fontSize: 20, fontWeight: 'bold'  }}>
                            <img src={value.product.image} alt={value.product.description} width={50} height={50} />
                            <span>{value.product.name}</span>     
                            <span style={{ color: '#f15a28'}}>R$ {value.product.price}</span>  
                            <Button variant="contained" onClick={() => handleRemoveItem(value)}>Remover</Button>  
                        </div>
                    ))}
                     {itensCarrinho?.length === 0 && <span style={{ textAlign: 'center', marginTop: 20, fontSize: 32, fontWeight: 'bold' }}>Seu carrinho está vazio :(</span>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                    <Button variant="contained" color='white'  style={{ marginTop: 20, marginRight: 50 }} onClick={() => window.location.href = '/'}>Continuar comprando</Button>
                    {renderButtonBuy()}
                </div>
            </div>
    </div>
  </ThemeProvider>
  )
}

export default ShoppingCart


