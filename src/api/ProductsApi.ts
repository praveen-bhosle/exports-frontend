import axios from 'axios'
import type { Product } from '../interfaces/Product'
import { AddingImagesToProducts } from '../utils/AddingImagesToProducts'


const url = import.meta.env.VITE_BACKEND_URL ; 

export const getProducts = async () => {
  const products: Product[] = await axios
    .get(url + '/public/products')
    .then(res => res.data)
    .then(data => data.products)
  return AddingImagesToProducts(products)   
}
