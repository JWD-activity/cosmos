import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SummaryCard from '../../components/SummaryCard/SummaryCard.js';
import ImgCard from '../../components/ImgCard/ImgCard.js';

import './Home.css';

function Home() {
  return (
    <main className='position-relative'>
      <Container className='home-container'>
        <Row>
          <Col lg={4} md={12} className='p-5'>
            <Link to='/spacecraft'>
              <ImgCard
                name='spacecraft'
                title='Spacecraft'
                desc='Explore the spacecraft we use to stay in orbit.'
              />
            </Link>
          </Col>
          <Col lg={4} md={12} className='p-5'>
            <Link to='/astronauts'>
              <ImgCard
                name='astronauts'
                title='Astronauts'
                desc='Meet the exceptional people that have ventured into space.'
              />
            </Link>
          </Col>
          <Col lg={4} md={12} className='p-5'>
            <Link to='/news'>
              <ImgCard
                name='news'
                title='News'
                desc='Check the latest spaceflight-related news.'
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
