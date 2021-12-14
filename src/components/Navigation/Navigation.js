import React from 'react';
import { Link } from 'react-router-dom';

import { BsHexagonHalf } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

function Navigation() {
  const menu = ['spacecraft', 'astronauts', 'news'];

  const generateMenu = () => {
    return menu.map((name, index) => {
      return (
        <Nav.Item key={index}>
          <Link to={`/${name}`}>{name}</Link>
        </Nav.Item>
      );
    });
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='#'>
            <BsHexagonHalf />
            COSMOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto nav-container'>{generateMenu()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
