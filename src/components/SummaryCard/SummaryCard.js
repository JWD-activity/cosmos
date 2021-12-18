import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../Button/Button';
import './SummaryCard.css';

function SummaryCard({ content }) {
  const { image_url, name, id } = content;
  const onClickHanlder = () => {
    console.log(id);
  };
  return (
    <Card className='summary-box' onClick={onClickHanlder}>
      <Card.Img variant='top' src={image_url} alt={name} className='img--sm' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button>VIEW DETAILS</Button>
      </Card.Body>
    </Card>
  );
}

export default SummaryCard;
