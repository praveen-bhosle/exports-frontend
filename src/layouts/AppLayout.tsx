import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { createCartItem, deleteCartItem, editCartItem, getCartItems } from "../api/CartProductsApi";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";

import { useEffect } from "react";




const AppLayout = () => {
    const queryClient = new QueryClient();
    const query = useQuery({ queryKey: ['cartItems'], queryFn: getCartItems });
    const postMutation = useMutation({ mutationFn: createCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });
    const deleteMutation = useMutation({ mutationFn: deleteCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });
    const putMutation = useMutation({ mutationFn: editCartItem, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cartItems'] }) } });



    useEffect

    return (
        <>
            <Header2 />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout