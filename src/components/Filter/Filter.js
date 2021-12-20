import React from 'react';
import Form from 'react-bootstrap/Form';
import './Filter.css';

function Filter({ options, onChange, by, selectedOption }) {
  const onChangeHandler = (ev) => {
    onChange(ev.target.value);
  };

  const generateOptions = () => {
    return options.map((name, index) => (
      <option value={name} key={index}>
        {name}
      </option>
    ));
  };
  return (
    <Form.Select
      aria-label='Default select example'
      className='filter'
      onChange={onChangeHandler}
      value={selectedOption}
    >
      <option value='default'>Filter by {by}</option>
      {generateOptions()}
    </Form.Select>
  );
}

export default Filter;
