import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from "./Cart"

const NavBar = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => {setShow(false)}
  const navigate =useNavigate()
  const showCart = () => {
    const token =localStorage.getItem("token")
    if(token){
      setShow(true)
    } else {
      navigate("/login")
    }
  }

  return (
    <>
      <Navbar bg="danger" variant="light" sticky="top"  className='py-2 px-4 d-flex justify-content-between'>
        <Navbar.Brand as={Link} to={"/"} style={{color:'#ffffff'}}>E-commerce</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to={"/login"} >
            <i className='bx bx-user bx-md' style={{color:"#fffcfc"}}  ></i>
          </Nav.Link>
          <Nav.Link as={Link} to={"/purchases"} >
            <i className='bx bx-box bx-md' style={{color:'#ffffff'}}  ></i>
          </Nav.Link>
          <Nav.Link onClick={() => showCart()}>
            <i className='bx bx-cart bx-md' style={{color:'#ffffff'}}></i>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Cart show ={show} handleClose = {handleClose} />
    </>
  );
};

export default NavBar;