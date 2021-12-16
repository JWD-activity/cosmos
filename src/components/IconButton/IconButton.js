import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import './IconButton.css';

function IconButton({ type }) {
  let icon;
  if (type === 'next') icon = <BsFillArrowRightSquareFill />;
  if (type === 'prev') icon = <BsFillArrowLeftSquareFill />;
  if (type === 'goback') icon = <BsCardList />;

  return (
    <button className='btn-icon' type='button'>
      {icon}
    </button>
  );
}

export default IconButton;
