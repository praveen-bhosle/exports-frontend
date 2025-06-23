import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/ProductsApi";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Header3 } from "./Header3";
import ProductsLoading from "./ProductsLoading";
import type { Product } from "../interfaces/Product";
import { FilterProducts } from "../utils/FilterProducts";
import { useSearchParams } from "react-router-dom";

const Products = () => {
    const query = useQuery({ queryKey: ['products'], queryFn: getProducts })  
    const [searchParams, setSearchParams] = useSearchParams(); 
    const [quality, setQuality] = useState(searchParams?.get('quality') ? searchParams?.get('quality') : 'handpicked');  
    useEffect( () => {  
        if(query.status === 'success' && quality) {  
        searchParams.set( 'quality' , quality ) ; setSearchParams(searchParams) ;  
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

    const products: Product [] = query.data ; 

    const { hP , shP , mP } = FilterProducts(products) ;  
    
    if(quality=='handpicked') {  
    return ( 
        <>
            <div>
                <Header3 quality={quality} setQuality={setQuality} />
                <div className='grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3   md:grid-cols-3 xl:grid-cols-4'>
                    {hP.map((product, index) =>  { return (  <ProductCard key={index} element={product} /> ) }  )}
                </div>
            </div>
        </>
    ) }
    else if(quality=='semi-handpicked') {  
        return ( 
            <>
                <div>
                    <Header3 quality={quality} setQuality={setQuality} />
                    <div className='grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3   md:grid-cols-3 xl:grid-cols-4'>
                        {shP.map((product, index) =>  { return (  <ProductCard key={index} element={product} /> ) }  )}
                    </div>
                </div>
            </>
        ) }

    else if (quality=='machine-picked') { 
        return ( 
            <>
                <div>
                    <Header3 quality={quality} setQuality={setQuality} />
                    <div className='grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3   md:grid-cols-3 xl:grid-cols-4'>
                        {mP.map((product, index) =>  { return (  <ProductCard key={index} element={product} /> ) }  )}
                    </div>
                </div>
            </>
        ) 
    } 
    else { 
        return( 
            <div>
            <Header3 quality={quality} setQuality={setQuality} />
             <div> Invalid query parameters.</div>
            </div>
        )
    }
}

export default Products
