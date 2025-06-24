import { useQuery } from "@tanstack/react-query"
import { getUserOrders } from "../api/OrdersApi";
import type { Order } from "../interfaces/Order";
import OrderCard from "./OrderCard";

const Orders = () => { 
 
    const query =  useQuery( { queryKey : ['orders'] , queryFn : getUserOrders })  ; 

    if(query.status === 'pending') {  
    return (
        <div>
        <div className="font-bold text-xl"> Orders   </div>
        <div className="">  Loading products.  </div> 
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

    console.log(orders) ; 
    
    return (
      <div>
          <div className="font-bold text-2xl mb-4"> My Orders   </div>
          <div className="flex flex-col gap-4">   
            { orders.map( (element , index) =>  <OrderCard key={index} order={ element} />  ) }
          </div>  
      </div>
     )
}

export default Orders