import type { Order } from '../interfaces/Order'
import OrderedProductCard from './OrderedProductCart';

const OrderCard = ({ order } : { order : Order} ) => {

  const { id , totalCost , orderStatus , orderedProducts   } = order ;

  return (
    <div className='p-2 border bg-white dark:bg-black '> 
    <div className=" font-bold  ">  
       <div>Order Id:  { id } </div>
       <div>Price  :  { totalCost } </div>
       <div>Status :  { orderStatus }    </div>  
    </div>  
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        { orderedProducts.map( (element , index) =>  <OrderedProductCard key={ index} orderedProduct={ element} /> ) }
    </div>
    </div>
  )
}

export default OrderCard