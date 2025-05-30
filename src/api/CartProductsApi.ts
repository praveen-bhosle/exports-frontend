import axios from 'axios'
import type { CartItem } from '../interfaces/CartItem'

const url = process.env.backend_url + '/api/user/cart'

export const getCartItems = async () => {
  const cartItems: CartItem[] = await axios.get(url).then(res => res.data)
  return cartItems
}

export const createCartItem = async (productId: number) => {
  try {
    await axios.post(url + `/${productId}`).then(res => res.data)
  } catch (e) {
    console.error(JSON.stringify(e))
  }
}

export const deleteCartItem = async (cartItemId: number) => {
  try {
    await axios.delete(url + `${cartItemId}`).then(res => res.data)
  } catch (e) {
    console.error(JSON.stringify(e))
  }
}

export const editCartItem = async ({
  cartItemId: id,
  quantity: quanity
}: {
  cartItemId: number
  quantity: number
}) => {
  try {
    await axios.put(url, { id, quanity }).then(res => res.data)
  } catch (e) {
    console.error(JSON.stringify(e))
  }
}
