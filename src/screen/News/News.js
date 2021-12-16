import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from '../../components/NewsCard/NewsCard';
import Filter from '../../components/Filter/Filter';

function News() {
  return (
    <main className='position-relative'>
      <Container className='news-container'>
        <Row className='my-3 pt-4'>
          <h1>News</h1>
          <h2>Check the latest spaceflight-related news.</h2>
          <Col md={6} sm={12}></Col>
          <Col md={6} sm={12}>
            <Filter />
          </Col>
        </Row>
        <Row className='px-2'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Row>
      </Container>
    </main>
  );
}

export default News;
