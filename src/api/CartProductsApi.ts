import type { CartItem } from '../interfaces/CartItem'
import { AxiosRequest } from './AxiosApiHandler'

const url =   '/user/cart'

export const getCartItems = async () => {
  const response  = await AxiosRequest( { url  ,  method : 'get'} ) ; 
  if(response===undefined) { 
    return  { success :  false }  ; 
  } 
  else {  
    console.log(response.data) ; 
    const cartItems: CartItem[] = response.data.cartItems ;   
    cartItems.sort( (a , b) => a.id - b.id  ) ;
    return   { success : true ,  cartItems }  ;
  }  
 }

export const createCartItem = async (productId: number) => { 
  const response  = await AxiosRequest( { url :  url  + '/' + productId   ,  method : 'post'} ) ; 
  return response !== undefined ;
}

export const deleteCartItem = async (cartItemId: number) => {
  const response  = await AxiosRequest( { url :  url  + '/' + cartItemId   ,  method : 'delete'} ) ; 
  return response !== undefined ;
}

export const editCartItem = async ({cartItemId: id , quantity: quantity }: { cartItemId: number ,quantity: number}) => {
  const response  = await AxiosRequest( { url  ,  body : { id, quantity } ,  method : 'put'} ) ; 
  return response !== undefined ;
}