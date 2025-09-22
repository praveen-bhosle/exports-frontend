import ProductCard2 from './ProductCard2'
import type { orderedProduct } from '../interfaces/Order';

const OrderedProductCard = ({ orderedProduct }: {
    orderedProduct: orderedProduct 
}) => {
  
    const { quantity , product  } = orderedProduct ; 

    return (
        <>
<div className='flex p-8 rounded-xl bg-gray-800 shadow-lg border border-gray-700'>
    <div className='w-32 flex-shrink-0'>
        <ProductCard2 element={product} />
    </div>
    <div className='p-2 w-full flex flex-col gap-2'>
        <div className='text-gray-300 font-bold text-lg'>
            Rs.{product.cost}/kg
        </div>
        <div className='text-gray-300 font-bold text-sm'>
            Quality: {product.quality}
        </div>
        <div className='text-gray-400 font-semibold text-xs'>
            Size: {product.sizeB} || {product.sizeA}
        </div>
        <div className='text-gray-400 font-semibold text-xs'>
            Quantity: {quantity} kg
        </div>
        <div className='font-bold text-xl text-white mt-2'>
            Total: Rs.{quantity * product.cost}.00
        </div>
    </div>
</div>
        </>
    )
}

export default OrderedProductCard ; 