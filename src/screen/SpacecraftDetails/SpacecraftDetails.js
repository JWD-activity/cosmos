import React from 'react';
import './SpacecraftDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconButton from '../../components/IconButton/IconButton';
import './SpacecraftDetails.css';

function SpacecraftDetails() {
  return (
    <main className='position-relative'>
      <Container className='spaceDetails-container'>
        <Row>
          <Col className='col-btn text-start'>
            <IconButton type='prev' />
          </Col>

          <Col>
            <Row className='flex-column'>
              <Col>1</Col>
              <Col>2</Col>
              <Col>3</Col>
              <Col>4</Col>
            </Row>
          </Col>
          <Col className='col-btn text-end'>
            <IconButton type='next' />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default SpacecraftDetails;
