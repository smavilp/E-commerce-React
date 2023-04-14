import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import {updateProductCartThunk, deleteProductCartThunk} from "../store/slices/productsCart.slice";
import { useDispatch } from 'react-redux';

const CartItem = ({data}) => {
  
  const [counter, setCounter] = useState(1)
  const dispatch = useDispatch ()

  const decreaseProduct = () => {
    if(counter > 1){
      setCounter(counter - 1)
      const units = {
        "quantity": counter
      }
      dispatch(updateProductCartThunk(data.id, units))
    }
    console.log(data)
  }

  const increaseProduct = () => {
    setCounter(counter + 1)
    const units = {
      "quantity": counter
    }
    dispatch(updateProductCartThunk(data.id, units))
    console.log(data)
  }
  

  return (
    <Card style={{ width: '18rem' }} className='p-4 m-3'>
      <Card.Img variant="top" src={data.product.images?.[0].url} />
      <Card.Body>
        <Card.Title>{data.product.title}</Card.Title>
        <Container>
          <Button variant='danger' onClick={() => decreaseProduct()}>-</Button>
          <Card.Text>{counter}</Card.Text>
          <Button variant='danger' onClick={() => increaseProduct()}>+</Button>
        </Container>
        <Button variant="danger" onClick={() => dispatch(deleteProductCartThunk(data.id))}>
          <i className='bx bx-trash'></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;