import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpaceDetails } from '../../redux/spaceDetailSlice';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import IconButton from '../../components/IconButton/IconButton';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Spinner from 'react-bootstrap/Spinner';
import './SpacecraftDetails.css';

function SpacecraftDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [id]);

  const error = useSelector((state) => state.spacecraftDetails.error);
  const isLoading = useSelector((state) => state.spacecraftDetails.isLoading);
  const data = useSelector(
    (state) => state.spacecraftDetails.spacecraftDetails
  );

  const generateBadge = () => {
    const { in_use, human_rated, crew_capacity } = data;
    return (
      <div className='badges'>
        {in_use ? (
          <Badge bg='info'>ACTIVE</Badge>
        ) : (
          <Badge bg='danger'>IN-ACTIVE</Badge>
        )}{' '}
        {human_rated ? (
          <Badge bg='success'>HUMAN RATED</Badge>
        ) : (
          <Badge bg='warning' text='dark'>
            CARGO
          </Badge>
        )}{' '}
        {crew_capacity && (
          <Badge bg='primary'>CREW CAPACITY: {crew_capacity}</Badge>
        )}
      </div>
    );
  };

  const generateInfo = () => {
    const { height, agency, flight_life } = data;
    return (
      <>
        <h3>{agency.name}</h3>
        <h4>Height: {height}M</h4>
        <h4>Flight Life: {flight_life}</h4>
      </>
    );
  };

  const generateContent = () => {
    const { name, details, image_url } = data;
    console.log(details);
    return (
      <Row>
        <Col className='col-btn text-start d-flex align-items-center'>
          <IconButton type='prev' />
        </Col>

        <Col>
          <Row className='flex-column gap-3 py-5'>
            {isLoading ? (
              <Spinner animation='border' role='status' className='loading' />
            ) : (
              <>
                <Col>
                  <Row>
                    <Col lg={6}>
                      <Image
                        src={image_url}
                        alt={name}
                        fluid
                        className='img-lg'
                      />
                    </Col>
                    <Col lg={6}>
                      <h2>{name}</h2>
                      {generateBadge()}
                      {generateInfo()}
                      <Row>
                        <Link to='/spacecraft'>
                          <IconButton type='goback' />
                        </Link>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <p>{details}</p>
                </Col>
              </>
            )}
          </Row>
        </Col>

        <Col className='col-btn text-end d-flex align-items-center'>
          <IconButton type='next' />
        </Col>
      </Row>
    );
  };

  return (
    <main className='position-relative'>
      <Container className='spaceDetails-container'>
        {error ? (
          <MessageAlert type='error' message={error} />
        ) : (
          generateContent()
        )}
      </Container>
    </main>
  );
}

export default SpacecraftDetails;
