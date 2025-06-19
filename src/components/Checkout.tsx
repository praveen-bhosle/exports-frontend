
import { useState } from "react";
import { useCartQuery } from "../hooks/useCartQueryMutations"
import { CartData } from "../utils/CartData";
import CartItemCard from "./CartItemCard";

const Checkout  = () => {
 
  const {query}  = useCartQuery() ;   

  const [ gateway ,setGateway ] = useState('') ;

  if(query.status === 'pending') { return <div> Loading products </div>  } 

  else if( query.status === 'error') {  return <div> Error fetching products.  <button onClick={()=> window.location.reload()}> Try again</button> </div> }

  const data = query.data ; 
  if(!data.success || !data.cartItems)  
  return( 
  <div>  Error fetching products.  
    <button onClick={()=> window.location.reload()}> Try again</button>
  </div>)

  const items = data.cartItems ; 
  const { totalItems , totalCost } = CartData(items) ;

  return  ( 
                <div className='flex flex-col gap-4'>
                    <div className='font-bold text-2xl'>
                            Checkout
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 border-2'>
                        {items?.map( (item,index) => <CartItemCard key={ index} cartItem={item} />)}
                    </div>
                    
                    <div className='p-2 border-2 border-gray-200' >
                        <div className='font-bold text-black'> Payment Method </div>
                        <div className='text-xs'>All transactions are secure and encrypted.</div>
                        <div>
                            <form>
                                <label className='block w-full'>
                                   <input type='radio' name='gateway' value='razorpay' onClick={() => setGateway('Razorpay')} />
                                   <span> Razorpay  </span>
                                </label>
                                <label className='block w-full'>
                                   <input type='radio' name='gateway' value='paypal' onClick={() => setGateway('Paypal')} />
                                   <span> Paypal </span>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div>
                       <div className='flex justify-between'>
                          <div className='text-xs'> Subtotal {totalItems} items </div>
                          <div className='text-xs'>Rs.{totalCost}</div>
                       </div>
                       <div className='flex justify-between'>
                         <div className='tex-xs'> Shipping </div>
                         <div className='text-xs'> 0 </div>
                       </div>
                       <div className='flex justify-between'>
                         <div className='text-lg font-bold'> Total </div>
                         <div className='text-lg font-bold'>Rs.{totalCost} </div>
                       </div>
                     </div>
                    <button  className='bg-black text-white text-xl rounded-[12px] px-4  ' onClick={ () => {   }} > Proceed to pay </button>
                </div>           
  )
}

export default Checkout