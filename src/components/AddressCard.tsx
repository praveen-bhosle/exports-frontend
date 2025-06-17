import type { Address } from "../interfaces/Address"

const AddressCard = (address: Address) => {
  return (
    <div>  
        <div className="font-bold">  { address.fullName } </div> 
        <div> {address.addr1 } </div>
        <div> { address.addr2} </div>
        <div> {address.landmark} </div>
        <div> {address.city} </div>
        <div> {address.state} </div>
        <div> { address.country} </div>
        <div> { address.pincode} </div> 

        <div className="flex gap-2 underline"> 
           <span onClick={ () =>{  }} > Edit </span> 
           <span onClick={ () =>  { }}> Remove </span>
           { !address.isDefault   &&   (<span onClick={() => {  }}> Set as default   </span>) }  
        </div>
    </div>
  )
}

export default AddressCard