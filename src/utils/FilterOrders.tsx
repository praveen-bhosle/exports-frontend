import type { Order } from "../interfaces/Order";

export function FilterOrder( orders : Order[] ) {  
   console.log(orders) ; 
   const unpaidOrders = orders.filter( order => order.orderStatus === "UNPAID") ; 
   const paidOrders = orders.filter( order => order.orderStatus === "PAID" ) ; 
   const shippedOrders  = orders.filter( order => order.orderStatus === "SHIPPED" ) ; 
   const deliveredOrders  = orders.filter( order => order.orderStatus === "DELIVERED" ) ; 
   return { unpaidOrders , paidOrders , shippedOrders , deliveredOrders  } 
}