import React from 'react';
import './SpacecraftDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import IconButton from '../../components/IconButton/IconButton';
import './SpacecraftDetails.css';

function SpacecraftDetails() {
  return (
    <main className='position-relative'>
      <Container className='spaceDetails-container'>
        <Row>
          <Col className='col-btn text-start d-flex align-items-center'>
            <IconButton type='prev' />
          </Col>

          <Col>
            <Row className='flex-column gap-3 p-5'>
              <Col>
                <IconButton type='goback' />
              </Col>
              <Col>
                <h2>Title: Heading 1</h2>
              </Col>
              <Col>
                <Image src='../../assets/news.jpg' fluid />
              </Col>
              <Col>
                <Badge bg='primary'>Primary</Badge>{' '}
                <Badge bg='secondary'>Secondary</Badge>{' '}
                <Badge bg='success'>Success</Badge>{' '}
                <Badge bg='danger'>Danger</Badge>{' '}
                <Badge bg='warning' text='dark'>
                  Warning
                </Badge>
              </Col>
              <Col>
                <h3>Title: Heading 2</h3>
                <p>content</p>
              </Col>
            </Row>
          </Col>

          <Col className='col-btn text-end d-flex align-items-center'>
            <IconButton type='next' />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default SpacecraftDetails;
