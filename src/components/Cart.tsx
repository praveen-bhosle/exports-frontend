import { Link } from "react-router-dom";

import CartItemCard from "./CartItemCard";
import { useStore } from "../state/Store";
import { useCartQueryMutations } from "../hooks/useCartQueryMutations";
import { CartData } from "../utils/CartData";

const Cart = () => { 

    const {query} = useCartQueryMutations() ;

    const setIsCartOpen  = useStore( (state) => state.setIsCartOpen ); 

    if(query.status ==='pending') { 
        return ( <div>Loading cart products.</div>)
    }
    else if( query.status === 'error') { 
        return (<div>Error fetching Cart Products</div>)
    }
    else {  
        const { cartItems } = query.data ;
        if(cartItems!==undefined) { 
             const { totalItems , totalCost } = CartData(cartItems) ;  
             return (
             <div className="">
                <div className='px-4 py-2  rounded-md z-50'>
                    <div className='mb-2  align-center flex'>
                        <span className='text-black font-bold mr-2'>
                            Shopping Cart {`(${totalItems})`}
                        </span>
                        <button
                            onClick={() => setIsCartOpen(false)} 
                            className='hover:bg-gray-100 rounded-md'
                        >
                            <img src='/close.svg' width={25} height={25} alt='close' />
                        </button>
                    </div>
    
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                        {cartItems?.map( (item,index) => <CartItemCard key={ index} cartItem={item} />)}
                    </div>
    
                    <div className='mt-2 flex bg-black justify-between p-2 align-center'>
                        <div className=' font-extrabold text-white border-white   align-center  '>
                            <span className='block  relative top-[6px] '>
                                Total Price: Rs.{totalCost}.00 
                            </span>
                        </div>
    
                        <Link to="/app/checkout"
                            className='bg-white text-black text-lg py-1  px-2 rounded-md font-bold'
                        >
                            CheckOut
                    </Link>
                </div>
              </div>
             </div>
             )
        } 
        else { 
          return (<div>Error fetching Cart Products</div>)
        }
    } 
} 

export default Cart 