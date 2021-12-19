import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAstronautDetails } from '../../redux/astronautDetailSlice';
// import { fetchSpacecraft } from '../../redux/spacecraftSlice.js';
import './AstronautDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AstronautsDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // const [currentPage, setCurrentPage] = useState(null);
  const error = useSelector((state) => state.astronautDetails.error);
  const isLoading = useSelector((state) => state.astronautDetails.isLoading);
  const data = useSelector((state) => state.astronautDetails.astronautDetails);

  // const spacecraft = useSelector(
  //   (state) => state.spacecraft.spacecraft.results
  // );
  useEffect(() => {
    console.log(id);

    dispatch(fetchAstronautDetails(id));
  }, [id]);

  console.log(data);
  return (
    <main className='position-relative'>
      <Container className='astroDetails-container'>
        <Row></Row>
      </Container>
    </main>
  );
}

export default AstronautsDetails;
