import type { Address } from "../interfaces/Address"
import EditAddressForm from "./EditAddressForm";
import Modal from "./Modal";
import { useState } from "react";
import type { UseMutationResult } from "@tanstack/react-query";

const AddressViewCard = (
  {address ,  editMutation } :
  {address : Address , editMutation :  UseMutationResult<{ success: boolean; data: any }, Error, Address, unknown> }) =>  {
  const [editState ,setEditState] = useState(false) ; 
  return (
    <div className=" p-2 border-[1px] border-gray-500 dark:border-white text-sm flex flex-col justify-between">   
        <div className="flex flex-col "> 
                        <div className="font-bold"> { address.fullName}</div> 
                        <div className="text-xs font-bold sm:text-sm"> 
                          { address.addr1 && address.addr1 + ',' }  { address.addr2 && address.addr2 + ','  } { address.landmark && address.landmark + ',' } { address.city && address.city + ',' }  { address.state && address.state + ','}   { address.pincode && address.pincode + ','} {address.country && address.country }
                        </div>
        </div>
        <div> Phone number :  { address.mobileNumber } </div>
        <div className="flex gap-2 underline "> 
           <span className="cursor-pointer" onClick={ () => {  setEditState(true) ;  }} > Edit </span> 
        </div>
       { editState &&  <Modal children = {  <EditAddressForm address={ address}  stateFn={setEditState}  editMutation = { editMutation}  /> }  />} 
    </div>
  )
}

export default AddressViewCard