import type { Address } from "../interfaces/Address"


import toast from "react-hot-toast";

import EditAddressForm from "./EditAddressForm";
import Modal from "./Modal";
import { useState } from "react";
import type { UseMutationResult } from "@tanstack/react-query";




const AddressCard = (
   {address ,  editMutation , deleteMutation } :
   {address : Address , editMutation :  UseMutationResult<{ success: boolean; data: any }, Error, Address, unknown>  , deleteMutation :   UseMutationResult<{ success: boolean; data: any }, Error, number, unknown>}) =>  {
  const [editState ,setEditState] = useState(false) ; 
  
  const handleRemove = async  () => { 
       if(address.id) { 
         const response  =  await  deleteMutation.mutateAsync( address.id ) ; 
         if(!response.success) {  return  Promise.reject("error") ; } 
      }  
  }

  const handleSetAsDefault = async () => { 
       if(address.id) await editMutation.mutateAsync( { ...address , isDefault : true  }) ; 
  }

  return (
    <div className=" p-2 border-[1px] border-gray-500 dark:border-white text-sm flex flex-col justify-between max-w-[300px] rounded-[5px]">  
        <div className="font-bold">  { address.fullName } </div> 
        <div> {address.addr1 } </div>
        <div> { address.addr2} </div>
        <div> {address.landmark}  </div>
        <div> {address.city} , {address.state} , { address.pincode}  </div>
        <div> { address.country} </div>
        <div> Phone number :  { address.mobileNumber } </div>
         
        <div className="flex gap-2 underline "> 
           <span className="cursor-pointer" onClick={ () => {  setEditState(true) ;  }} > Edit </span> 
           <span className="cursor-pointer" onClick={ async () => {  const myPromise =  handleRemove() ;  toast.promise( myPromise ,  { loading :"Deleting address."  , success : "Message deleted successfully." ,  error : ""  }  ) ;  } }> Remove </span>
           { !address.isDefault   &&   (<span className="cursor-pointer" onClick={() => { const myPromise = handleSetAsDefault() ;    toast.promise( myPromise , { loading : "Setting address as default."  ,  success : "Address set as default."    })} }> Set as default   </span>) }  
        </div>

        
       
       { editState &&  <Modal children = {  <EditAddressForm address={ address}  stateFn={setEditState}  editMutation = { editMutation}  /> }  />} 

    </div>
  )
}

export default AddressCard