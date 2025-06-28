import { useNavigate } from "react-router-dom";

import CartItemCard from "./CartItemCard";
import { useStore } from "../state/Store";
import { useCartQuery } from "../hooks/useCartQueryMutations";
import { CartData } from "../utils/CartData";
import { useTheme } from "../hooks/useTheme";
import CartItemCardLoader from "./CartItemCardLoader";
import ButtonLoader from "./ButtonLoader";

const Cart = () => { 

    const {query} = useCartQuery() ; 

    const {theme} = useTheme() ;

    const setIsCartOpen  = useStore( (state) => state.setIsCartOpen ); 

    const navigate = useNavigate() ; 

    if(query.status ==='pending') { 
        return ( 
        
            <div className='px-4 py-2  rounded-md z-50'>
                <div className='mb-2  align-center flex'>
                    <span className='text-black dark:text-white font-bold mr-2'>
                        Shopping Cart 
                    </span>
                    <button onClick={() => setIsCartOpen(false)}  >
                        <img src='/close.svg' width={25} height={25} alt='close' style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />
                    </button>
                </div>

                <div className='grid grid-cols-1 gap-2  lg:grid-cols-2 xl:grid-cols-3'>
                    <CartItemCardLoader /> 
                    <CartItemCardLoader />
                    <CartItemCardLoader />
                </div>

                <div className='mt-2 flex justify-between p-2 align-center'>
                        <div className=' font-extrabold  dark:text-white  border-white   align-center  '>
                            <span className='block  relative top-[6px] '>
                              <span> <ButtonLoader  />  </span>
                            </span>
                        </div>
    
                        <div className='rounded-md '> 
                            <ButtonLoader />
                        </div>
                 </div>
         </div>
        )
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
                        <span className='text-black dark:text-white font-bold mr-2'>
                            Shopping Cart {`(${totalItems})`}
                        </span>
                        <button onClick={() => setIsCartOpen(false)}  >
                            <img src='/close.svg' width={25} height={25} alt='close' style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />
                        </button>
                    </div>
    
                    <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3'>
                        {cartItems?.map( (item,index) => <CartItemCard key={ index} cartItem={item} />)}
                    </div>
    
                    <div className='mt-2 flex justify-between p-2 align-center'>
                        <div className=' font-extrabold  dark:text-white  border-white   align-center  '>
                            <span className='block  relative top-[6px] '>
                                Total Price: Rs.{totalCost}.00 
                            </span>
                        </div>
    
                        <div  onClick={ () => { setIsCartOpen(false) ;  navigate('/app/checkout')  }   }
                            className='bg-white text-black text-lg py-1  px-2 rounded-md font-bold cursor-pointer'
                        >
                            CheckOut
                    </div>
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