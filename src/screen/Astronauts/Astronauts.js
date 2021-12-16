import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SummaryCard from '../../components/SummaryCard/SummaryCard';

import './Astronauts.css';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';

function Astronauts() {
  return (
    <main className='position-relative'>
      <Container className='astronauts-container'>
        <Row className='flex-column'>
          <Col>
            <h1>Astronauts</h1>
            <h2>Meet the exceptional people that have ventured into space.</h2>
          </Col>
          <Col>
            <Row className='my-3'>
              <Col md={6} sm={12}>
                <Search />
              </Col>
              <Col md={6} sm={12}>
                <Filter />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-2 my-4'>
                <SummaryCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Astronauts;
