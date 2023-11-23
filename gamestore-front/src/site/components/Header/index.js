import React, { useEffect, useState } from 'react'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
import InputSearch from '../InputSearch';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {

    const [ itensCarrinho, setItensCarrinho ] = useState([])

    useEffect(() => {
        getItens()
    }, [ itensCarrinho ])


    const getItens = async () => {
        setItensCarrinho(JSON.parse(await sessionStorage.getItem('itensCarrinho')))
    }



    const isAuth = () => {
        var isValid = sessionStorage.getItem("tokenSite");
        return !!isValid
    }

    const goToMyAccount = () => {
        if (isAuth()) {
            window.location.href = '/myaccount'
        } else {
            window.location.href = '/login'
        }
    }

    const goToCart = () => {
        if (isAuth()) {
            window.location.href = '/cart'
        } else {
            window.location.href = '/login'
        }
    }

    const renderNumberCartItens = () => {
        if (isAuth()) {
            return (
                <div style={{ border: '1px solid #f15a28', borderRadius: 100, marginLeft: -5, marginTop: 35, backgroundColor: '#f15a28', width: 20, height: 20, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <span style={{ color: '#FFF' }}>{(itensCarrinho && itensCarrinho.length) || 0}</span>
                </div>
            )
        }
    }
    

    return (
        <ThemeProvider theme={themeSite}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 30, alignItems: 'center', marginBottom: 30}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
                    <HeadphonesIcon color='white' fontSize='large' />
                    <span style={{ fontSize: 20, marginLeft: 5, color: '#FFF' }}>SAC</span>
                    <KeyboardArrowDownIcon color='white' />
                </div>
                
                <InputSearch />
                <a href='/' style={{ marginLeft: '10%', marginRight: '8%', fontSize: 44 ,textDecoration: 'none' }}><span style={{ color: '#FFF' }}>Game</span><span style={{ color: '#f15a28' }}>Store</span></a>
                <div style={{ backgroundColor: '#f15a28', color: '#FFF', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', padding: 15}}>
                    <span style={{ textAlign: 'center' }}>
                        FRETE GRÁTIS<br/>
                        PARA TODO O BRASIL*
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
                    <Button variant="text" onClick={() => goToMyAccount()}>
                        <ExitToAppIcon color='white' fontSize='large' />
                        <span style={{ fontSize: 14, color: '#fff', marginLeft: 5 }}>
                            {isAuth() ? 'Minha conta' : 'Entrar'}
                        </span>
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
                <Button variant="text" onClick={() => goToCart()}>
                    <ShoppingBagOutlinedIcon color='white' fontSize='large' />
                    {renderNumberCartItens()}
                </Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header



