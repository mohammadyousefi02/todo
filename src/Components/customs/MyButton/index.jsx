import React from 'react';

import { Button } from '@mui/material';


const MyButton = ({title,func}) => {
    return ( 
        <Button onClick={func} variant='contained' className='todo-btn'>{title}</Button>
     );
}
 
export default MyButton;