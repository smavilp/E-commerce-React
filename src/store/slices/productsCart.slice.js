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
  // dispatch ( setIsLoading (true) )
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
      .then(resp => {
        dispatch(setProductsCart(resp.data))
      })
      .catch(error => console.error(error))
      // .finally(() => dispatch (setIsLoading(false)))

}

export const createProductCartThunk = data => dispatch => {
  // dispatch ( setIsLoading (true) )
  axios
    .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
    .then(()=>dispatch(getProductsCartThunk))
    .catch(error => console.error(error))
    // .finally(() => dispatch (setIsLoading(false)))
}

export const decreaseProductCartThink

export const cartCheckoutThunk = () => {
  axios
  .post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {}, getConfig())
  .then(() => dispatch)
}

export const { setProductsCart } = productsCart.actions;

export default productsCart.reducer;