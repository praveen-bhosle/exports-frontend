import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/ProductsApi";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Header3 } from "./Header3";
import type { Product } from "../interfaces/Product";
import { FilterProducts } from "../utils/FilterProducts";
import { useSearchParams } from "react-router-dom";
import ProductCardLoader from "./ProductCardLoader";

const Products = () => {
    const query = useQuery({ queryKey: ['products'], queryFn: getProducts })  
    const [searchParams, setSearchParams] = useSearchParams(); 
    const [quality, setQuality] = useState(searchParams?.get('quality') ? searchParams?.get('quality') : 'handpicked');  

    useEffect(() => {  
        if(query.status === 'success' && quality) {  
            searchParams.set('quality', quality); 
            setSearchParams(searchParams);  
        }
    }, [quality, query.status, searchParams, setSearchParams]);

    if (query.status === 'pending') {
        return (
            <div className="container mx-auto px-4 py-8">
                <Header3 quality={quality} setQuality={setQuality} /> 
                <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4"> 
                     <ProductCardLoader /> 
                     <ProductCardLoader /> 
                     <ProductCardLoader />
                     <ProductCardLoader /> 
                     <ProductCardLoader /> 
                     <ProductCardLoader />
                     <ProductCardLoader /> 
                     <ProductCardLoader /> 
                     <ProductCardLoader />
                </div>
            </div>
        );
    }

    if (query.status === 'error') {
        return (
            <div className="container mx-auto px-4 py-8 text-center text-red-500">  
               <Header3 quality={quality} setQuality={setQuality} />
               <div className="mt-4">Error fetching products. Please try again later.</div>
            </div>
        );
    }  

    const products: Product[] = query.data;
    const { hP, shP, mP } = FilterProducts(products);

    const renderProductCards = (productArray: Product[]) => (
        <div className="container mx-auto px-4 py-8">
            <Header3 quality={quality} setQuality={setQuality} />
            <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4">
                {productArray.map((product, index) => (
                    <ProductCard key={index} element={product} />
                ))}
            </div>
        </div>
    );
    
    switch (quality) {
        case 'handpicked':
            return renderProductCards(hP);
        case 'semi-handpicked':
            return renderProductCards(shP);
        case 'machine-picked':
            return renderProductCards(mP);
        default:
            return (
                <div className="container mx-auto px-4 py-8 text-center text-red-500">
                    <Header3 quality={quality} setQuality={setQuality} />
                    <div className="mt-4">Invalid quality parameter.</div>
                </div>
            );
    }
};

export default Products;