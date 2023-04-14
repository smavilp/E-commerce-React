import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getproductsThunk, getProductsFilteredByCategoryThunk, getProductsFilteredByInputThunk } from '../store/slices/products.slice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';


const Home = () => {

  const products = useSelector (state => state.products)
  const dispatch = useDispatch ()
  const [categories, setCategories] = useState([])
  const [inputValue, setInputValue] = useState("")
  const getProdcutsCategories = () => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then(resp => setCategories(resp.data))
      .catch(error => error.log(error))
  }


  useEffect(() => {
    dispatch(getproductsThunk ())
    getProdcutsCategories()

  }, [])
  

  return (
    <Container fluid className='p-5'>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0" sticky="left">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body >
                <Stack direction="vertical" gap={3}>  
                  <Button key={"all"} onClick={()=> dispatch(getproductsThunk())} variant="danger"> All </Button>
                  {
                    categories.map (category => (<Button key={category.id}  onClick={()=> dispatch(getProductsFilteredByCategoryThunk(category.id))} variant="danger" > {category.name} </Button>))
                  }
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion >
        </Col>
        <Col className='col-10'>
          <Row>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search product"
              aria-label="Search product"
              aria-describedby="basic-addon2"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button variant="danger" id="button-addon2" onClick={()=> dispatch(getProductsFilteredByInputThunk(inputValue))}>
              Search
            </Button>
          </InputGroup>
          </Row>
          <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
            {products.map( product => (
              <Card key={product.id}   >
                <Container as={Link} to={`/product/${product.id}`}>
                <Card.Img variant="top"  src={product.images[0].url} style={{height: 200, objectFit:"contain"}} className='p-3'  />
                </Container>
                <Card.Body >
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  
  );
};

export default Home;