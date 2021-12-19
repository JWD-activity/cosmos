import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../../components/Main/Main';

import './Main.css';

function Main({ children }) {
  const location = useLocation();
  const { pathname } = location;

  if (pathname === '/' || pathname.includes('spacecraft')) {
    return (
      <main className='position-relative'>
        <Container className='main-container'>{children}</Container>
      </main>
    );
  } else {
    return (
      <main>
        <Container>{children}</Container>
      </main>
    );
  }
}

export default Main;
