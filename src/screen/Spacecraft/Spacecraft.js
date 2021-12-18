import React from 'react';

import CardCarousel from '../../components/CardCarousel/CardCarousel.js';

import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import './Spacecraft.css';

function Spacecraft() {
  const error = useSelector((state) => state.spacecraft.error);

  return (
    <main className='position-relative'>
      <Container className='spacecraft-container py-3'>
        <Row className='flex-column pt-5'>
          <Col className='spacecraft-heading'>
            <h1>Spacecraft</h1>
            <h2>Explore the spacecraft we use to stay in orbit.</h2>
          </Col>
          <Col>
            <Row className='position-relative'>
              {error ? (
                <MessageAlert type='error' message={error} />
              ) : (
                <CardCarousel />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Spacecraft;
