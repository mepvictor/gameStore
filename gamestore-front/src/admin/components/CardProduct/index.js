import React from 'react';
import Button from '@mui/material/Button'
import { Grid, Card } from '@mui/material';

export default function CardProduct ({ handleChange, products, handleDelete }) {

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'flex-start'}}>
        {products.map((p, i) => (
            <Card sx={{ maxWidth: 500, height: 400 }} key={i} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: '#FFF', padding: '0px 50px', borderRadius: 10, margin: 15}}>
                <h1>{p.name}</h1>
                <img src={p.image} alt={p.description} width={100} height={100} />
                <h4>{p.description}</h4>
                <Button variant="contained" onClick={() => handleChange(p)}>Alterar</Button>
                <Button variant="text" onClick={() => handleDelete(p)} style={{ marginTop: 15 }}>Deletar</Button>
            </Card>

        ))}
    </Grid>
  );
}