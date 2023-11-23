import React from 'react'
import TextField from '@mui/material/TextField';
const InputAdmin = ({ label, placeholder, setText, value }) => {
    return (
        <div>
            <TextField
                value={value}
                label={label}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                style={{ backgroundColor: '#FFF' }}
            />
        </div>
    )
}

export default InputAdmin


