import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/newsSlice';
import { NEWS_SITE } from '../../utils/config';
import {
  newsFilter,
  bookmarkFilter,
  setLocalStorage,
  getLocalStorage,
} from '../../utils/utils';

import CardNews from '../../components/CardNews/CardNews';
import Filter from '../../components/Filter/Filter';
import MessageAlert from '../../components/MessageAlert/MessageAlert';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mybookmark from '../../components/MyBookmark/Mybookmark';

function News() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.news.error);
  const isLoading = useSelector((state) => state.news.isLoading);
  const news = useSelector((state) => state.news.news);

  const [selectedNewsId, setSelectedNewsId] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [bookmark, setBookmark] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState([]);

  const list = getLocalStorage('bookmark');

  useEffect(() => {
    if (list) setBookmark(list);
    setLocalStorage('bookmark', list);
  }, []);

  useEffect(() => {
    console.log(5555, bookmark);
  }, [bookmark]);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    if (selectedNewsId) {
      const newBookmark = bookmarkFilter(news, bookmark, selectedNewsId);
      setBookmark(newBookmark);
      setLocalStorage('bookmark', newBookmark);
    }
  }, [selectedNewsId, isChecked]);

  useEffect(() => {
    setResults(newsFilter(news, selectedOption));
  }, [selectedOption, news]);

  const generateNews = (data) => {
    return data.map((content) => {
      return (
        <CardNews
          key={content.id}
          content={content}
          setSelectedNewsId={setSelectedNewsId}
          setIsChecked={setIsChecked}
          bookmark={bookmark}
        />
      );
    });
  };

  return (
    <>
      <Row className='my-3 pt-4'>
        <h1>News</h1>
        <h2>Check the latest spaceflight-related news.</h2>
        <Col md={6} sm={12}></Col>
        <Col md={6} sm={12}>
          <Row className='flex-row-reverse'>
            <Col>
              <Filter
                options={NEWS_SITE}
                onChange={setSelectedOption}
                by='news site'
              />
            </Col>

            <Col>
              <Mybookmark setBookmark={setBookmark} />
            </Col>
          </Row>
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
