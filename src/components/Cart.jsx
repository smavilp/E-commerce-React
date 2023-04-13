import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getProductsCartThunk} from "../store/slices/productsCart.slice"
import ListGroup from 'react-bootstrap/ListGroup';
import CartItem from './CartItem';


const Cart = ({show, handleClose}) => {

  const dispatch = useDispatch ()
  const productsCart = useSelector(state => state.productsCart)

  useEffect(() => {
    dispatch(getProductsCartThunk())
  }, [])
  
  console.log(productsCart)

  return (
  <Offcanvas show={show} onHide={handleClose} placement={"end"} >
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
      <Offcanvas.Body>
      <ListGroup>
      {
        productsCart.map(product =>(<CartItem  key={product.id} data={product}/>))
      }
    </ListGroup>
    </Offcanvas.Body>
  </Offcanvas>
  );
};

export default Cart;