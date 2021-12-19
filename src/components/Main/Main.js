import React from 'react';

import Container from 'react-bootstrap/Container';
import '../../components/Main/Main';

import './Main.css';

function Main({ children }) {
  return (
    <main className='position-relative'>
      <Container className='main-container'>{children}</Container>
    </main>
  );
}

export default Main;
