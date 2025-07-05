import type { Address } from "@/interfaces/Address";


export const AddressUtil = ( addresses: Address[]) => { 
    
  let defaultAddress  : Address | null = null ; 

  const remainingAddresses: Address[ ] = [ ] ;  

  for ( const address of  addresses ) { 
    if(address.isDefault) { defaultAddress  = address ;  }
    else { remainingAddresses.push(address) }
  }

  return { defaultAddress , remainingAddresses} ; 
}