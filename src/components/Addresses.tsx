import { useAddressQueryMutations } from "../hooks/useAdressQueryMutations"
import AddressCard from "./AddressCard";

import Modal from "./Modal";
import AddressForm from "./AddressForm"; 
import { useState } from "react";
import { ButtonLoader2 } from "./ButtonLoader2";
import AddressCardLoader from "./AddressCardLoader";
import { AddressUtil } from "@/utils/AddressUtil";


const Addresses = () => { 
  const { query ,  postMutation  , editMutation , deleteMutation  } = useAddressQueryMutations( ) ;   
  const [ addState ,  setAddstate] = useState(false) ;  

  if(query.status==='pending') { 
    return ( 
      <div> 
      <div className="text-xl font-bold">Your Addresses</div>     
      <div className="grid gap-4  sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4"> 
        <AddressCardLoader /> 
        <AddressCardLoader /> 
        <AddressCardLoader /> 
        <AddressCardLoader /> 
        <AddressCardLoader /> 
        <AddressCardLoader /> 
      </div>
      <br/> 
      <ButtonLoader2  />
      </div>
    )
  }

  if(query.status === 'success'  && query.data.addresses  ) {  
  
  const firstAddress = query.data.addresses.length === 0  ? true : false ; 
 
  const { defaultAddress , remainingAddresses} = AddressUtil(query.data.addresses) ;


  return ( 
    <>
    <div className="flex flex-col gap-6 p-4 md:p-8 bg-gray-900 text-white min-h-screen">
    <div className="text-3xl font-extrabold text-blue-400">Your Addresses</div>
    {defaultAddress && (
        <>
            <span className="text-xl font-bold text-gray-300">Default Address</span>
            <div>
                <AddressCard address={defaultAddress} editMutation={editMutation} deleteMutation={deleteMutation} />
            </div>
        </>
    )}
    <hr className="my-4 border-gray-700" />
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {remainingAddresses.map((address, index) => {
            if (address) return (<AddressCard address={address} key={index} editMutation={editMutation} deleteMutation={deleteMutation} />);
            return null;
        })}
    </div>
    <button onClick={() => setAddstate(true)} className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 self-start">
        Add an address
    </button>
    {addState && <Modal children={<AddressForm stateFn={setAddstate} mutationFn={postMutation} firstAddress={firstAddress} />} />}
    </div>
    </>
  )
  }
}

export default Addresses 
