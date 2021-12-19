import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../Button/Button';

import './NewsCard.css';

function NewsCard({ content }) {
  const { imageUrl, title } = content;
  return (
    <Card className='news-box my-3'>
      <Card.Img variant='top' src={imageUrl} alt={title} className='news-img' />
      {/* <Row>
        <Col md={3} sm={12} className='news-img--box'>
          <img src={imageUrl} alt={title} className='news-img' />
        </Col>
        <Col md={9} sm={12}>
          {' '}
          {title}
          <Button>READ MORE</Button>
        </Col>
      </Row> */}
    </Card>
  );
}

export default NewsCard;
