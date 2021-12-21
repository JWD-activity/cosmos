import React from 'react';
import { useLocation } from 'react-router-dom';

import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import { FaUserAstronaut } from 'react-icons/fa';
import { FcWikipedia } from 'react-icons/fc';
import { RiBookmark3Fill } from 'react-icons/ri';
import { RiBookmark3Line } from 'react-icons/ri';

import './IconButton.css';

function IconButton({ type, onClick }) {
  let icon;
  const location = useLocation();
  const { pathname } = location;
  const clickHanlder = () => {
    if (!onClick) return;
    onClick();
  };

  if (type === 'wiki') icon = <FcWikipedia />;
  if (type === 'next') icon = <BsFillArrowRightSquareFill />;
  if (type === 'prev') icon = <BsFillArrowLeftSquareFill />;
  if (type === 'addBookmark') icon = <RiBookmark3Fill />;
  if (type === 'removeBookmark') icon = <RiBookmark3Line />;
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
    <button className='btn-icon' type='button' onClick={clickHanlder}>
      {icon}
    </button>
  );
}

export default IconButton;
