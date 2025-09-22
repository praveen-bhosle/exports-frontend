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
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 my-8">
    <div className="font-bold text-lg text-white">
        Loading order details...
    </div>
</div>)
  }

  if(query.status==='error') { 
    return(
     <div className='p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 my-8'> 
     <div className=" font-bold  ">   
        Error loading order.
     </div> 
     </div>)
   } 

   const { success , data } = query.data ; 

   if(!success || !data) { 
    return(
      <div className='p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 my-8 '> 
      <div className=" font-bold  ">   
         Error loading order details. 
      </div> 
      </div>)
   }

  return (
   
<div className='p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 my-8'>
    <div className="font-bold text-white flex flex-col gap-2">
        <span className="text-xl text-blue-400">ID: {data.id}</span>
        <span className="text-sm text-gray-400">Ordered At: {data.createdAt && new Date(data.createdAt).toUTCString()}</span>
        <span className="text-sm text-gray-400">Status: {data.orderStatus}</span>
        <span className="text-xl text-white">Total Cost: Rs.{data.totalCost}</span>
        <hr className="my-2 border-gray-700" />
        <div className='grid gap-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5'>
            {data.orderedProducts.map((element, index) => <OrderedProductCard orderedProduct={element} key={index} />)}
        </div>
    </div>
</div>
    
  )
}

export default OrderPage ; 