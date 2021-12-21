import React, { useState, useEffect } from 'react';
import { buildPage } from '../../utils/utils';

import CardSpacecraft from '../CardSpacecraft/CardSpacecraft';
import CardAstronauts from '../CardAstronauts/CardAstronauts';
import IconButton from '../IconButton/IconButton';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './CardCarousel.css';

function CardCarousel({ data, numPerPage, section }) {
  const [index, setIndex] = useState(0);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (data) {
      displayCarouselItem();
      setIndex(0);
    }
  }, [data]);

  const prevBtn = <IconButton type='prev' />;
  const nextBtn = <IconButton type='next' />;
  const total = data ? Math.ceil(data.length / numPerPage) : 0;

  const generateCarousel = (pageNum) => {
    const { start, end } = buildPage(pageNum, numPerPage);
    const result = data.slice(start, end);

    return (
      <Carousel.Item key={pageNum}>
        <Row>
          {result.map((content) => {
            return (
              <Col lg={3} md={6} sm={12} key={content.id}>
                {section === 'spacecraft' ? (
                  <CardSpacecraft content={content} />
                ) : (
                  <CardAstronauts content={content} />
                )}
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

  const onSelectHandler = (selectedIndex, ev) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Col className='pagenation text-center'>
        <strong>{index + 1}</strong> / {total}
      </Col>
      <Carousel
        activeIndex={index}
        onSelect={onSelectHandler}
        prevIcon={prevBtn}
        nextIcon={nextBtn}
        indicators={false}
        controls={true}
        interval={null}
      >
        {contents}
      </Carousel>
    </>
  );
}

export default CardCarousel;
