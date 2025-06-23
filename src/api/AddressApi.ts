import toast from "react-hot-toast";
import type { Address } from "../interfaces/Address"
import { AxiosRequest } from "./AxiosApiHandler"

const url = "/user/address" ;


export const getAddresses  =  async () => { 
   const response = await AxiosRequest( { url ,  method : 'get' } ) ;  
   if(response.status === 200  ) {   
      const addresses : Address[] = response.data ; 
      return { success: true , data : response.data , addresses } ;
   } ; 
   toast.error(response.data) ; 
   return { success :false ,  data :response.data }  ;
} 

export const createAddress = async (address:Address) => {  
   const response =  await AxiosRequest({url,  body : address ,  method : 'post'  })  ;  
   if(response.status === 201) {  return { success: true , data : response.data  } }  ; 
   toast.error(response.data) ; 
   return {  success :false ,  data :response.data }    
}


export const editAddress =  async  ( address : Address ) => {  
   const response =  await AxiosRequest({url,  body : address ,  method : 'put'  })  ; 
   if(response.status === 200) {   return { success: true , data : response.data } }  ; 
   toast.error(response.data) ; 
   return { success :false ,  data :response.data }
}

export const deleteAddress =  async ( id:number) => { 
      const response = await AxiosRequest({ url : url + '/' +  id , method : 'delete'}) ; 
      if(response.status === 200) {   return { success: true , data : response.data } }  ; 
      toast.error(response.data) ; 
      return { success :false ,  data :response.data }
}