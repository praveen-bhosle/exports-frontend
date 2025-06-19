import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getCartItems
} from '../api/CartProductsApi'

export const useCartQuery = () => {
  const query = useQuery({ queryKey: ['cartItems'], queryFn: getCartItems }) ; 
  return { query }
}


export const useCartMutations = () => { 

  const queryClient = useQueryClient() ; 

  const postMutation = useMutation({
    mutationFn: createCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] })
    }
  })

  const deleteMutation = useMutation({
    mutationFn:  deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] })
    }
  })

  const putMutation = useMutation({
    mutationFn: editCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] })
    }
  }) 

  return  { postMutation , deleteMutation , putMutation } ;

}
