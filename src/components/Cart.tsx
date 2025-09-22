import { useNavigate } from "react-router-dom";

import CartItemCard from "./CartItemCard";
import { useStore } from "../state/Store";
import { useCartQuery } from "../hooks/useCartQueryMutations";
import { CartData } from "../utils/CartData";
import { useTheme } from "../hooks/useTheme";
import CartItemCardLoader from "./CartItemCardLoader";
import ButtonLoader from "./ButtonLoader";
import { useEffect, useState } from "react";
import type  { CartItem } from "@/interfaces/CartItem";

const Cart = () => { 

    const {query} = useCartQuery() ; 

    const {theme} = useTheme() ;

    const setIsCartOpen  = useStore( (state) => state.setIsCartOpen ); 

    const navigate = useNavigate() ;  

  //  const [totalItems , setTotalItems] = useState(0) ; 
    const [totalCost  , setTotalCost ] = useState(0) ;  

    const [cartItems , setCartItems ]  = useState<CartItem[]>() ;
    

    useEffect( () => { 
        if(query.status === "success") { 
            const { cartItems } = query.data ;
            setCartItems(cartItems) ; 
            let cost = 0 ;
            let total = 0 ; 
            let data ; 
            if(cartItems!==undefined) { 
                data = CartData(cartItems) ;
                cost = data.totalCost ; 
                total = data.totalItems ; 
                setTotalCost(cost) ; 
              //  setTotalItems(total) ;  
            }  
        }
    } , [query.status] )

    return (     
    <div className='bg-gray-800 border border-gray-700 h-full flex flex-col justify-between'>
        <div> 
        <div className='mb-4 flex items-center justify-between'>
            <span className='text-white text-2xl font-bold'>
                Shopping Cart
            </span>
            <button onClick={() => setIsCartOpen(false)} className="rounded-full p-2 hover:bg-gray-700 transition-colors">
                <img src='/close.svg' width={25} height={25} alt='close' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            </button>
        </div>
        <div className="h-[85vh]"> 
        {query.status === "pending" ? 
        <>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
                <CartItemCardLoader />
                <CartItemCardLoader />
                <CartItemCardLoader />
            </div>
            <div className='mt-6 flex justify-between items-center p-2'>
                <div className='font-extrabold text-blue-400'>
                    <span><ButtonLoader /></span>
            </div>
            <div className='rounded-md'>
                <ButtonLoader />
            </div>
            </div>
        </> 
        : 
        query.status === "success" ? 
        <>
        <div className='overflow-y-auto h-full'>
            {cartItems?.map((item, index) => <CartItemCard key={index} cartItem={item} />)}
        </div>    
        
        </>  : 
        <div className="flex justify-center items-center w-full h-full p-4 bg-gray-900 text-red-400 text-lg font-semibold rounded-xl shadow-lg border border-red-700">
        Error fetching Cart Products
        </div>  
        }
        </div> 
        </div> 
        <div className='mt-6 flex justify-between items-center p-2'>
            <div className='font-extrabold text-blue-400'>
                <span className='block'>
                    Rs.{totalCost}.00
                </span>
            </div>
            <div onClick={() => { setIsCartOpen(false); navigate('/app/checkout'); }}className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-2 px-6 rounded-lg font-bold cursor-pointer'>
                CheckOut
            </div>
        </div>
    </div>
    )

}
          
export default Cart 