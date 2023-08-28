import React from 'react';
import Button from '@mui/material/Button';


const CustomButton = ({children, textColor}) => {

  console.log(children, textColor)
  return (
    <div className='custom-btn'>
      <Button color={textColor} variant={'contained'} >{children}</Button>
    </div>
  )
}

export default CustomButton;
