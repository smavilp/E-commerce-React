import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Card from "react-bootstrap/Card";

const Purchases = () => {

  const[purchases, setPurchases] = useState([])

  useEffect(() => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
      .then(resp => {
        console.log(resp.data)
        setPurchases(resp.data)})
      .catch(error => console.error(error))
    

  }, [])
  

  return (
    <div>
      <h1>Purchases</h1>
      {purchases.map((purchase) => (
        <Card
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
          key={purchase.id}
        >
          <Card.Img
            variant="left"
            src={purchase.product.images?.[0].url}
            style={{ width: 150 }}
          />
          <Card.Body>
            <Card.Title>{purchase.product?.title}</Card.Title>
            <Card.Text>{purchase.quantity} unit(s)</Card.Text>
            <Card.Text>Total: ${purchase.quantity*purchase.product?.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Purchases;