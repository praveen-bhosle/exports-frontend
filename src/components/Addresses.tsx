import { useAddressQueryMutations } from "../hooks/useAdressQueryMutations"
import AddressCard from "./AddressCard";

import Modal from "./Modal";
import AddressForm from "./AddressForm"; 
import { useState } from "react";

const Addresses = () => { 
  const { query ,  postMutation  , editMutation , deleteMutation  } = useAddressQueryMutations( ) ;   
  const [ addState ,  setAddstate] = useState(false) ;  

  if(query.status === 'success'  && query.data.addresses  ) { 
  return ( 
    <>
    <div> 
    <div className="text-xl font-bold">Your Addresses</div>     
    <div className="grid sm:grid-cols-2 gap-2  md:grid-cols-3 xl:grid-cols-4">  
      { query.data.addresses.map( (address,index) =>  <AddressCard address={ address }   key={index}  editMutation = { editMutation} deleteMutation = { deleteMutation}  />)} 
    </div>
    <button  onClick={ () => setAddstate(true)  } className="button">  Add an address  </button>     
    </div>
     {addState  && <Modal children= {<AddressForm  stateFn = { setAddstate } mutationFn  = { postMutation}   />} />  } 
    </>
  )
  }
}

export default Addresses 
