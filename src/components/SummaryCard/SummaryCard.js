import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../Button/Button';
import './SummaryCard.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SummaryCard({ content }) {
  const { image_url, name, id } = content;

  return (
    <Link to={`/spacecraft/${id}`} className='summary-link'>
      <Card className='summary-card'>
        <Card.Img
          variant='top'
          src={image_url}
          alt={name}
          className='img--sm'
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button>VIEW DETAILS</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default SummaryCard;
