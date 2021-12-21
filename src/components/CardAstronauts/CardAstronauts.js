import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicButton from '../BasicButton/BasicButton';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import './CardAstronauts.css';

function CardAstronauts({ content }) {
  const {
    profile_image_thumbnail: image_url,
    name,
    id,
    agency,
    status,
  } = content;

  const currentStatus = status.name.toLowerCase();
  let statusClass =
    currentStatus === 'active'
      ? 'primary'
      : currentStatus === 'retired'
      ? 'danger'
      : 'secondary';

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
          <Row>
            <Col className='mb-3'>
              <Badge bg={statusClass}>{status.name}</Badge>
            </Col>
          </Row>

          <Row>
            <Card.Title>{name}</Card.Title>
          </Row>

          <Row>
            <h4 className='text-muted'>{agency.name}</h4>
          </Row>

          <BasicButton>VIEW DETAILS</BasicButton>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardAstronauts;
