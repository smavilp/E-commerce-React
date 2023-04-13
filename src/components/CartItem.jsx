import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const CartItem = ({data}) => {

  const [counter, setCounter] = useState(1)

  const decreaseCounter = () => {
    if(counter > 1){
      setCounter(counter - 1) 
    }
  }

  return (
    <Card style={{ width: '18rem' }} className='p-4'>
      <Card.Img variant="top" src={data.product.images?.[0].url} />
      <Card.Body>
        <Card.Title>{data.product.title}</Card.Title>
        <Container>
          <Button variant='danger' onClick={() => (decreaseCounter())}>-</Button>
          <Card.Text>{counter}</Card.Text>
          <Button variant='danger' onClick={() => setCounter(counter + 1)}>+</Button>
        </Container>
        <Button variant="danger">
          <i class='bx bx-trash'></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;