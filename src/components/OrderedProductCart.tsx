
import type { orderedProduct } from '../interfaces/Order';
import { AddCommas } from '@/utils/AddCommas';

const OrderedProductCard = ({ orderedProduct }: {
    orderedProduct: orderedProduct 
}) => {
  
    const { product  } = orderedProduct ; 
    return (
       
    <div className='flex p-4 bg-gray-800 gap-2' >
    <div className='w-15 flex-shrink-0'>
        <img src='/6s.jpeg' /> 
    </div>
    <div className='w-full flex flex-col gap-1'>
        <div className='text-white font-bold text-sm'>
        ₹{AddCommas(product.cost) }
        </div>
        <div className='text-gray-100 font-extrabold text-xs'>
        ₹{AddCommas(product.cost)} per kg
        </div>
        <div className='text-gray-100 font-bold text-sm'>
            {product.quality}
        </div>
        <div className='text-gray-200 font-semibold text-xs'>
            {product.sizeB}  || {product.sizeA}
        </div>  
    </div>
    </div>
       
    )
}

export default OrderedProductCard ; 