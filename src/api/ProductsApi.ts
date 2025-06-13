import axios from 'axios'
import type { Product } from '../interfaces/Product'

const url = import.meta.env.VITE_BACKEND_URL ; 

export const getProducts = async () => {
  const products: Product[] = await axios
    .get(url + '/public/products')
    .then(res => res.data)  
  console.log(products) ; 
 return  products ;
}
