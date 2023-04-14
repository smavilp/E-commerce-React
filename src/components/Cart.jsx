import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getProductsCartThunk, cartCheckoutThunk} from "../store/slices/productsCart.slice"
import ListGroup from 'react-bootstrap/ListGroup';
import CartItem from './cartItem';

const Cart = ({show, handleClose}) => {

  const dispatch = useDispatch ()
  const productsCart = useSelector(state => state.productsCart)
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(getProductsCartThunk())
  }, [token])
  
  

  return (
  <Offcanvas show={show} onHide={handleClose} placement={"end"} >
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
      <Offcanvas.Body>
      <ListGroup>
      {
        productsCart.map(product =>(<CartItem  key={product.id} data={product} />))
      
      }
    
    </ListGroup>
    
    </Offcanvas.Body>
    <Button variant="danger" id="button-addon2" onClick={() => dispatch (cartCheckoutThunk())}>Purchase</Button>
  </Offcanvas>

  );
};

export default Cart;