
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import InputAdmin from '../../components/InputAdmin';
import { useParams } from "react-router-dom";
import DrawerPrincipal from '../../components/DrawerAdmin';
const Alterar = () => {
    const [name, setName] = useState('')
    const { id } = useParams();
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleRegister = () => {
        console.log(name)
        console.log(price)
        console.log(description)
        console.log(image)
    }

    useEffect(() => {
        console.log(id)
    }, [])


    const renderContent = () => {
        return (
            <div>
                <h1>Alterar produto</h1>
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
                    <Button variant="contained" onClick={() => handleRegister()} style={{ marginTop: 30 }} size='large'>Alterar</Button>
                </div>
            </div>
        )
    }

    return <DrawerPrincipal  content={renderContent()} />
}

export default Alterar


