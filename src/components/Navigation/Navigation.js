import React from 'react';
import { NavLink } from 'react-router-dom';
import { MENU } from '../../utils/config';

import { BsHexagonHalf } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css';

function Navigation() {
  const generateMenu = () => {
    return MENU.map((name, index) => {
      return (
        <Nav.Item key={index}>
          <NavLink
            to={`/${name}`}
            className={({ isActive }) => (isActive ? 'active-menu' : '')}
          >
            {name}
          </NavLink>
        </Nav.Item>
      );
    });
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-menu' : '')}
            >
              <BsHexagonHalf />
              COSMOS
            </NavLink>
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
