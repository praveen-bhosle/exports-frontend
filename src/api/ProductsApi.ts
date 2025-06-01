import axios from 'axios'
import type { Product } from '../interfaces/Product'
import { AddingImagesToProducts } from '../utils/AddingImagesToProducts'


const url = ''

export const getProducts = async () => {
  const products: Product[] = await axios
    .get(url + '/public/proucts')
    .then(res => res.data)
    .then(data => data.products)
  return AddingImagesToProducts(products) 

  
}
