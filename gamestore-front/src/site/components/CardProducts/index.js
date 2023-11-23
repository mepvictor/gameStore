import React from 'react';
import { Grid, Card } from '@mui/material';
import Button from '@mui/material/Button'

export default function CardProducts ({ handleDetail, products }) {

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'flex-start'}}>
        {products.map((p, i) => (
            <Card sx={{ width: 100, height: 220 }} key={i} style={{ display: 'flex', flex: 1, flexDirection: 'row', textAlign: 'center', alignItems: 'center', backgroundColor: '#FFF', padding: '0px 50px', borderRadius: 5, margin: 15}}>
                <div style={{  marginLeft: -30}}>
                  <img src={p.image} alt={p.description} width={120} height={120} />
                </div>
                <div style={{  display: 'flex', marginLeft: 50 , flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 18, color: '#181818' }}>{p.name}</span>
                  <span style={{ fontSize: 30, fontWeight: 'bold', color: '#181818', marginTop: 20 }}>R$ {p.price}</span>
                  <Button variant="contained" color='secondary' style={{ marginTop: 20 }} onClick={() => handleDetail(p)}>Ver detalhes</Button>
                </div>  
            </Card>

        ))}
    </Grid>
  );
}