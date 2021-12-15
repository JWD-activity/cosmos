import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './SummaryCard.css';
import Button from '../Button/Button';

function SummaryCard() {
  return (
    <Card className='summary-container'>
      CONTETN
      <Col>
        <Button>VIEW DETAILS</Button>
      </Col>
    </Card>
  );
}

export default SummaryCard;
