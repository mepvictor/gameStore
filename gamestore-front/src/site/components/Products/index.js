import React, { useState } from 'react'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
import CardProducts from '../CardProducts';

const Products = () => {
    

    const [products, setProducts] = useState([
        {
          id: 1,
          name: 'Immortal Realms: Vampire Wars - Switch',
          description: 'Esse é um computador de última geração',
          price: 2500,
          image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        },
        {
          id: 2,
          name: 'Vídeo game',
          description: 'Testando apenas',
          price: 2500,
          image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        },
        {
          id: 3,
          name: 'Vídeo game',
          description: 'Testando apenas',
          price: 2500,
          image: 'https://media.gettyimages.com/id/1240444255/pt/foto/a-general-view-of-the-uefa-champions-league-trophy-ahead-of-the-uefa-champions-league-semi.jpg?s=612x612&w=gi&k=20&c=GwLZiLHbRCzn0BilNlJaGsfNGnPsehFDbUhgYM3lXUo='
        }
      ])

    
      const handleDetail = (value) => {
        window.location.href = `/product/${value.id}`
      }
    

      const renderProducts = () => {
        if (products && products.length > 0) {
          return <CardProducts handleDetail={handleDetail} products={products} />
        }
      }

    return (
        <ThemeProvider theme={themeSite}>
            <span style={{ fontSize: 30, color: '#Fff', fontWeight: 'bold'}}>PRODUTOS</span>
            <div style={{ borderTop: '1px solid #f15a28', display: 'flex', justifyContent: 'center' }}>
                {renderProducts()}
            </div>
            
        </ThemeProvider>
    )
}

export default Products



