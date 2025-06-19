import { useState } from 'react';
import {   useCartMutations } from '../hooks/useCartQueryMutations';
import type { CartItem } from '../interfaces/CartItem';
import ProductCard2 from './ProductCard2'


const CartItemCard = ({ cartItem }: {
    cartItem: CartItem
}) => {

    const { putMutation, deleteMutation } = useCartMutations();

    const product = cartItem.product;
    const quantity = cartItem.quantity;
    const id = cartItem.id ; 

    const [ value , setValue ] = useState(quantity.toString(10)) ;  

    const [editMode ,setEditMode] = useState(false) ;  

    const QuanityUI = () => { 
        return ( 
          editMode ?   <> 
           <div className='inline'>  <input className='font-bold w-[60px]' type='number'  min={500}  step={500} max={5000} value={value} onChange={ (e) => {  if( parseInt(e.target.value) >= 500 && parseInt(e.target.value) <= 5000 && parseInt(e.target.value)%500===0) setValue(e.target.value)}} />  <span className='font-bold'> kg </span> </div>
            <button  className='bg-black text-white rounded-[12px] px-2 py-[1px] w-[80px]' onClick={ () => { putMutation.mutate(  { cartItemId : id , quantity :  parseInt(value)}) ; setEditMode(false)  }  }> Update </button>
            </> : <>
            <span className='text-black text-md font-bold select-none '>{quantity} kg</span> 
            <button  className='bg-black text-white rounded-[12px] px-2 py-[1px] w-[80px] ' onClick= { () => { setValue(quantity.toString()) ; setEditMode(true) } }>Edit</button>
            </> 
        )
    }

    return (
        <>
            <div className='flex m-2 border-[1px] p-[4px] rounded-[5px]'>
                <div className='w-[120px]'>
                    <ProductCard2 element={product} />
                </div>

                <div className=' p-2 w-[300px] flex flex-col gap-[9px]'>
                    <div className='text-gray-800 font-bold text-sm '>
                        Rs.{product.cost}/kg
                    </div>

                    <div className='text-black font-bold text-sm  '>
                        Quality : {product.quality}
                    </div>

                    <div className='text-black  font-semibold text-xs     '>
                        Size : {product.sizeB} || {product.sizeA}
                    </div>

                    <div className='flex justify-between'> 
                        <QuanityUI /> 
                        <button
                            onClick={() => {
                                deleteMutation.mutate(id)
                            }}
                            className='block'
                        >
                            <img src='/delete.svg' width={25} height={25} alt='image' />
                        </button>      
                                     
                    </div>
                    
                    <div className='font-bold'>  
                        Total : Rs.{ quantity * cartItem.product.cost}.00 
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItemCard


/* 
                            <button
                                onClick={() => {
                                    putMutation.mutate({ cartItemId: id, quantity: quantity - 100 });
                                }}
                                className='bg-gray-200 rounded-md mr-2'
                            >
                                <img src='/minus.svg' width={25} height={25} alt='image' />
                            </button>
                            <span className='text-black text-2xl font-bold select-none '>
                                {quantity} kg
                            </span>
                            <button
                                onClick={() => {
                                    putMutation.mutate({ cartItemId: id, quantity: quantity + 100 })
                                }}
                                className='bg-gray-200 rounded-md ml-2'
                            >
                                <img src='/plus.svg' width={25} height={25} alt='image' />
                            </button> 
*/