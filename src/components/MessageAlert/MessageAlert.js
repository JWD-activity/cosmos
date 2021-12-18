import React from 'react';
import Alert from 'react-bootstrap/Alert';

function MessageAlert({ type, message }) {
  return (
    <Alert variant={type === 'error' ? 'danger' : 'success'}>{message}</Alert>
  );
}

export default MessageAlert;
