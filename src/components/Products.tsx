import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/ProductsApi";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
    const query = useQuery({ queryKey: ['products'], queryFn: getProducts })
    let current1 = 'Handpicked'
    const options = ['Handpicked', 'Semi Handpicked', 'Without Handpicked'];

    const [searchParams, setSearchParams] = useSearchParams();

    const optionNumber = searchParams?.get('option');
    if (optionNumber && typeof (optionNumber) === 'string')
        current1 = options[parseInt(optionNumber)];
    const [current, setCurrent] = useState(current1);
    let current_ = current;
    if (current === 'Without Handpicked') {
        current_ = 'Machine-Picked'
    }

    return (

        <>

            <div className=' py-2 px-2' >
                <div className='text-lg flex justify-center gap-2 bg-white  w-full px-2 '>
                    <button className='rounded-2xl px-2 py-[2px] text-xs border-2 ' style={{
                        background: current === 'Handpicked' ? 'white' : 'black', color: current === 'Handpicked' ? 'black' : 'white'
                    }} onClick={() => { setCurrent('Handpicked') }}    >
                        <div className='text-4xl text-center font-bold'> H </div>
                        <div className=''> Handpicked </div>
                    </button>
                    <button className='rounded-2xl border-2 px-2 py-[2px] text-xs  '
                        style={{
                            background: current === 'Semi Handpicked' ? 'white' : 'black', color: current === 'Semi Handpicked' ? 'black' : 'white'
                        }}
                        onClick={() => { setCurrent('Semi Handpicked') }}>
                        <div className='text-4xl text-center font-bold'> SH </div>
                        <div className=''> Semi-Handpicked </div>
                    </button>
                    <button className='rounded-2xl border-2 px-2 py-[2px]  text-xs'
                        style={{ background: current === 'Without Handpicked' ? 'white' : 'black', color: current === 'Without Handpicked' ? 'black' : 'white' }}
                        onClick={() => { setCurrent('Without Handpicked') }} >
                        <div className='text-4xl text-center font-bold'> MH </div>
                        <div className=''> Machine-Picked </div> </button>
                </div>
                <div className='grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3   md:grid-cols-3 xl:grid-cols-4'>
                    {query.data?.map((product, index) => <ProductCard key={index} element={product} />)}
                </div>
            </div>

        </>

    )
}

export default Products

