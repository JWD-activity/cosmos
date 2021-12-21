import React, { useState, useEffect } from 'react';
import { isBookmarkNews } from '../../utils/utils';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicButton from '../BasicButton/BasicButton';
import IconButton from '../IconButton/IconButton';

import './CardNews.css';

function CardNews({ content, setSelectedNewsId, setIsChecked, bookmark }) {
  const [isBookmark, setIsBookmark] = useState(false);

  const { imageUrl, title, newsSite, updatedAt, url, id } = content;
  const updatedDate = new Date(updatedAt).toLocaleString();

  useEffect(() => {
    setIsBookmark(isBookmarkNews(id));
  }, [bookmark, id]);

  const onBookmarkHandler = () => {
    setIsBookmark(!isBookmark);
    setSelectedNewsId(id);
    setIsChecked(!isBookmark);
  };

  return (
    <Card className='news-box my-3'>
      <Row>
        <Col md={3} sm={12} className='img-box--news'>
          <img src={imageUrl} alt={title} className='img-sm--news ' />
        </Col>
        <Col md={9} sm={12} className='info-box--news'>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            <span>{newsSite}</span>
            <span className='updated'>{updatedDate}</span>
          </Card.Subtitle>
          <Row className='align-items-center mt-4'>
            <Col>
              <a href={url} target='_blank' rel='noreferrer'>
                <BasicButton>READ MORE</BasicButton>
              </a>
            </Col>
            <Col className='bookmark'>
              <IconButton
                type={isBookmark ? 'addBookmark' : 'removeBookmark'}
                onClick={onBookmarkHandler}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default CardNews;
