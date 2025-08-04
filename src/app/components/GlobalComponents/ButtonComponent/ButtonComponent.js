import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const ButtonComponent = ({ title, onClick, sx, search }) => {
    return (
        <>
        <div

        >
        <Button
          sx= { sx }
    onClick = { onClick }
        >
        { search && (<SearchIcon />)
} { title }
</Button>
    </div>
    </>
  )
}

export default ButtonComponent