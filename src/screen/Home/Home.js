import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SummaryCard from '../../components/SummaryCard/SummaryCard.js';
import ImgCard from '../../components/ImgCard/ImgCard.js';
import './Home.css';

function Home() {
  return (
    <main className='position-relative'>
      <Container className='home-container'>
        <Row>
          <Col lg={4} md={12} className='p-5'>
            <ImgCard
              name='spacecraft'
              title='Spacecraft'
              desc='Explore the spacecraft we use to stay in orbit.'
            />
          </Col>
          <Col lg={4} md={12} className='p-5'>
            <ImgCard
              name='astronauts'
              title='Astronauts'
              desc='Meet the exceptional people that have ventured into space.'
            />
          </Col>
          <Col lg={4} md={12} className='p-5'>
            <ImgCard
              name='news'
              title='News'
              desc='Check the latest spaceflight-related news.'
            />
          </Col>
        </Row>

        {/* <SummaryCard /> */}
      </Container>
    </main>
  );
}

export default Home;
