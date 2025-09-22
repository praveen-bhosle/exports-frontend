import { useState } from 'react';
import { useCartMutations } from '../hooks/useCartQueryMutations';
import type { CartItem } from '../interfaces/CartItem';
import toast from 'react-hot-toast';
import { useTheme } from '../hooks/useTheme';
import { AddCommas } from '@/utils/AddCommas';

const CartItemCard = ({ cartItem }: {
    cartItem: CartItem
}) => {

    const { putMutation, deleteMutation } = useCartMutations();

    const product = cartItem.product;
    const quantity = cartItem.quantity;
    const id = cartItem.id ; 

    const [ value , setValue ] = useState(quantity) ;  

    const [ editMode ,setEditMode ] = useState(false) ;  

    const handleClick = async () => { 
         await putMutation.mutateAsync(  { cartItemId : id , quantity :  value}) ; 
         setEditMode(false) ;
    }

    const handleDelete = async () => { 
       await deleteMutation.mutateAsync(id) ;
    }
    const {theme } = useTheme() ;

    return (
    <div>
    <div className='flex p-4 bg-gray-800 gap-2' >
    <div className='w-20 flex-shrink-0'>
        <img src='/6s.jpeg' /> 
    </div>
    <div className='w-full flex flex-col gap-1'>
        <div className='text-white font-bold text-sm'>
        ₹{AddCommas(quantity * cartItem.product.cost) }
        </div>
        <div className='text-gray-100 font-extrabold text-xs'>
        ₹{AddCommas(cartItem.product.cost)} per kg
        </div>
        <div className='text-gray-100 font-bold text-sm'>
            {product.quality}
        </div>
        <div className='text-gray-200 font-semibold text-xs'>
            {product.sizeB}  || {product.sizeA}
        </div>
        
        <div className='flex justify-between items-center'>
            {editMode ? (
                <>
                    <div className='flex items-center  w-[150px] text-sm justify-between'>
                        <div className='flex  rounded-md p-1 gap-2 text-white '>
                            <button className='select-none cursor-pointer' onClick={() => { if (value > 500) setValue(val => val - 500); }}>
                                <img src='/minus.svg' width={20} height={20} alt='minus' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                            </button>
                            <div>{value}</div>
                            <button className='select-none cursor-pointer' onClick={() => { if (value < 5000) setValue(val => val + 500); }}>
                                <img src='/plus.svg' width={20} height={20} alt='plus' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                            </button>
                        </div>
                        <button onClick={() => { const editPromise = handleClick(); toast.promise(editPromise, { loading: "Editing CartItem quantity.", success: "CartItem quantity changed." }); }} className='p-1'>
                            <img src='/save.svg' width={20} height={20} alt='delete' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span className='text-white text-sm font-bold select-none'>{quantity} kg</span>
                    <button onClick={() => { setValue(quantity); setEditMode(true); }} className='p-1'>
                        <img src='/edit.svg' width={20} height={20} alt='delete' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                    </button>
                </>
            )}
            <button
                onClick={() => { const deletePromise = handleDelete(); toast.promise(deletePromise, { loading: "Deleting CartItem.", success: "CartItem deleted." }); }}
                className='p-1 cursor-pointer'
            >
                <img src='/delete.svg' width={20} height={20} alt='delete' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            </button>
        </div>
        {editMode && <div className='text-xs text-gray-500'>Valid Range: 500-5000 kg</div>}
    </div>
    </div>
   
    </div>
    )
}

export default CartItemCard


// <input ref ={ input }  className='font-bold w-[60px]' type='number'  min={500}  step={500} max={5000} value={value} onChange={ (e) => {  if( parseInt(e.target.value) >= 500 && parseInt(e.target.value) <= 5000 && parseInt(e.target.value)%500===0) setValue(e.target.value)}} /> 
            