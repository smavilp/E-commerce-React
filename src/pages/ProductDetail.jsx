import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {

  const {id} = useParams()
  const [productDetail, setProductDetail] = useState({})
  
  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then(resp => setProductDetail(resp.data))
      .catch(error => console.error(error))
  }, [])
  
  return (
    <div>
      
    </div>
  );
};

export default ProductDetail;