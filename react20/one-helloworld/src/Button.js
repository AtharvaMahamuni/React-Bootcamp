import React from 'react';
import "./style.css";

const Button = ({ title="Nothing" }) => (
    <div>
        <button className='button'>
            {title}
        </button>
    </div>
);

export default Button;