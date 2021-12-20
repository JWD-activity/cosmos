import React from 'react';
import { useLocation } from 'react-router-dom';

import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import { FaUserAstronaut } from 'react-icons/fa';
import { FcWikipedia } from 'react-icons/fc';

import './IconButton.css';

function IconButton({ type }) {
  let icon;
  const location = useLocation();
  const { pathname } = location;

  if (type === 'wiki') icon = <FcWikipedia />;
  if (type === 'next') icon = <BsFillArrowRightSquareFill />;
  if (type === 'prev') icon = <BsFillArrowLeftSquareFill />;
  if (type === 'goback') {
    if (pathname.includes('spacecraft')) {
      icon = (
        <span className='btn-goback'>
          <IoIosRocket />
          GO BACK TO SPACECRAFT
        </span>
      );
    }

    if (pathname.includes('astronauts')) {
      icon = (
        <span className='btn-goback'>
          <FaUserAstronaut />
          GO BACK TO ASTRONAUTS
        </span>
      );
    }
  }

  return (
    <button className='btn-icon' type='button'>
      {icon}
    </button>
  );
}

export default IconButton;
