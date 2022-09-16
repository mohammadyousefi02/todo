import { Input } from '@mui/material';
import React from 'react';

const MyInput = ({change,value}) => {
    return ( 
        <Input 
                autoFocus
                fullWidth
                disableUnderline={true}
                placeholder="Add a Todo"
                color='#fff'
                sx={styles.todoInput}
                className="todo-input"
                onChange={(e)=>change(e.target.value)}
                value={value}
                />
     );
}
 

const styles = {
    todoInput:{
        border:2,
        borderColor:'#6709FF',
        px:1,
        color:"white",
    }
}
export default MyInput;