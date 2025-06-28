import {  useQuery } from '@tanstack/react-query';

import OrderedProductCard from './OrderedProductCart';
import { useSearchParams } from 'react-router-dom';
import { getUserOrder } from '../api/OrdersApi';


const OrderPage = ( ) => {

  const [params,_] = useSearchParams() ; 
  const orderId  = params.get('orderId') ; 


  if(!orderId) { 
    return (
      <div className='p-2 border bg-white dark:bg-[#212121] rounded-[10px] '> 
      Invalid search parameters.
      </div>
    )
  }

  
  const query = useQuery( { queryKey : ['order' , orderId]  , queryFn :  () =>  getUserOrder(orderId) }  ) ; 
 
  if(query.status==='pending') { 
   return(
    <div className='p-2 border bg-white dark:bg-[#212121] rounded-[10px] '> 
    <div className=" font-bold  ">   
       Loading order details... 
    </div> 
    </div>)
  }

  if(query.status==='error') { 
    return(
     <div className='p-2 border bg-white dark:bg-[#212121] rounded-[10px] '> 
     <div className=" font-bold  ">   
        Error loading order.
     </div> 
     </div>)
   } 

   const { success , data } = query.data ; 

   if(!success || !data) { 
    return(
      <div className='p-2 border bg-white dark:bg-[#212121] rounded-[10px] '> 
      <div className=" font-bold  ">   
         Error loading order details. 
      </div> 
      </div>)
   }

  return (
   
    <div className='p-4  bg-white dark:bg-[#212121] rounded-[10px] shadow-lg shadow-indigo-500 my-[200px]'> 
    <div className=" font-bold"> 
      ID : {data.id} <br/> 
      Ordered At : { data.createdAt &&  new Date(data.createdAt).toUTCString()}  <br/> 
      Status: {data.orderStatus} <br/> 
      TotalCost: RS.{data.totalCost} <br/> 
      <div className='grid gap-2 md:grid-cols-2'> 
      { data.orderedProducts.map( (element , index ) => <OrderedProductCard orderedProduct={element} key={index} />  ) } 
      </div>
    </div>   
    </div>
    
  )
}

export default OrderPage ; 