import React from 'react';

import Alert from 'react-bootstrap/Alert';
import { AiFillWarning } from 'react-icons/ai';
import { HiSearchCircle } from 'react-icons/hi';
import { GiCancel } from 'react-icons/gi';

import './MessageAlert.css';

function MessageAlert({ type, message, children }) {
  let icon;

  if (type === 'error') icon = <AiFillWarning className='alert-icon' />;
  if (type === 'info') icon = <HiSearchCircle className='alert-icon' />;
  if (type === 'noPage') icon = <GiCancel className='alert-icon' />;

  return (
    <Alert
      variant={
        type === 'error' ? 'danger' : type === 'info' ? 'success' : 'secondary'
      }
    >
      {icon} {message} {children}
    </Alert>
  );
}

export default MessageAlert;
