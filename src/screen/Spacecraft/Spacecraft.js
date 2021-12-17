import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpacecraft } from '../../redux/spacecraftSlice.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';

import SummaryCard from '../../components/SummaryCard/SummaryCard';
import './Spacecraft.css';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';

function Spacecraft() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpacecraft());
  }, []);

  const error = useSelector((state) => state.spacecraft.error);
  const isLoading = useSelector((state) => state.spacecraft.isLoading);
  const spacecraft = useSelector((state) => state.spacecraft.spacecraft);

  const generateCards = () => {
    if (spacecraft?.results) {
      const { results } = spacecraft;

      return results.map((content) => {
        return (
          <Col lg={4} md={6} sm={12} key={content.id}>
            <SummaryCard content={content} />
          </Col>
        );
      });
    }
  };

  return (
    <main className='position-relative'>
      <Container className='spacecraft-container py-3'>
        <Row className='flex-column'>
          <Col className='my-4'>
            <h1>Spacecraft</h1>
            <h2>Explore the spacecraft we use to stay in orbit.</h2>
          </Col>
          <Col>
            <Row>
              {isLoading ? (
                <Spinner animation='border' role='status' className='loading'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              ) : (
                <CardCarousel />
              )}
            </Row>
          </Col>
        </Row>
        {/* </Row>
          </Col> */}
        {/* <Row>{generateCards()}</Row> */}
        {/* <Col>
            <Row>
              {!isLoading ? (
                <Spinner animation='border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              ) : (
                generateCards()
              )}
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-3 my-4'>
                <SummaryCard />
              </Col>
              <Col lg={4} md={6} sm={12} className='px-2 my-4'>
                <SummaryCard />
              </Col>
            </Row>
          </Col> */}
        {/* </Row> */}
      </Container>
    </main>
  );
}

export default Spacecraft;
