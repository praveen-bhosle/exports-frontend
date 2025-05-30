import './App.css'
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { deleteCartItem, editCartItem, getCartItems } from "./api/CartProductsApi"
import { createCartItem } from './api/CartProductsApi';

function MainApp() {
    const queryClient = new QueryClient();
    const query = useQuery({ queryKey: ['cartItems'], queryFn: getCartItems });
    const postMutation = useMutation({ mutationFn: createCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });
    const deleteMutation = useMutation({ mutationFn: deleteCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });
    const putMutation = useMutation({ mutationFn: editCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });
    return (
        <>
        </>
    )
}

export default MainApp
