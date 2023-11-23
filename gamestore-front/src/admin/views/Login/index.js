import React, { useState, useEffect } from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const handleLogin = async () => {
    try {

      const res = await axios.post(`http://127.0.0.1:5000/api/admin/login`, { username: user, senha: password })

      if (res) {

        sessionStorage.setItem("tokenAdmin", JSON.stringify('tokenAdmin'))
        window.location.href = '/admin/produtos'
      }

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dcdcdc', minHeight: '100vh', flexDirection: 'column' }}>
      <h1>GameStore</h1>
      <div style={{ backgroundColor: '#fff', padding: 50, width: 300, height: 200, borderRadius: 10, flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
        <Input
          id="outlined-required"
          label="Usuário"
          placeholder='Insira seu usuário'
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          id="outlined-adornment-password"
          type='password'
          label="Senha"
          placeholder='Insira sua senha'
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 30 }}
        />
        <Button variant="contained" onClick={() => handleLogin()} style={{ marginTop: 30 }}>Login</Button>
      </div>
    </div>
  )
}

export default Login


