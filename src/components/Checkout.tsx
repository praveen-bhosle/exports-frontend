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
import { AddCommas } from "@/utils/AddCommas";

const Checkout  = () => {
 
  const {query}  = useCartQuery() ;   
  const [ shippingAddress,setShippingAddress ] = useState<null|Address> (null) ; 
  const [ openModal , setOpenModal] = useState(false) ; 
  const [ selection , setSelection ] = useState(false); 
  const addressQueryMutations  = useAddressQueryMutations() ; 
  const addressQuery = addressQueryMutations.query ;  
  const navigate = useNavigate() ; 

  if(query.status === 'pending' || addressQuery.status === 'pending' )   {  return <div className="h-[80vh] w-full flex justify-center items-center"> Loading Checkout. </div>  } 
  else if( query.status === 'error' || addressQuery.status === 'error' ) {  return <div className="h-[80vh] w-full flex justify-center items-center"> Error fetching checkout screen.  <button onClick={()=> window.location.reload()}> Try again</button> </div> }
  const data = query.data ; 
  const addressData = addressQuery.data ;
  if(!data.success || !data.cartItems ||  !addressData.success || !addressData.addresses  )  { 
  return( 
  <div className="h-[80vh] w-full flex justify-center items-center">  Error fetching products.  
    <button onClick={()=> window.location.reload()}> Try again</button>
  </div>) } 
  const items = data.cartItems ; 
  const addresses = addressData.addresses ;
  const { totalItems , totalCost } = CartData(items) ;
  const { defaultAddress  } = AddressUtil(addresses) ; 
  console.log(addresses.length)
  if(!shippingAddress && addresses.length!==0 ) { 
    setShippingAddress(defaultAddress) ;
  }
  return  (    
<> 
<div className="flex flex-col gap-6 p-6 bg-gray-900 text-white rounded-xl shadow-2xl">
    <div className='font-bold text-3xl text-blue-400'>
        Checkout
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 border border-gray-700 rounded-lg p-4'>
        {items?.map((item, index) => <CartItemCard key={index} cartItem={item} />)}
    </div>
    <div className='p-4 bg-gray-800 rounded-lg'>
        <div className='font-bold text-xl'>Payment Method</div>
        <div className='text-sm text-gray-400'>All transactions are secure and encrypted.</div>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
        <div className='flex justify-between text-sm text-gray-400 mb-1'>
            <span>Subtotal ({totalItems} items)</span>
            <span>Rs.{AddCommas(totalCost)}</span>
        </div>
        <div className='flex justify-between text-sm text-gray-400 mb-1'>
            <span>Shipping</span>
            <span>0</span>
        </div>
        <div className='flex justify-between font-bold text-lg text-white pt-2 border-t border-gray-700 mt-2'>
            <span>Total</span>
            <span>Rs.{AddCommas(totalCost)}</span>
        </div>
    </div>
    <div className="border border-gray-700 p-4 rounded-lg bg-gray-800">
        {addresses.length === 0 ?
            <div className="button text-center cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors" onClick={() => setOpenModal(true)}>
                Add a new address
            </div>
            : selection ?
                <div>
                    <div className="flex flex-col gap-4">
                        {addresses.map((e, index) =>
                            <div className="flex items-start gap-3" key={index}>
                                <input
                                    type="radio"
                                    checked={shippingAddress === e}
                                    onChange={() => setShippingAddress(e)}
                                    className="form-radio h-5 w-5 text-blue-600 bg-gray-900 border-gray-600 focus:ring-blue-500"
                                />
                                <AddressViewCard address={e} editMutation={addressQueryMutations.editMutation} />
                            </div>
                        )}
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="button text-center cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors" onClick={() => setOpenModal(true)}>
                            Add a new address
                        </div>
                        <div className="button text-center cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors" onClick={() => setSelection(false)}>
                            Deliver to this address
                        </div>
                    </div>
                </div>
                :
                <div className="p-4 flex justify-between items-center rounded-lg bg-gray-900">
                    {shippingAddress &&
                        <div className="flex flex-col gap-2 text-gray-300">
                            <div className="font-bold text-lg text-white">Delivering to {shippingAddress.fullName}</div>
                            <div className="text-sm">
                                {shippingAddress.addr1 && shippingAddress.addr1 + ','} {shippingAddress.addr2 && shippingAddress.addr2 + ','} {shippingAddress.landmark && shippingAddress.landmark + ','} {shippingAddress.city && shippingAddress.city + ','} {shippingAddress.state && shippingAddress.state + ','} {shippingAddress.pincode && shippingAddress.pincode + ','} {shippingAddress.country && shippingAddress.country}
                            </div>
                        </div>
                    }
                    <div className="cursor-pointer font-bold h-min text-blue-400 hover:text-blue-300 transition-colors" onClick={() => setSelection(true)}>
                        Change
                    </div>
                </div>
        }
    </div>
    <button
        onClick={async () => {
            DisplayRazorpay({ amount: totalCost, name: 'praveen', email: 'praveenbhosle1622@gmail.com', phone: '7349272101' }).then(() => navigate('/app/orders'));
        }}
        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl rounded-lg px-6 py-3 font-bold'>
        Proceed to pay
    </button>
</div>


{   openModal &&  
    <Modal > 
      <AddressForm stateFn={ setOpenModal } mutationFn={addressQueryMutations.postMutation}  firstAddress = { addresses.length === 0 ? true : false  }   /> 
     </Modal> 
}  
</>       
)
}

export default Checkout ; 
