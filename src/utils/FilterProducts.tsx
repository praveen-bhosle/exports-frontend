
import type { Product } from "../interfaces/Product";

export const FilterProducts   = (  products : Product[] ) => {   
       return {  hP :  products.filter( product =>  product.quality === "Handpicked"   ) , 
                 shP:  products.filter( product =>  product.quality === "Semi Handpicked"  ) ,
                 mP :  products.filter( product =>  product.quality=== "Without Handpicked" ) 
              } 
    }