import axios from 'axios'
import type { Product } from '../interfaces/Product'
import { AddingImagesToProducts } from '../utils/AddingImagesToProducts'


const url = import.meta.env.VITE_BACKEND_URL ; 

export const getProducts = async () => {
  const products: Product[] = await axios
    .get(url + '/public/products')
    .then(res => res.data) 
  const products2 =  AddingImagesToProducts(products)   
  const products3 = products2.map( (product) => {  return  { ...product , quality: product.quality.trim().substring(1,product.quality.length-2) ,  sizeA : product.sizeA.trim().substring(1,product.sizeA.length-2)  ,  sizeB: product.sizeB.trim().substring(1,product.sizeB.length-2) }  } ) 
  return  products3 ;
}
