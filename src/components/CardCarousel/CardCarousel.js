import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpacecraft } from '../../redux/spacecraftSlice.js';
import { buildPage } from '../../utils/utils';

import SummaryCard from '../SummaryCard/SummaryCard';
import IconButton from '../IconButton/IconButton';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import './CardCarousel.css';

function CardCarousel() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [contents, setContents] = useState([]);

  const error = useSelector((state) => state.spacecraft.error);
  const isLoading = useSelector((state) => state.spacecraft.isLoading);
  const spacecraft = useSelector(
    (state) => state.spacecraft.spacecraft.results
  );

  useEffect(() => {
    dispatch(fetchSpacecraft());
  }, []);

  useEffect(() => {
    if (spacecraft) {
      displayCarouselItem();
    }
  }, [spacecraft]);

  const prevBtn = <IconButton type='prev' />;
  const nextBtn = <IconButton type='next' />;
  const numPerPage = 4;
  const total = spacecraft ? Math.ceil(spacecraft.length / numPerPage) : 0;

  const generateCarousel = (pageNum) => {
    const { start, end } = buildPage(pageNum, numPerPage);
    const data = spacecraft.slice(start, end);

    return (
      <Carousel.Item key={pageNum}>
        <Row>
          {data.map((content) => {
            return (
              <Col lg={3} md={6} sm={12} key={content.id}>
                <SummaryCard content={content} />
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
    );
  };

  const displayCarouselItem = () => {
    const content = [];
    for (let i = 0; i < total; i++) {
      content.push(generateCarousel(i + 1));
    }
    setContents(content);
  };

  const handleSelect = (selectedIndex, ev) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {isLoading ? (
        <Spinner animation='border' role='status' className='loading' />
      ) : (
        <>
          <Col className='pagenation text-center'>
            <strong>{index + 1}</strong> / {total}
          </Col>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            prevIcon={prevBtn}
            nextIcon={nextBtn}
            indicators={false}
            controls={true}
            interval={null}
          >
            {contents}
          </Carousel>
        </>
      )}
    </>
  );
}

export default CardCarousel;
