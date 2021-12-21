import React from 'react';
import './BasicButton.css';

function BasicButton({ children }) {
  return <button className='btn-gradient'>{children}</button>;
}

export default BasicButton;
