import type { Address } from "../interfaces/Address"
import { AxiosRequest } from "./AxiosApiHandler"

const url = "/user/address" ;

const createAddress = ({  } ) => { 
     
}

const getAddresses = () => { 

} 



const editAddress = () => { 
     
}

const deleteAddress = ( ) => { 

}
  
export const mutateAddresses = async ( { address  , action } : { address? : Address ,  action : string }) => {    
      const response = await AxiosRequest( { url ,   body : address ,  method : action }) ; 
      if(response === undefined || response.status !== 200 ) return false  ; 
      return  true ;   
}