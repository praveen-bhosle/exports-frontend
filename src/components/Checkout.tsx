import { useCartQuery } from "../hooks/useCartQueryMutations"
import { CartData } from "../utils/CartData";
import CartItemCard from "./CartItemCard";
import { DisplayRazorpay } from "../utils/DisplayRazorpay";
import { useNavigate } from "react-router-dom";
import { useAddressQueryMutations } from "@/hooks/useAdressQueryMutations";
import { AddressUtil } from "@/utils/AddressUtil";
import {  useState } from "react";
import type { Address } from "@/interfaces/Address";
import Modal from "./Modal";
import AddressViewCard from "./AdddressViewCard";
import AddressForm from "./AddressForm";

const Checkout  = () => {
 
  const {query}  = useCartQuery() ;   

 // const [ gateway ,setGateway ] = useState('') ;

  const [ shippingAddress,setShippingAddress ] = useState<null|Address> (null) ; 
   
  const [ openModal , setOpenModal] = useState(false) ; 
  const [ selection , setSelection ] = useState(false); 
  
  const addressQueryMutations  = useAddressQueryMutations() ; 
 
  const addressQuery = addressQueryMutations.query ;   



  if(query.status === 'pending' || addressQuery.status === 'pending' ) { return <div> Loading Checkout. </div>  } 

  else if( query.status === 'error' || addressQuery.status === 'error' ) {  return <div> Error fetching products.  <button onClick={()=> window.location.reload()}> Try again</button> </div> }

  const data = query.data ; 
  const addressData = addressQuery.data ;
  if(!data.success || !data.cartItems ||  !addressData.success || !addressData.addresses  )  
  return( 
  <div>  Error fetching products.  
    <button onClick={()=> window.location.reload()}> Try again</button>
  </div>)

  const items = data.cartItems ; 
  const addresses = addressData.addresses ;
  const { totalItems , totalCost } = CartData(items) ;
  const navigate = useNavigate() ; 
 
  const { defaultAddress  } = AddressUtil(addresses) ; 

  if(!shippingAddress) { 
    setShippingAddress(defaultAddress) ;
  }


  return  (    
    <> 
                <div className='flex flex-col gap-4'>
                    <div className='font-bold text-2xl'>
                            Checkout
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 border-2'>
                        {items?.map( (item,index) => <CartItemCard key={ index} cartItem={item} />)}
                    </div>
                    
                    <div className='p-2 border-2 border-gray-200' >
                        <div className='font-bold text-black dark:text-white'  > Payment Method </div>
                        <div className='text-xs'>All transactions are secure and encrypted.</div>
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
                <div className="border-[1px] p-2 "> 
                  { addresses.length === 0 ?  
                    <div className="button text-center" onClick = { () => setOpenModal(true)  } > Add a new  address </div>
                  :selection ? 
                    <div> 
                      <div className="flex flex-col gap-2"> { addresses.map(  (e,index) => <div className="flex  gap-2"> <input type="radio"  checked = {shippingAddress === e }  onClick = { () => { setShippingAddress(e) } } />   <AddressViewCard  address={ e } key={ index} editMutation={ addressQueryMutations.editMutation } /> </div> ) }  </div> 
                      <div className="button text-center" onClick = { () => setOpenModal(true)  } > Add a new  address </div>
                      <div className="button text-center" onClick={ ( ) => setSelection(false)} > Deliver to this address </div>
                    </div>
                   :  
                     <div className="dark:bg-black p-2  flex justify-between"> 
                      { shippingAddress  && 
                      <div className="flex flex-col gap-2"> 
                        <div className="font-bold">Delivering to { shippingAddress.fullName}</div> 
                        <div className="text-xs font-bold sm:text-sm"> 
                          { shippingAddress.addr1 && shippingAddress.addr1 + ',' }  { shippingAddress.addr2 && shippingAddress.addr2 + ','  } { shippingAddress.landmark && shippingAddress.landmark + ',' } { shippingAddress.city && shippingAddress.city + ',' }  {shippingAddress.state && shippingAddress.state + ','}   { shippingAddress.pincode && shippingAddress.pincode + ','} { shippingAddress.country && shippingAddress.country }
                        </div>
                      </div>
                      }
                      <div className="cursor-pointer font-bold h-min" onClick={ () => { setSelection(true)}} > Change  </div>
                      </div> 
                  }
                  </div>
                    <div>  
                    </div>
                    <button  
                    onClick={ async () => {     DisplayRazorpay ( { amount : totalCost , name : 'praveen' , email : 'praveenbhosle1622@gmail.com', phone : '7349272101' }).then( () => navigate('/app/orders') ) } 
                            }   
                    className='bg-black text-white text-xl rounded-[12px] px-4' > Proceed to pay </button>
                </div>   


                {  openModal &&  
                <Modal > 
                  <AddressForm stateFn={ setOpenModal } mutationFn={addressQueryMutations.postMutation}  firstAddress = { false }   /> 
                 </Modal> 
                }  
    </>       
  )
}

export default Checkout ; 




/* 
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
*/ 