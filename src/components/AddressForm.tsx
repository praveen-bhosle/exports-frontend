
//import { useAddressQueryMutations } from "../hooks/useAdressQueryMutations";
import type { UseMutationResult } from "@tanstack/react-query";
import type { Address } from "../interfaces/Address";

import SubmitButton2 from "../UIComponents/SubmitButton2";
import toast from "react-hot-toast";

const AddressForm = ( { stateFn  ,  mutationFn  , firstAddress   } : { stateFn : React.Dispatch<React.SetStateAction<boolean>> ,  mutationFn  :  UseMutationResult<{
  success: boolean;
  data: any;
}, Error, Address, unknown> 
 , firstAddress : boolean 
}  ) => {

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
    const newAddress : Address = { fullName , mobileNumber , pincode  , addr1 , addr2 , landmark , city , state , country , isDefault : firstAddress ? true : isDefault  } ; 
    await postMutation.mutateAsync(newAddress) ; 
    stateFn(false) ;
  }

  return (

    <div className="flex flex-col gap-6 p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-lg mx-auto text-white">
    <h1 className="font-bold text-2xl text-blue-400 text-center">Add a new address</h1>
    <button className="w-full p-3 font-bold cursor-pointer border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
        Autofill your current location.
    </button>
    <form className="flex flex-col gap-4" onSubmit={(e) => { const myPromise = handleSubmit(e); toast.promise(myPromise, { loading: "Adding address...", success: "Address added." }); }}>
        <label htmlFor="fullname" className="text-gray-300"> Fullname <span className="text-red-500">*</span> </label>
        <input type="text" name="fullname" id="fullname" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="mobil_number" className="text-gray-300"> Mobile number <span className="text-red-500">*</span> </label>
        <input name="mobile_number" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="pincode" className="text-gray-300"> Pincode <span className="text-red-500">*</span> </label>
        <input name="pincode" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="addr1" className="text-gray-300"> Flat, House no., Building, Company, Apartment <span className="text-red-500">*</span> </label>
        <input name="addr1" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="addr2" className="text-gray-300"> Area, Street, Sector, Village </label>
        <input name="addr2" className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="landmark" className="text-gray-300"> Landmark </label>
        <input name="landmark" className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="city" className="text-gray-300"> Town/City <span className="text-red-500">*</span> </label>
        <input name="city" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="state" className="text-gray-300"> State <span className="text-red-500">*</span> </label>
        <input name="state" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="country" className="text-gray-300"> Country/Region <span className="text-red-500">*</span> </label>
        <input name="country" required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="isDefault" className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" name="isDefault" className="form-checkbox text-blue-500 rounded border-gray-600 bg-gray-900 focus:ring-blue-500 transition-colors" disabled={firstAddress} defaultChecked={firstAddress} />
            Make this my default address
        </label>
        <SubmitButton2 text="Add address"  />
    </form>
    <button onClick={() => stateFn(prev => !prev)} className="mt-4 px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors">
        Go back
    </button>
</div>
  )
}

export default AddressForm