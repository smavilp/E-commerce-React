import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className='Loader'>
      <Spinner animation="border" variant="danger" size='lg' />
    </div>
  );
};

export default Loader;