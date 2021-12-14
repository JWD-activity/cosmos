import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='#'>COSMOS</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Item>
                <Nav.Link eventKey='1' href='#/home'>
                  Spacecraft
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='2' title='Item'>
                  Astronauts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='3' disabled>
                  News
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
