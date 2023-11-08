import React from 'react'
import TextField from '@mui/material/TextField';
const InputAdmin = ({ label, placeholder, setText }) => {
    return (
        <div>
            <TextField
                label={label}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                style={{ backgroundColor: '#FFF' }}
            />
        </div>
    )
}

export default InputAdmin


