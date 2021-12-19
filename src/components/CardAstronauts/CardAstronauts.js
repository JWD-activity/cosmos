import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';
import './CardAstronauts.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function CardAstronauts({ content }) {
  console.log(content);
  const { profile_image_thumbnail: image_url, name, id } = content;
  return (
    <Link to={`/astronauts/${id}`} className='summary-link--astronauts'>
      <Card className='summary-card--astronauts'>
        <Col>
          <Image
            variant='top'
            src={image_url}
            alt={name}
            className='img-sm--astronauts p-4'
            roundedCircle
          />
        </Col>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button>VIEW DETAILS</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardAstronauts;
