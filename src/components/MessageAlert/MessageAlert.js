import React from 'react';

import Alert from 'react-bootstrap/Alert';
import { AiFillWarning } from 'react-icons/ai';
import { HiSearchCircle } from 'react-icons/hi';

import './MessageAlert.css';

function MessageAlert({ type, message }) {
  let icon;

  if (type === 'error') icon = <AiFillWarning className='alert-icon' />;
  else icon = <HiSearchCircle className='alert-icon' />;

  return (
    <Alert variant={type === 'error' ? 'danger' : 'success'}>
      {icon} {message}
    </Alert>
  );
}

export default MessageAlert;
