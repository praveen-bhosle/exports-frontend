import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getCartItems
} from '../api/CartProductsApi'

export const useCartQueryMutations = () => {
  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ['cartItems'], queryFn: getCartItems })

  const postMutation = useMutation({
    mutationFn: createCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCartItem,
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

  return { query, postMutation, deleteMutation, putMutation }
}
