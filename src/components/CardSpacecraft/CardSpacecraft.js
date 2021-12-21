import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import BasicButton from '../BasicButton/BasicButton';

import './CardSpacecraft.css';

function CardSpacecraft({ content }) {
  const { image_url, name, id } = content;

  return (
    <Link to={`/spacecraft/${id}`} className='summary-link--spacecraft'>
      <Card className='summary-card--spacecraft'>
        <Card.Img
          variant='top'
          src={image_url}
          alt={name}
          className='img-sm--spacecraft'
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <BasicButton>VIEW DETAILS</BasicButton>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardSpacecraft;
