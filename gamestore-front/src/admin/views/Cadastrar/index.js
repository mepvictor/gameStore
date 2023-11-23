
import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import InputAdmin from '../../components/InputAdmin';
import DrawerPrincipal from '../../components/DrawerAdmin';
const Cadastrar = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleRegister = async () => {
        try {
            const res = await axios.post(`http://127.0.0.1:5000/api/produtos`, {product_name: name, product_desc: description, product_price: price, product_image: image})
            if (res) {
                window.location.href = '/admin/produtos'
            }
        } catch (error) {
            console.log(error);
        }
    }

    const renderContent = () => {
        return (
            <div>
                <Grid container direction="row" style={{ marginTop: 30 }}>
                    <Grid item lg={3}>
                        <InputAdmin
                            label='Nome'
                            placeholder='Insira o nome do produto'
                            setText={setName}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            label='Descrição'
                            placeholder='Insira a descrição do produto'
                            setText={setDescription}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            label='Preço'
                            placeholder='Insira o preço do produto'
                            setText={setPrice}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            label='Imagem'
                            placeholder='Insira o link da imagem do produto'
                            setText={setImage}
                        />
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={() => handleRegister()} style={{ marginTop: 30 }} size='large'>Cadastrar</Button>
                </div>
            </div>)
    }

    return <DrawerPrincipal  content={renderContent()} />
}

export default Cadastrar


