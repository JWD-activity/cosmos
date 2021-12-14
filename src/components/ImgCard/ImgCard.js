import React from 'react';
import Card from 'react-bootstrap/Card';

import './ImgCard.css';

function ImgCard({ name }) {
  return <Card className={`img-container bg-${name} `}> ImgCard</Card>;
}

export default ImgCard;
