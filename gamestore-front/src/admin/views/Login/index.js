import React, { useState, useEffect } from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
const Login = () => {
    const [ user, setUser ] = useState() 
    const [ password, setPassword ] = useState()

    useEffect(() => {
        console.log(user)
        console.log(password)
      }, [ user, password ])


      const handleLogin = () => {
        window.location.href = '/admin/produtos'
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


