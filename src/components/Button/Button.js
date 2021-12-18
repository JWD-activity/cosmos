import React from 'react';
import './Button.css';

function Button({ children, clickHandler }) {
  return (
    <button className='btn-gradient' onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
