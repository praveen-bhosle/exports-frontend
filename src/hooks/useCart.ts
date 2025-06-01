import { useCartQueryMutations } from './useCartQueryMutations'

export const useCart = () => {
  const { query } = useCartQueryMutations()
  const cartItems = query.data?.cartItems ? query.data.cartItems : [] ; 
  const totalCost =   cartItems.reduce(
    (count, item) => count + item.product.price * item.quantity,
    0
  ) ; 

  const totalItems = cartItems?.length 

  return { cartItems, totalCost, totalItems }
}
