import type { CartItem } from "../interfaces/CartItem";

export const CartData  = ( cartItems : CartItem[] ) =>  { 
    let  totalCost = 0 ; 
    for(  let i = 0 ; i<cartItems.length ; i++ ) {   
      const item = cartItems[i];
      if (item === undefined || item === null)  continue; 
      const product = item.product;
      if (product === undefined || product === null)  continue; 
      const price = product.cost;
      if (price === undefined || price === null)  continue; 
      totalCost += price * cartItems[i].quantity  ; }
    const totalItems = cartItems?.length 
   return { totalCost, totalItems }  
}