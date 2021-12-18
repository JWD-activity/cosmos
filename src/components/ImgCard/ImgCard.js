import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../../components/Button/Button.js';

import './ImgCard.css';

function ImgCard({ name, title, desc, children }) {
  return (
    <Card className={`imgcard-container bg-${name} `}>
      <Card.Body className='imgcard-content'>
        <h1>{name}</h1>
        <p>{desc}</p>
        <Button>EXPLORE</Button>
      </Card.Body>
    </Card>
  );
}

export default ImgCard;
