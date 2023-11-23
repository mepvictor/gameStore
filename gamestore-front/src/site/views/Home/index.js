import React, { useState } from 'react'
import Header from '../../components/Header'
import GamesList from '../../components/GamesList';
import PromotionMonth from '../../components/MonthPromotion';
import Products from '../../components/Products';
import LoadingSite from '../../components/Loading';
import Footer from '../../components/Footer';
const Home = () => {
  const [ loading, setLoading ] = useState(false)

  const renderContent = () => {
    if (loading) return <LoadingSite marginTop={25} />

    return (
      <>
        <div style={{ borderBottom: '1px solid white' }}></div>
        <GamesList />
        <PromotionMonth />
        <div style={{ marginTop: 50 }}></div>
        <Products />
        <Footer />
      </>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#181818', flexDirection: 'column', minHeight: '100vh'}}>
      <div style={{ width: '70%' }}>
        <Header />
        {renderContent()}       
        </div>
    </div>
  )
}

export default Home


