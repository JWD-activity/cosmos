import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from '../../components/NewsCard/NewsCard';
import Filter from '../../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/newsSlice';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Spinner from 'react-bootstrap/Spinner';

function News() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.news.error);
  const isLoading = useSelector((state) => state.news.isLoading);
  const news = useSelector((state) => state.news.news);
  console.log(news, error, isLoading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const generateNews = () => {
    // console.log(news);
    return news.map((content) => {
      return <NewsCard key={content.id} content={content} />;
    });
  };
  return (
    <>
      <Row className='my-3 pt-4'>
        <h1>News</h1>
        <h2>Check the latest spaceflight-related news.</h2>
        <Col md={6} sm={12}></Col>
        <Col md={6} sm={12}>
          <Filter />
        </Col>
      </Row>
      <Row className='px-2'>
        {error ? (
          <MessageAlert type='error' message={error} />
        ) : isLoading ? (
          <Spinner animation='border' role='status' className='loading' />
        ) : (
          generateNews()
        )}
      </Row>
    </>
  );
}

export default News;
