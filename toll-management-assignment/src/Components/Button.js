import React from 'react';
import './Button.css';

function Button({buttonName}) {
  return (
    <div className='buttonBody'>
        <h4>{buttonName}</h4>
    </div>
  )
}

export default Button;