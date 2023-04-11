import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const Aside = () => {
  return (
    <aside>
                <Accordion defaultActiveKey="0">
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
    </aside>
  );
};

export default Aside;