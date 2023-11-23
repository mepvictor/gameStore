import React, { useState, useEffect } from 'react'
import InputLogin from '../../components/Input'
import ButtonLogin from '../../components/Button'
const Login = () => {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    console.log(user)
    console.log(password)
  }, [user, password])


  const handleLogin = () => {
    sessionStorage.setItem("tokenSite", JSON.stringify('tokenSite'));
    window.location.href = '/'
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#181818', minHeight: '100vh', flexDirection: 'column' }}>
      <a href='/' style={{ fontSize: 44, textDecoration: 'none', marginBottom: 20 }}><span style={{ color: '#FFF' }}>Game</span><span style={{ color: '#f15a28' }}>Store</span></a>
      <div style={{ backgroundColor: '#fff', padding: 50, width: 300, height: 250, borderRadius: 10, flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
        <InputLogin
          label='Usuário'
          placeholder='Insira seu usuário'
          color='secondary'
          setText={setUser}
          variant="standard"
          style={{ marginTop: 20 }}
        />

        <InputLogin
          id="outlined-adornment-password"
          type='password'
          label='Senha'
          color='secondary'
          placeholder='Insira sua senha'
          setText={setPassword}
          variant="standard"
          style={{ marginTop: 20 }}
        />
        <ButtonLogin variant="contained" click={handleLogin} text='Login' style={{ marginTop: 30 }} />
      </div>
    </div>
  )
}

export default Login


