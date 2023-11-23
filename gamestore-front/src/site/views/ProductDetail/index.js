import React from 'react'
import Header from '../../components/Header'
import { themeSite } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import GamesList from '../../components/GamesList';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import { ToastContainer,toast } from 'react-toastify';
const ProductDetail = () => {

  const { id } = useParams();

  const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid
    }

  const produto = {
    id: 1,
    name: 'Immortal Realms: Vampire Wars - Switch',
    description: 'Esse é um computador de última geração',
    price: 2500,
    image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
  }

  const calculatePrice = () => {
    return `${produto.price / 10},00`
  }

  const calculateDiscount = () => {
    const discount = produto.price * 0.05

    return `${produto.price - discount},00`
  }

  const handleAddCart = () => {
    let itens = JSON.parse(sessionStorage.getItem('itensCarrinho'))
    if (itens) {
        itens.push(produto)
    } else {
        itens = []
        itens.push(produto)
    }
    sessionStorage.setItem("itensCarrinho", JSON.stringify(itens))
    toast("Wow so easy!")
    window.location.href = '/cart'

  }

  return (
    <ThemeProvider theme={themeSite}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#181818', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{ width: '70%' }}>
                <Header />
                <div style={{ borderBottom: '1px solid white' }}></div>
                <GamesList />
     
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: 50, marginTop: 10 }}>
                            <img  src={produto.image} alt={produto.description} width={100} height={100} />
                            <img style={{ marginTop: 15 }} src={produto.image} alt={produto.description} width={100} height={100} />
                            <img style={{ marginTop: 15 }} src={produto.image} alt={produto.description} width={100} height={100} />
                            <img style={{ marginTop: 15 }} src={produto.image} alt={produto.description} width={100} height={100} />
                        </div>
                        <img src={produto.image} alt={produto.description} width={500} height={500} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 80 }}>
                        <span style={{ color: '#FFF', fontSize: 28, fontWeight: 'bold' }}>{produto.name}</span>
                        <span style={{ color: '#f15a28', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>Por: R$ {produto.price},00</span>
                        <span style={{ color: '#FFF', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>Ou 10x de R$ {calculatePrice()} sem tarifa</span>
                        <span style={{ color: '#4CBD49', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>R${calculateDiscount()} 
                            <span style={{ color: '#FFF', fontSize: 22, fontWeight: 'bold' }}> à vista com desconto</span>
                        </span>     
                        <Button disabled={!isAuth()} onClick={() => handleAddCart()} variant="contained" size='large' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#4CBD49', marginTop: 50 }}>
                        {isAuth() ? 'Adicionar ao carrinho' : 'Faça login para comprar'}
                        </Button>
                    </div>

                </div>
                <div style={{ marginTop: 50 }}></div>
                <span style={{ fontSize: 30, color: '#Fff', fontWeight: 'bold', marginTop: 50 }}>DESCRIÇÃO GERAL</span>
                <div style={{ borderTop: '1px solid #f15a28', display: 'flex', justifyContent: 'flex-start'}}>
                    <span style={{ color: '#FFF', fontSize: 24, marginTop: 30 }}>{produto.description}</span>
                </div>
                <Footer />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  />
            </div>
    </div>
  </ThemeProvider>
  )
}

export default ProductDetail


