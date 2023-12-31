import React from 'react';
import { Grid, Card } from '@mui/material';
import Button from '@mui/material/Button'

export default function CardProducts ({ handleDetail, products }) {

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'flex-start'}}>
        {products.map((p, i) => (
          <Grid item lg={4} key={i}>
            <Card sx={{ maxWidth: 300, height: 220 }} key={i} style={{ display: 'flex', flex: 1, flexDirection: 'row', textAlign: 'center', alignItems: 'center', backgroundColor: '#FFF', padding: '0px 50px', borderRadius: 5, margin: 15}}>
                <div style={{  marginLeft: -30}}>
                  <img src={p.product_image} alt={p.product_desc} width={120} height={120} />
                </div>
                <div style={{  display: 'flex', marginLeft: 50 , flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 18, color: '#181818' }}>{p.product_name}</span>
                  <span style={{ fontSize: 30, fontWeight: 'bold', color: '#181818', marginTop: 20 }}>R$ {p.product_price}</span>
                  <Button variant="contained" color='secondary' style={{ marginTop: 20 }} onClick={() => handleDetail(p._id.$oid)}>Ver detalhes</Button>
                </div>  
            </Card>
          </Grid>

        ))}
    </Grid>
  );
}