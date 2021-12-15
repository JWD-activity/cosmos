import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SummaryCard from '../../components/SummaryCard/SummaryCard';
import './Spacecraft.css';

function Spacecraft() {
  return (
    <main className='position-relative'>
      <Container className='spacecraft-container'>
        <Row className='flex-column'>
          <Col>
            <h1>Spacecraft</h1>
            <h2>Explore the spacecraft we use to stay in orbit.</h2>
          </Col>
          <Col>
            <Row>
              <Col lg={4} md={6} sm={12} className='px-3 my-5'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-5'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-5'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-5'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-5'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-2 my-5'>
                <SummaryCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Spacecraft;
