import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/ProductsApi";
import ProductCard from "./ProductCard";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header3 } from "./Header3";

import ProductsLoading from "./ProductsLoading";
import type { Product } from "../interfaces/Product";
import { FilterProducts } from "../utils/FilterProducts";

const Products = () => {
    const query = useQuery({ queryKey: ['products'], queryFn: getProducts })

    const [searchParams, setSearchParams] = useSearchParams(); 

    const [quality, setQuality] = useState(searchParams?.get('quality') ? searchParams?.get('quality') : 'handpicked');  
    const [products,setProducts] = useState<Product[]>([]) ; 

    useEffect( () => { 
    if(quality) {searchParams.set( 'quality' , quality ) ; setSearchParams(searchParams) ;  } 
    } ,  [quality] ) ; 

    useEffect( () => {  
        if(query.status === 'success' && quality  ) {  
    
        const filteredProducts = FilterProducts( quality , query.data ) ;
        if(filteredProducts!==undefined) { 
            setProducts(filteredProducts) ;
        }
    } 
    }  , [quality] )  


    if (query.status === 'pending') {
        return (
            <>
                <Header3 quality={quality} setQuality={setQuality} />
                <ProductsLoading />
            </>
        )
    }

    if (query.status === 'error') {
        return (
            <>  
               <Header3 quality={quality} setQuality={setQuality} />
                <div> Error fetching products </div>
            </>
        )
    }
    return ( 
        <>
            <div className=' py-2 px-2' >
                <Header3 quality={quality} setQuality={setQuality} />
                <div className='grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3   md:grid-cols-3 xl:grid-cols-4'>
                    {products.map((product, index) =>  { return (  <ProductCard key={index} element={product} /> ) }  )}
                </div>
            </div>
        </>
    )
}

export default Products

