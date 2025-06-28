import type { Product } from "./Product"

export interface  orderedProduct { 
   id : number ,  
   quantity :number , 
   product : Product 
}

export interface Order { 
   id : number ,  
   totalCost : number ,  
   orderedProducts :  orderedProduct[] , 
   orderStatus: string , 
   createdAt : Date 
}