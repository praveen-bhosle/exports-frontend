
import { useCartQueryMutations } from './useCartQueryMutations'

export const useCart = () => {
  const { query } = useCartQueryMutations() 
  const cartItems = query.data?.cartItems ? query.data.cartItems : [] ; 
  let  totalCost = 0 ; 
  for(  let i = 0 ; i<cartItems.length ; i++ ) {   
    const item = cartItems[i];
    if (item === undefined || item === null)  continue; 
    const product = item.product;
    if (product === undefined || product === null)  continue; 
    const price = product.price;
    if (price === undefined || price === null)  continue; 
    totalCost += price;
  const totalItems = cartItems?.length 
  return { cartItems, totalCost, totalItems }  
} 
}
