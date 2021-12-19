import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../Button/Button';
import './CardAstronauts.css';
import { Link } from 'react-router-dom';

function CardAstronauts({ content }) {
  console.log(content);
  const { profile_image_thumbnail: image_url, name, id } = content;
  return (
    <Link to={`/astronauts/${id}`} className='summary-link--astronauts'>
      <Card className='summary-card--astronauts'>
        <Card.Img
          variant='top'
          src={image_url}
          alt={name}
          className='img-sm--astronauts'
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button>VIEW DETAILS</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardAstronauts;
