
//import { useAddressQueryMutations } from "../hooks/useAdressQueryMutations";
import type { UseMutationResult } from "@tanstack/react-query";
import type { Address } from "../interfaces/Address";

import SubmitButton2 from "../UIComponents/SubmitButton2";
import toast from "react-hot-toast";

const AddressForm = ( { stateFn  ,  mutationFn   } : { stateFn : React.Dispatch<React.SetStateAction<boolean>> ,  mutationFn  :  UseMutationResult<{
  success: boolean;
  data: any;
}, Error, Address, unknown> }  ) => {

  const postMutation =  mutationFn ;


  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault() ;
    const formData      = new FormData(e.currentTarget) ; 
    const fullName      = formData.get('fullname')?.toString()       || '' ; 
    const mobileNumber = formData.get('mobile_number')?.toString()  || '' ; 
    const pincode       = formData.get('pincode')?.toString()        || '' ;
    const addr1         = formData.get('addr1')?.toString()          || '' ; 
    const addr2         = formData.get('addr2')?.toString()          || '' ; 
    const landmark      = formData.get('landmark')?.toString()       || '' ; 
    const city          = formData.get('city')?.toString()           || '' ;
    const state         = formData.get('state')?.toString()          || '' ; 
    const country       = formData.get('country')?.toString()        || '' ; 
    const isDefault     = formData.get('isDefault')?.toString() ? true : false  ;   
    const newAddress : Address = { fullName , mobileNumber , pincode  , addr1 , addr2 , landmark , city , state , country , isDefault  } ; 
    await postMutation.mutateAsync(newAddress) ; 
    stateFn(false) ;
  }

  return (

    <div className="flex flex-col">
    <h1 className="font-bold text-xl"> Add a new address </h1> <br/> 
    <button className="w-full  p-2 font-bold cursor-pointer border-2" >Autofill your current location.</button> 

    <form  className="form"  onSubmit={ (e) => {  const myPromise = handleSubmit(e)  ;  toast.promise( myPromise ,  { loading  : "Adding address." }) }  } > 
        <label htmlFor="fullname"  > Fullname * </label> 
        <input type="text" name="fullname"  id="fullname" required />
        <label htmlFor="mobil_number"> Mobile number *   </label>
        <input name="mobile_number" required  /> 
        <label htmlFor="pincode"> Pincode * </label>
        <input name="pincode"  required />
        <label htmlFor="addr1"> Flat, House no., Building, Company, Apartment * </label>
        <input name="addr1" required  /> 
        <label htmlFor="addr2"> Area, Street, Sector, Village </label>
        <input  name="addr2" /> 
        <label htmlFor="landmark"> Landmark </label>
        <input  name="landmark" />
        <label htmlFor="city"> Town/City *  </label>
        <input name="city" required  /> 
        <label htmlFor="state"> State *  </label>
        <input  name="state" required />
        <label htmlFor="country">  Country/Region *  </label>
        <input name="country" required />
        <label htmlFor="isDefault">Make this my default address <input type="checkbox" name="isDefault"  className="relative top-[2px] left-[2px]" />   </label>
        <SubmitButton2 text="Add address" /> 
    </form>

    
    <button onClick={ () => stateFn( prev => !prev )    }  className="cursor-pointer font-bold bg-black text-white rounded-[5px]" > Go back </button>

    </div>
  )
}

export default AddressForm