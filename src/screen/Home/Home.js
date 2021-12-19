import React from 'react';
import { Link } from 'react-router-dom';

import ImgCard from '../../components/ImgCard/ImgCard.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Home.css';

const contents = [
  {
    id: 1,
    name: 'spacecraft',
    desc: 'Explore the spacecraft we use to stay in orbit.',
  },
  {
    id: 2,
    name: 'astronauts',
    desc: 'Meet the exceptional people that have ventured into space.',
  },
  {
    id: 3,
    name: 'news',
    desc: 'Check the latest spaceflight-related news.',
  },
];

function Home() {
  const generateContent = () => {
    return contents.map((content) => {
      const { name, desc, id } = content;
      return (
        <Col lg={4} md={12} className='p-5' key={id}>
          <Link to={`/${name}`}>
            <ImgCard name={name} desc={desc} />
          </Link>
        </Col>
      );
    });
  };

  return <Row>{generateContent()}</Row>;
}

export default Home;
