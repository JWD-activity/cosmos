import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAstronautDetails } from '../../redux/astronautDetailSlice';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import { fetchAstronauts } from '../../redux/astronautSlice';
import './AstronautDetails.css';
import {
  navigateDetailPage,
  getCurrentIndex,
  checkButtonTarget,
} from '../../utils/utils';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import IconButton from '../../components/IconButton/IconButton';
import './AstronautDetails.css';
import Badge from 'react-bootstrap/Badge';

function AstronautsDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(null);
  const error = useSelector((state) => state.astronautDetails.error);
  const isLoading = useSelector((state) => state.astronautDetails.isLoading);
  const data = useSelector((state) => state.astronautDetails.astronautDetails);
  const astronauts = useSelector((state) => state.astronauts.astronauts);

  const totalPage = astronauts.length;

  useEffect(() => {
    dispatch(fetchAstronauts());
  }, []);

  useEffect(() => {
    setCurrentPage(getCurrentIndex(astronauts, id) + 1);
    dispatch(fetchAstronautDetails(id));
  }, [id, astronauts]);

  const generateBadge = (name) => {
    const status = name.toLowerCase();

    return (
      <Badge
        className='mb-3'
        bg={
          status === 'active'
            ? 'primary'
            : status === 'retired'
            ? 'danger'
            : 'secondary'
        }
      >
        {name}
      </Badge>
    );
  };

  const onPrevClickHanlder = (ev) => {
    if (checkButtonTarget(ev.target)) {
      const { selectedId } = navigateDetailPage('prev', astronauts, id);
      if (selectedId) navigate(`/astronauts/${selectedId}`);
    }
  };

  const onNextClickHanlder = (ev) => {
    if (checkButtonTarget(ev.target)) {
      const { selectedId } = navigateDetailPage('next', astronauts, id);
      if (selectedId) navigate(`/astronauts/${selectedId}`);
    }
  };

  const generateInfo = () => {
    const { nationality, agency, bio, date_of_birth, status } = data;
    const birthDate = new Date(date_of_birth).toLocaleDateString();
    return (
      <>
        <h3>{agency.name}</h3>
        {generateBadge(status.name)}
        <h4>{nationality}</h4>
        <h4>Date of birth: {birthDate}</h4>
        <p>{bio}</p>
      </>
    );
  };

  const generateContent = () => {
    const { profile_image, name, wiki } = data;

    return (
      <>
        <Row className='astronaut-details'>
          <Col
            className='col-btn text-start d-flex align-items-center'
            onClick={onPrevClickHanlder}
          >
            {currentPage > 1 ? <IconButton type='prev' /> : ''}
          </Col>

          <Col>
            <Row className='flex-column gap-3 pt-2'>
              {isLoading ? (
                <Spinner animation='border' role='status' className='loading' />
              ) : (
                <>
                  <Col>
                    <Row>
                      <Col lg={3}>
                        <p className='page'>
                          <strong>{currentPage}</strong> / {totalPage}
                        </p>
                        <Image
                          src={profile_image}
                          alt={name}
                          fluid
                          className='img-lg--astroDetails'
                        />
                      </Col>

                      <Col lg={9}>
                        <h2>
                          {name}{' '}
                          <a href={wiki} target='_blank' rel='noreferrer'>
                            <IconButton type='wiki' />
                          </a>
                        </h2>

                        {generateInfo()}
                        <Row className='mt-4 align-items-center'>
                          <Link to='/astronauts'>
                            <IconButton type='goback' />
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col>{/* <p>{details}</p> */}</Col>
                </>
              )}
            </Row>
          </Col>

          <Col
            className='col-btn text-end d-flex align-items-center'
            onClick={onNextClickHanlder}
          >
            {currentPage < totalPage && <IconButton type='next' />}
          </Col>
        </Row>
      </>
    );
  };

  console.log(data);
  return (
    <>
      {error ? (
        <MessageAlert type='error' message={error} />
      ) : (
        generateContent()
      )}
    </>
  );
}

export default AstronautsDetails;
