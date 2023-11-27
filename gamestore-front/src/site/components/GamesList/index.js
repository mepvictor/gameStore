import React from 'react'
import { themeSite } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamepadIcon from '@mui/icons-material/Gamepad';
import ComputerIcon from '@mui/icons-material/Computer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const GamesList = () => {

    const list = [
        {
            name: 'PS5',
            icon: <GamepadIcon color='white' fontSize='large' />
        },
        {
            name: 'SWITCH',
            icon: <VideogameAssetIcon color='white' fontSize='large' />
        },
        {
            name: 'XBOX ONE/SERIES',
            icon: <SportsEsportsIcon color='white' fontSize='large' />
        },
        {
            name: 'COMPUTADOR',
            icon: <ComputerIcon color='white' fontSize='large' />
        },
        {
            name: 'GIFT CARDS',
            icon: <CardGiftcardIcon color='white' fontSize='large' />
        }
    ]

    return (
        <ThemeProvider theme={themeSite}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
                {list.map((l, i) => (
                    <Button key={i} variant="text" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        {l.icon}
                        <span style={{ fontSize: 14, color: '#FFF' }}>
                            {l.name}
                        </span>
                    </Button>

                ))}
            </div>
        </ThemeProvider>
    )
}

export default GamesList



