import React from 'react';
import { Link } from 'react-router-dom';
import MessageAlert from '../../components/MessageAlert/MessageAlert';

import './NotFound.css';

function NotFound() {
  return (
    <MessageAlert type='noPage' message='Page not found!'>
      <Link to='/'>
        <strong className='back-btn--noPage'> Go back</strong>
      </Link>
    </MessageAlert>
  );
}

export default NotFound;
