import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { themeSite } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import GamesList from '../../components/GamesList';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
const ProductDetail = () => {

  const { id } = useParams();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid
  }

  useEffect(() => {
    getProductDetails();
  }, [])


  const getProductDetails = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/produtos/${id}`)
      setPrice(res.data.product_price);
      setImage(res.data.product_image);
      setDescription(res.data.product_desc);
      setName(res.data.product_name);
    } catch (error) {
      console.log(error)
    }

  }

  const calculatePrice = () => {
    return `${Math.round(price / 10)}.00`
  }

  const calculateDiscount = () => {
    console.log(price);
    const discount = price * 0.05
    console.log(discount);
    return `${Math.round(price - discount)}.00`
  }

  const handleAddCart = () => {
    let itens = JSON.parse(sessionStorage.getItem('itensCarrinho'))
    if (itens) {
      itens.push({ product: { price: price, image: image, description: description, name: name } })
    } else {
      itens = []
      itens.push({ product: { price: price, image: image, description: description, name: name } })
    }
    sessionStorage.setItem("itensCarrinho", JSON.stringify(itens))
    window.location.href = '/cart'
  }

  const renderContent = () => {
    if (name) {
      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: 50, marginTop: 10 }}>
                <img src={image} alt={description} width={100} height={100} />
                <img style={{ marginTop: 15 }} src={image} alt={description} width={100} height={100} />
                <img style={{ marginTop: 15 }} src={image} alt={description} width={100} height={100} />
                <img style={{ marginTop: 15 }} src={image} alt={description} width={100} height={100} />
              </div>
              <img src={image} alt={description} width={500} height={500} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 80 }}>
              <span style={{ color: '#FFF', fontSize: 28, fontWeight: 'bold' }}>{name}</span>
              <span style={{ color: '#f15a28', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>Por: R$ {price}</span>
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
          <div style={{ borderTop: '1px solid #f15a28', display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ color: '#FFF', fontSize: 24, marginTop: 30 }}>{description}</span>
          </div>
        </div>
      )
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span style={{ marginTop: 30, color: '#FFF', fontSize: 22, textAlign: 'center' }}>Produto não encontrado :(</span>
      </div>
    )
  }

  return (
    <ThemeProvider theme={themeSite}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#181818', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ width: '70%' }}>
          <Header />
          <div style={{ borderBottom: '1px solid white' }}></div>
          <GamesList />
          {renderContent()}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default ProductDetail


