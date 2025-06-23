import type { Product } from "./Product"

export interface  orderedProduct { 
   id : number ,  
   quantity :number , 
   products : Product[]
}

export interface Order { 
   id : number ,  
   totalCost : number ,  
   orderedProducts :  orderedProduct[]
}