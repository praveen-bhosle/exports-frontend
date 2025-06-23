import { useRef, useState } from 'react';
import {   useCartMutations } from '../hooks/useCartQueryMutations';
import type { CartItem } from '../interfaces/CartItem';
import ProductCard2 from './ProductCard2'
import toast from 'react-hot-toast';
import { useTheme } from '../hooks/useTheme';


const CartItemCard = ({ cartItem }: {
    cartItem: CartItem
}) => {

    const { putMutation, deleteMutation } = useCartMutations();

    const product = cartItem.product;
    const quantity = cartItem.quantity;
    const id = cartItem.id ; 

    const [ value , setValue ] = useState(quantity.toString(10)) ;  

    const [editMode ,setEditMode] = useState(false) ;  

    const handleClick = async () => { 
         await putMutation.mutateAsync(  { cartItemId : id , quantity :  parseInt(value)}) ; 
         setEditMode(false) ;
    }

    const handleDelete = async () => { 
       await deleteMutation.mutateAsync(id) ;
    }
    
    const input = useRef(null) ; 

    const QuanityUI = () => { 
        return ( 
          editMode ?   <> 
           <div className='inline'>  <input ref ={ input }  className='font-bold w-[60px] ' type='number'  min={500}  step={500} max={5000} value={value} onChange={ (e) => {  if( parseInt(e.target.value) >= 500 && parseInt(e.target.value) <= 5000 && parseInt(e.target.value)%500===0) setValue(e.target.value)}} />  <span className='font-bold'> kg </span> </div>
            <button  className='bg-black dark:bg-white  text-white dark:text-black rounded-[12px] px-2 py-[1px] w-[80px]' onClick={ ( ) => {  const editPromise =  handleClick;   toast.promise( editPromise , { loading : "Editing CartItem quantity.",  success : "CartItem quantity changed." } )}}> Update </button>
            </> : <>
            <span className='text-black dark:text-white text-md font-bold select-none '>{quantity} kg</span> 
            <button  className='bg-black dark:bg-white text-white dark:text-black rounded-[12px] px-2 py-[1px] w-[80px] ' onClick= { () => { setValue(quantity.toString()) ; setEditMode(true) ;
             // @ts-ignore
             input.current?.focus()  } }>Edit</button>
            </> 
        )
    }

    const {theme } = useTheme() ;

    return (
        <>
            <div className='flex m-2 border-[1px] p-[4px] rounded-[5px]'>
                <div className='w-[120px]'>
                    <ProductCard2 element={product} />
                </div>

                <div className=' p-2 w-[300px] flex flex-col gap-[9px]'>
                    <div className='text-gray-800 dark:text-gray-100 font-bold text-sm '>
                        Rs.{product.cost}/kg
                    </div>

                    <div className='text-black dark:text-white font-bold text-sm  '>
                        Quality : {product.quality}
                    </div>

                    <div className='text-black  dark:text-white font-semibold text-xs     '>
                        Size : {product.sizeB} || {product.sizeA}
                    </div>

                    <div className='flex justify-between'> 
                        <QuanityUI /> 
                        <button
                            onClick={  () => {  const deletePromise = handleDelete ;  toast.promise( deletePromise , { loading : "Deleting CartItem." , success : "CartItem deleted." }  )}  }
                            className='block'
                        >
                            <img src='/delete.svg' width={25} height={25} alt='image' style = { { filter : theme === 'dark' ?  'invert(1)' : 'none'  }}  />
                        </button>      
                                     
                    </div>
                    
                    <div className='font-bold ' >  
                        Total : Rs.{ quantity * cartItem.product.cost}.00 
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItemCard