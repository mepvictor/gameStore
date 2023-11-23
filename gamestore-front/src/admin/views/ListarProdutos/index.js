import React, { useState, useEffect } from 'react'
import CardProduct from '../../components/CardProduct';
import LoadingAdmin from '../../components/Loading'
import DrawerPrincipal from '../../components/DrawerAdmin';
const Listar = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Computador',
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

  const handleDelete = (value) => {
    console.log(value)
  }

  const handleChange = (value) => {
    console.log(value)
    window.location.href = `/admin/alterar/${value.id}`
  }

  const renderContent = () => {
    if (loading) return <LoadingAdmin />
    return renderProducts()
  }

  const renderProducts = () => {
    if (products && products.length > 0) {
      return <CardProduct handleChange={handleChange} products={products} handleDelete={handleDelete} />
    }
  }

  return <DrawerPrincipal  content={renderContent()} />
}

export default Listar


