
import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

    const handleRegister = async () => {
        try {
            const res = await axios.put(`http://127.0.0.1:5000/api/produtos/${id}`, { product_name: name, product_desc: description, product_price: price, product_image: image })
            if (res) {
                window.location.href = '/admin/produtos'
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getProductDetails();
    }, [])


    const getProductDetails = async () => {
        const res = await axios.get(`http://127.0.0.1:5000/api/produtos/${id}`)
        setPrice(res.data.product_price);
        setImage(res.data.product_image);
        setDescription(res.data.product_desc);
        setName(res.data.product_name);
    }

    const renderContent = () => {
        return (
            <div>
                <h1>Alterar produto</h1>
                <Grid container direction="row" style={{ marginTop: 30 }}>
                    <Grid item lg={3}>
                        <InputAdmin
                            value={name}
                            label='Nome'
                            setText={setName}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            value={description}
                            label='Descrição'
                            setText={setDescription}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            value={price}
                            label='Preço'
                            setText={setPrice}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <InputAdmin
                            value={image}
                            label='Imagem'
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

    return <DrawerPrincipal content={renderContent()} />
}

export default Alterar


