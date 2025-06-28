import ProductCard2 from './ProductCard2'
import type { orderedProduct } from '../interfaces/Order';

const OrderedProductCard = ({ orderedProduct }: {
    orderedProduct: orderedProduct 
}) => {
  
    const { quantity , product  } = orderedProduct ; 

    return (
        <>
            <div className='flex   p-8 rounded-[5px] dark:bg-[#2e2e2e]'>
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
                    <div className='text-black  dark:text-white font-semibold text-xs     '>
                       Quantity : { quantity } kg 
                    </div>
                    <div className='font-bold ' >  
                        Total : Rs.{ quantity * product.cost}.00 
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderedProductCard ; 