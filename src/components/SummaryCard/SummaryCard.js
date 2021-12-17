import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './SummaryCard.css';
import Button from '../Button/Button';

function SummaryCard({ content }) {
  const { name, image_url } = content;
  return (
    <Card className='summary-box'>
      <Card.Img variant='top' src={image_url} alt={name} className='img--sm' />
      <Card.Body>
        <Card.Text>{name}</Card.Text>
        <Button>VIEW DETAILS</Button>
      </Card.Body>
    </Card>
  );
}

export default SummaryCard;
