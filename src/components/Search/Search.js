import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';

import './Search.css';

function Search({ onQueryHandler }) {
  const [searchText, setSearchText] = useState('');
  const changeHandler = (ev) => {
    if (!ev.target.value.trim()) onQueryHandler('');
    setSearchText(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (searchText.trim()) onQueryHandler(searchText);
  };

  const onClearHandler = () => {
    onQueryHandler('');
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
