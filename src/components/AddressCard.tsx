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
   <div className="p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 text-sm flex flex-col justify-between max-w-sm">   
        <div className="font-bold text-lg text-blue-400 mb-2">  { address.fullName } </div> 
        <div className="text-gray-300"> {address.addr1 } </div>
        <div className="text-gray-300"> { address.addr2} </div>
        <div className="text-gray-300"> {address.landmark}  </div>
        <div className="text-gray-300"> {address.city} , {address.state} , { address.pincode}  </div>
        <div className="text-gray-300 mb-4"> { address.country} </div>
        <div className="text-gray-400"> Phone number :  { address.mobileNumber } </div>
         
        <div className="flex gap-4 underline text-blue-400 mt-4"> 
           <span className="cursor-pointer hover:text-blue-300 transition-colors" onClick={ () => {  setEditState(true) ;  }} > Edit </span> 
           <span className="cursor-pointer hover:text-red-400 transition-colors" onClick={ async () => {  const myPromise =  handleRemove() ;  toast.promise( myPromise ,  { loading :"Deleting address."  , success : "Address deleted successfully." ,  error : ""  }  ) ;  } }> Remove </span>
           { !address.isDefault   &&   (<span className="cursor-pointer hover:text-blue-300 transition-colors" onClick={() => { const myPromise = handleSetAsDefault() ;    toast.promise( myPromise , { loading : "Setting address as default."  ,  success : "Address set as default."    })} }> Set as default   </span>) }  
        </div>
       { editState &&  <Modal children = {  <EditAddressForm address={ address}  stateFn={setEditState}  editMutation = { editMutation}  /> }  />} 

    </div>
  )
}

export default AddressCard