import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';

import './Search.css';

function Search() {
  return (
    <InputGroup className='search'>
      <InputGroup.Text>
        <BsSearch />
      </InputGroup.Text>
      <Form.Control
        type='text'
        placeholder='Search products..'
        aria-label='Search products'
      />
      <InputGroup.Text>
        <BsFillXCircleFill />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default Search;
