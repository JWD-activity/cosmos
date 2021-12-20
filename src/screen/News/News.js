import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/newsSlice';
import { NEWS_SITE } from '../../utils/config';
import { newsFilter } from '../../utils/utils';

import CardNews from '../../components/CardNews/CardNews';
import Filter from '../../components/Filter/Filter';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function News() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.news.error);
  const isLoading = useSelector((state) => state.news.isLoading);
  const news = useSelector((state) => state.news.news);

  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    setResults(newsFilter(news, selectedOption));
  }, [selectedOption, news, news.length]);

  const generateNews = (data) => {
    return data.map((content) => {
      return <CardNews key={content.id} content={content} />;
    });
  };

  return (
    <>
      <Row className='my-3 pt-4'>
        <h1>News</h1>
        <h2>Check the latest spaceflight-related news.</h2>
        <Col md={6} sm={12}></Col>
        <Col md={6} sm={12}>
          <Filter
            options={NEWS_SITE}
            onChange={setSelectedOption}
            by='news site'
          />
        </Col>
      </Row>
      <Row className='px-2'>
        {error ? (
          <MessageAlert type='error' message={error} />
        ) : isLoading ? (
          <Spinner animation='border' role='status' className='loading' />
        ) : !selectedOption || selectedOption === 'default' ? (
          generateNews(news)
        ) : results.length === 0 ? (
          <MessageAlert type='error' message='Sorry No results found.' />
        ) : (
          generateNews(results)
        )}
      </Row>
    </>
  );
}

export default News;
