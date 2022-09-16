import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { TiDeleteOutline } from "react-icons/ti";
import {BiEdit} from 'react-icons/bi'

import "./todoItem.css"

const hexGen = () => {
    return `#${Math.random().toString(16).slice(2,8)}`
}

const TodoItem = ({title,id,deleteFunc,editFunc}) => {
    const[colors,setColors] = useState(null)
    useEffect(()=>{
        setColors({primary:hexGen(),secondary:hexGen()})
    },[])
    return ( 
        <Box sx={[styles.todoDiv,{background:`linear-gradient(96deg, ${colors?.primary}  0%, ${colors?.secondary} 100%)`}]}>
            {title}
            <Box sx={{display:'flex',gap:'2px',fontSize:'16px'}}>
                <TiDeleteOutline className='cursor-pointer' onClick={()=>deleteFunc(id)} />
                <BiEdit className='cursor-pointer' onClick={()=>editFunc(id)} />
            </Box>
        </Box>
     );
}
 
const styles = {
    todoDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        p:1,
        borderRadius:1,
        alignItems: 'center',
        color:'#fff',
        fontSize:"14px",
        my:1
    }
}
export default TodoItem