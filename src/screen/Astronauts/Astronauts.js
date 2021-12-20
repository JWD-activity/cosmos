import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAstronauts } from '../../redux/astronautSlice';
import { ASTRONAUT_STATUS } from '../../utils/config';
import './Astronauts.css';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Spinner from 'react-bootstrap/Spinner';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import { astronautsFilter, searchFilter } from '../../utils/utils';
function Astronauts() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.astronauts.error);
  const isLoading = useSelector((state) => state.astronauts.isLoading);
  const astronauts = useSelector((state) => state.astronauts.astronauts);
  const [selectedOption, setSelectedOption] = useState('default');
  const [filterResults, setFilterResults] = useState([]);
  const [finalResults, setFinalResults] = useState([]);
  const [query, setQuery] = useState('');
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAstronauts());
  }, []);

  useEffect(() => {
    setFilterResults(astronautsFilter(astronauts, selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem('filterResults', JSON.stringify(filterResults));
  }, [filterResults, filterResults.length]);

  useEffect(() => {
    getFinalData();
  }, [query]);

  const getFinalData = () => {
    let results;
    if (selectedOption === 'default') results = searchFilter(astronauts, query);
    else results = searchFilter(filterResults, query);

    setFinalResults(results);
  };

  const onSubmitHander = (query) => {
    setQuery(query);
  };

  return (
    <Row className='flex-column'>
      <Col className='astronauts-heading'>
        <h1>Astronauts</h1>
        <h2>Meet the exceptional people that have ventured into space.</h2>
      </Col>
      <Col>
        <Row className='my-5'>
          <Col md={6} sm={12}>
            <Search onSubmitHandler={onSubmitHander} />
          </Col>
          <Col md={6} sm={12}>
            <Filter
              options={ASTRONAUT_STATUS}
              by='status'
              onChange={setSelectedOption}
              selectRef={selectRef}
              value={selectedOption}
            />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row className='position-relative'>
          {error ? (
            <MessageAlert type='error' message={error} />
          ) : isLoading ? (
            <Spinner animation='border' role='status' className='loading' />
          ) : (
            <CardCarousel
              data={finalResults}
              // data={selectedOption === 'default' ? astronauts : filterResults}
              numPerPage={8}
              section='astronauts'
            />
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Astronauts;
