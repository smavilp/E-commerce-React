import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {updateProductCartThunk, deleteProductCartThunk} from "../store/slices/productsCart.slice";
import { useDispatch } from 'react-redux';
import Stack from 'react-bootstrap/Stack';


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
    <Card style={{ maxWidth: '15rem' }} className='p-4 m-3'>
      <Card.Img variant="top" src={data.product.images?.[0].url} />
      <Card.Body>
        <Card.Title>{data.product.title}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button variant='danger' onClick={() => decreaseProduct()}>-</Button>
          <Card.Text>{counter}</Card.Text>
          <Button variant='danger' onClick={() => increaseProduct()}>+</Button>
        </Stack>
        <Card.Text>Subtotal: ${counter*data.product.price}</Card.Text>
        <Button variant="danger" onClick={() => dispatch(deleteProductCartThunk(data.id))}>
          <i className='bx bx-trash'></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;