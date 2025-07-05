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
    <div> 
    <div className="text-xl font-bold">Your Addresses</div>    
    { defaultAddress && 
    <>
     <span className="text-lg font-bold"> Default Address  </span>
      <div>
        <AddressCard address={ defaultAddress }  editMutation = { editMutation} deleteMutation = { deleteMutation} />
      </div>
    </>
     } 
    <br/> 
    <hr/>
    <br/>   
    <div className="grid sm:grid-cols-2 gap-2  md:grid-cols-3 xl:grid-cols-4">  
      { remainingAddresses.map( (address,index) => { if(address) return (<AddressCard address={ address }   key={index}  editMutation = { editMutation} deleteMutation = { deleteMutation}  />) }  ) }   
    </div>
    <button  onClick={ () => setAddstate(true) } className="button">  Add an address  </button>     
    </div>
     {addState  && <Modal children= {<AddressForm  stateFn = { setAddstate } mutationFn  = { postMutation} firstAddress = { firstAddress}   />} />  } 
    </>
  )
  }
}

export default Addresses 
