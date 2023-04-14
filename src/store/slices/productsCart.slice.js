import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
// import {setIsLoading} from './isLoading.slice';


export const productsCart = createSlice({
		name: 'productsCart',
    initialState: [],
    reducers: {
        setProductsCart : (state, action) => {
          return action.payload
        }
    }
})

export const getProductsCartThunk = () => dispatch => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
      .then(resp => {
        dispatch(setProductsCart(resp.data))
      })
      .catch(error => console.error(error))

}

export const createProductCartThunk = data => dispatch => {
  axios
    .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
    .then(() => dispatch(getProductsCartThunk))
    .catch(error => console.error(error))
}

export const updateProductCartThunk = (id, data) => dispatch => {
  axios
    .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, data, getConfig())
    .then(()=>{
      dispatch(getProductsCartThunk)
    })
    .catch(error => console.error(error))
}

export const deleteProductCartThunk = (id) => dispatch => {
  axios
    .delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
    .then(()=>{
      dispatch(getProductsCartThunk)
    })
    .catch(error => console.error(error))
}

export const cartCheckoutThunk = () => (dispatch) => {
  axios
    .post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {}, getConfig())
    .then(() => dispatch(getProductsCartThunk))
    .catch((error) => console.error(error))
}

export const { setProductsCart } = productsCart.actions;

export default productsCart.reducer;