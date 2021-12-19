import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpacecraft } from '../../redux/spacecraftSlice';

import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import './Spacecraft.css';

function Spacecraft() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.spacecraft.error);
  const isLoading = useSelector((state) => state.spacecraft.isLoading);
  const spacecraft = useSelector(
    (state) => state.spacecraft.spacecraft.results
  );

  useEffect(() => {
    dispatch(fetchSpacecraft());
  }, []);

  return (
    <Row className='flex-column pt-5'>
      <Col className='spacecraft-heading'>
        <h1>Spacecraft</h1>
        <h2>Explore the spacecraft we use to stay in orbit.</h2>
      </Col>
      <Col>
        <Row className='position-relative'>
          {error ? (
            <MessageAlert type='error' message={error} />
          ) : isLoading ? (
            <Spinner animation='border' role='status' className='loading' />
          ) : (
            <CardCarousel
              data={spacecraft}
              numPerPage={4}
              section='spacecraft'
            />
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Spacecraft;
