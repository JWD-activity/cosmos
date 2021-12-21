import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  getLocalStorage,
  getCurrentIndex,
  setLocalStorage,
} from '../../utils/utils';

import { BsStarFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import IconButton from '../IconButton/IconButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyBookmark.css';

function Mybookmark({ setBookmark }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const list = getLocalStorage('bookmark');

  useEffect(() => {
    if (!list) return;
    else setBookmark(list);
  }, []);

  const onRemoveHandler = (id) => {
    const index = getCurrentIndex(list, id);
    list.splice(index, 1);
    setLocalStorage('bookmark', list);
    setBookmark(list);
  };

  const generateBookmark = () => {
    if (list.length > 0) {
      return list.map((news) => {
        const { imageUrl, title, url, id } = news;

        return (
          <Row className='mb-3' key={id}>
            <Col md={3} sm={12} className='img-box--bookmark'>
              <img src={imageUrl} alt={title} className='img-sm--bookmark ' />
            </Col>
            <Col md={9} sm={12} className='info-box--bookmark'>
              <h1>{title}</h1>

              <Row className='align-items-center mt-4'>
                <Col>
                  <a href={url} target='_blank' rel='noreferrer'>
                    <Button variant='dark'>READ MORE</Button>
                  </a>
                </Col>
                <Col
                  className='btn--addBookmark'
                  onClick={() => onRemoveHandler(id)}
                >
                  <IconButton type='addBookmark' />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      });
    }
  };

  return (
    <>
      <Button variant='dark' onClick={handleShow} className='btn--bookmark'>
        <BsStarFill className='star--bookmark me-2' /> Bookmark
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='bookmark--title'>
            Bookmark News
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{generateBookmark()}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Mybookmark;
