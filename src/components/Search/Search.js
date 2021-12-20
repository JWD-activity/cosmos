import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';

import './Search.css';

function Search({ onSubmitHandler }) {
  const [searchText, setSearchText] = useState('');
  const changeHandler = (ev) => {
    setSearchText(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (searchText.trim()) onSubmitHandler(searchText);
  };

  const onClearHandler = () => {
    onSubmitHandler('');
    setSearchText('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup className='search'>
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>

        <Form.Control
          type='text'
          placeholder='Search astronauts..'
          aria-label='Search astronauts'
          onChange={changeHandler}
          value={searchText}
        />

        <InputGroup.Text onClick={onClearHandler} className='clear--search'>
          <BsFillXCircleFill />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default Search;
