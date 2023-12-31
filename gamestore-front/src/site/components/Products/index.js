import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
import CardProducts from '../CardProducts';

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/produtos`)
      setProducts(res.data);
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleDetail = (value) => {
    console.log(value);
    window.location.href = `/product/${value}`
  }


  const renderProducts = () => {
    if (products && products.length > 0) {
      return <CardProducts handleDetail={handleDetail} products={products} />
    }
    return <span style={{ marginTop: 30, color: '#FFF', fontSize: 22 }}>Nenhum produto encontrado :(</span>
  }

  return (
    <ThemeProvider theme={themeSite}>
      <span style={{ fontSize: 30, color: '#Fff', fontWeight: 'bold' }}>PRODUTOS</span>
      <div style={{ borderTop: '1px solid #f15a28', display: 'flex', justifyContent: 'center' }}>
        {renderProducts()}
      </div>
    </ThemeProvider>
  )
}

export default Products



