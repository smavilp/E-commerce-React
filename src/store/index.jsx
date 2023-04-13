import { configureStore } from '@reduxjs/toolkit'
import products from "./slices/products.slice"
import isLoading from './slices/isLoading.slice'
import productsCart from './slices/productsCart.slice'

export default configureStore({
  reducer: {
    products,
    isLoading,
    productsCart
    
	}
})

