import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="danger" variant="light" className='py-4 px-5 d-flex justify-content-between'>
      <Navbar.Brand as={Link} to={"/"} style={{color:'#ffffff'}}>E-commerce</Navbar.Brand>
      <Nav className='mb-auto'>
        <Nav.Link as={Link} to={"/login"} >
          <i className='bx bx-user bx-md' style={{color:"#fffcfc"}}  ></i>
        </Nav.Link>
        <Nav.Link as={Link} to={"/purchases"} >
          <i className='bx bx-box bx-md' style={{color:'#ffffff'}}  ></i>
        </Nav.Link>
        <Nav.Link >
          <i className='bx bx-cart bx-md' style={{color:'#ffffff'}}></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;