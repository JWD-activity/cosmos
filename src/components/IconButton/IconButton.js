import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import './IconButton.css';

function IconButton({ type }) {
  let icon;
  if (type === 'next') icon = <BsFillArrowRightSquareFill />;
  if (type === 'prev') icon = <BsFillArrowLeftSquareFill />;
  if (type === 'goback') icon = <span className='btn-goback'>GO BACK</span>;

  return (
    <button className='btn-icon' type='button'>
      {icon}
    </button>
  );
}

export default IconButton;
