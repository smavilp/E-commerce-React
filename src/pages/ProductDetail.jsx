import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createProductCartThunk } from '../store/slices/productsCart.slice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {

  const {id} = useParams()
  const [productDetail, setProductDetail] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity - 1) 
    }
  }

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then(resp => {
        console.log(resp.data)
        setProductDetail(resp.data)})
      .catch(error => console.error(error))
  }, [])

  const addProduct = () => {
    const data = {
      quantity: 1,
      productId: id
    }
    console.log(data)
    dispatch(createProductCartThunk(data))
  }

  return (
    <Container>
      <Row>
        <Col>
          <Carousel variant='dark'>
            <Carousel.Item>
              <img style={{maxWidth:"35em", maxHeight:"35em" ,objectFit:"contain"}}
                className="d-block w-100"
                src={productDetail.images?.[0].url}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img style={{maxWidth:"35em", maxHeight:"35em" ,objectFit:"contain"}}
                className="d-block w-100"
                src={productDetail.images?.[1].url}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img style={{maxWidth:"35em", maxHeight:"35em" ,objectFit:"contain"}}
                className="d-block w-100"
                src={productDetail.images?.[2].url}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
          <Card>
            <Card.Header>{productDetail.brand}</Card.Header>
            <Card.Body>
              <Card.Title>{productDetail.title}</Card.Title>
              <Card.Text>
                {productDetail.description}
              </Card.Text>
              <Button variant="danger" style={{maxWidth:"100%"}} onClick={addProduct}>
                <i className='bx bx-cart bx-sm' style={{color:'#ffffff'}}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;