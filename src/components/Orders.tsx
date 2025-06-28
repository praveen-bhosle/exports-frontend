import { useQuery } from "@tanstack/react-query"
import { getUserOrders } from "../api/OrdersApi";
import type { Order } from "../interfaces/Order";

import { useState } from "react";
import { FilterOrder } from "../utils/FilterOrders";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "./ButtonLoader";
import TextLoader from "./TextLoader";

const Orders = () => { 
 
    const query =  useQuery( { queryKey : ['orders'] , queryFn : getUserOrders })  ; 
    
    const [filter ,setFilter] = useState('ALL')  ;    

    const navigate = useNavigate() ;  

    if(query.status === 'pending') {  
    return (
      <div>
        <div className="font-bold text-2xl mb-4"> My Orders   </div> 
        <div className="flex mb-2 gap-8 ">   
          <ButtonLoader/>   <ButtonLoader/>   <ButtonLoader/>   <ButtonLoader/>   <ButtonLoader/> 
        </div> 
      <div className="p-4"> 
      <table className='styled-table'> 
      <thead> <tr> <th> Id </th>  <th>Price</th> <th>Status</th>  <th>Created At</th>   </tr> </thead> 
       <tbody> <tr>  <td><TextLoader/></td>  <td><TextLoader/></td> <td><TextLoader/></td> <td><TextLoader/></td>  </tr>  </tbody> 
       <tbody> <tr>  <td><TextLoader/></td>  <td><TextLoader/></td> <td><TextLoader/></td> <td><TextLoader/></td>  </tr>  </tbody> 
       <tbody> <tr>  <td><TextLoader/></td>  <td><TextLoader/></td> <td><TextLoader/></td> <td><TextLoader/></td>  </tr>  </tbody> 
       <tbody> <tr>  <td><TextLoader/></td>  <td><TextLoader/></td> <td><TextLoader/></td> <td><TextLoader/></td>  </tr>  </tbody> 
       <tbody> <tr>  <td><TextLoader/></td>  <td><TextLoader/></td> <td><TextLoader/></td> <td><TextLoader/></td>  </tr>  </tbody> 
      </table>
      </div>
      </div>)
    }
    if( query.status === 'error'   ) { 
    return (
        <div>
          <div className="font-bold text-xl"> Orders   </div>
          <div className="">  Error loading products. </div> 
        </div> )
    } 

    if( !query.data) { 
        return ( 
        <div>
            <div className="font-bold text-xl"> Orders   </div>
            <div className="">  Error loading products. </div> 
        </div> 
        )
    }

    const { success , data  }  = query.data ; 

    if(!success || !data ) { 
        return ( 
            <div>
              <div className="font-bold text-xl"> Orders   </div>
              <div className="">  Error loading products. </div> 
            </div> 
        )
    }

  


    const orders : Order[] = data ; 
    const { paidOrders , unpaidOrders , deliveredOrders , shippedOrders  } = FilterOrder(orders) ; 
     
    return (
      <> 
      <div>
          <div className="font-bold text-2xl mb-4"> My Orders   </div> 
          <div className="flex mb-2 gap-8 navbar text-xs sm:text-lg lg:text-xl xl:text-2xl">   
            <div onClick={() => setFilter('ALL')}       style={ {  fontWeight : filter === 'ALL'       ?  'bolder' : 'normal'    }}>All </div>  
            <div onClick={() => setFilter('PAID')}      style={ {  fontWeight : filter === 'PAID'      ?  'bolder' : 'normal'    }}>Paid  </div> 
            <div onClick={() => setFilter('UNPAID')}    style={ {  fontWeight : filter === 'UNPAID'    ?  'bolder' : 'normal'    }}>Unpaid</div> 
            <div onClick={() => setFilter('SHIPPED')}   style={ {  fontWeight : filter === 'SHIPPED'   ?  'bolder' : 'normal'    }}>Shipped</div>  
            <div onClick={() => setFilter('DELIVERED')} style={ {  fontWeight : filter === 'DELIVERED' ?  'bolder' : 'normal'    }}>Delivered</div>  
         </div> 

         <div className="p-4"> 
         <table className='styled-table text-xs  sm:text-base lg:text-lg  xl:text-xl'> 
        <thead> 
        <tr> <th> Id </th>  <th>Price</th> <th>Status</th>  <th>Created At</th>   </tr> 
        </thead> 

        {  
          filter === 'ALL' ? 
          <tbody>{ orders.map(           (element) => <tr>  <td className="hover:underline cursor-pointer" onClick={ ( ) => navigate(`/app/order?orderId=${element.id}`)}> { element.id }</td><td> { element.totalCost} </td> <td> { element.orderStatus} </td> <td> {  element.createdAt ? new Date(element.createdAt).toUTCString()  : '' }   </td>  </tr> ) }   </tbody> :filter === 'PAID'  ?
          <tbody>{ paidOrders.map(       (element) => <tr>  <td className="hover:underline cursor-pointer" onClick={ ( ) => navigate(`/app/order?orderId=${element.id}`)}> { element.id }</td><td> { element.totalCost} </td> <td> { element.orderStatus} </td> <td> {  element.createdAt ? new Date(element.createdAt).toUTCString()  : '' } </td>  </tr> ) }  </tbody> :filter === 'UNPAID'  ?
           <tbody>{ unpaidOrders.map(    (element) => <tr>  <td className="hover:underline cursor-pointer" onClick={ ( ) => navigate(`/app/order?orderId=${element.id}`)}> { element.id }</td><td> { element.totalCost} </td> <td> { element.orderStatus} </td> <td> {  element.createdAt ? new Date(element.createdAt).toUTCString()  : '' }  </td>  </tr> ) }  </tbody> :filter === 'SHIPPED'  ?
           <tbody>{ shippedOrders.map(   (element) => <tr>  <td className="hover:underline cursor-pointer" onClick={ ( ) => navigate(`/app/order?orderId=${element.id}`)}> { element.id }</td><td> { element.totalCost} </td> <td> { element.orderStatus} </td> <td> {  element.createdAt ? new Date(element.createdAt).toUTCString()  : '' }  </td>  </tr> ) }  </tbody> :
           <tbody>{ deliveredOrders.map( (element) => <tr>  <td className="hover:underline cursor-pointer" onClick={ ( ) => navigate(`/app/order?orderId=${element.id}`)}> { element.id }</td><td> { element.totalCost} </td> <td> { element.orderStatus} </td> <td> {  element.createdAt ? new Date(element.createdAt).toUTCString()  : '' } </td>  </tr> ) }  </tbody> 
         } 
        </table>
          </div>
      </div> 
     
      </> 
     )
}

export default Orders