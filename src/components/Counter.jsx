import React, { useState } from 'react'
import { Typography,Button } from '@mui/material'

const Counter = () => {
    var[count,setCount] = useState(0);
    const add = ()=>{  
        setCount(count+1)
    }
    const sub = ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <br /><br />
        <Typography variant="h3" >Count:{count}</Typography>
        <br /><br />
        <Button variant="contained" color="success" onClick={add}>+</Button>
        &nbsp; &nbsp;
        <Button variant="contained" color='error'onClick={sub}>-</Button>
    </div>
  )
}

export default Counter


