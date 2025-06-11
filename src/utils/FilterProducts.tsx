
import type { Product } from "../interfaces/Product";

export const FilterProducts   = ( quality : string  , products : Product[] ) => {   
     if(quality === 'handpicked') {  
       return products.filter( product =>     product.quality === "Handpicked"   ) ; 
    } 
    else if(quality === 'semi-handpicked') { 
        return   products.filter( product =>  product.quality === "Semi Handpicked"  ) ;
    } 
    else if( quality === 'machine-picked') { 
        return   products.filter( product =>  product.quality=== "Without Handpicked" ) ;
    }
}