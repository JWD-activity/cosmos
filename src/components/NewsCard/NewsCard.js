import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';

import './NewsCard.css';

function NewsCard() {
  return (
    <Card className='news-box my-3'>
      CONTETN
      <Col>
        <Button>READ MORE</Button>
      </Col>
    </Card>
  );
}

export default NewsCard;
