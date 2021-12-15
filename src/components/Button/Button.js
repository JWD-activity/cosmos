import React from 'react';
import './Button.css';

function Button({ children }) {
  return <button className='btn-gradient'>{children}</button>;
}

export default Button;
