import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../Button/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

import './NewsCard.css';

function NewsCard({ content }) {
  const { imageUrl, title, newsSite, updatedAt, url } = content;
  let updatedDate = new Date(updatedAt).toLocaleString();

  return (
    <Card className='news-box my-3'>
      <Row>
        <Col md={3} sm={12} className='img-box--news'>
          <img src={imageUrl} alt={title} className='img-sm--news ' />
        </Col>
        <Col md={9} sm={12} className='info-box--news'>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            <span>{newsSite}</span>
            <span className='updated'>{updatedDate}</span>
          </Card.Subtitle>
          <a href={url} target='_blank' rel='noreferrer'>
            <Button>READ MORE</Button>
          </a>
        </Col>
      </Row>
    </Card>
  );
}

export default NewsCard;
