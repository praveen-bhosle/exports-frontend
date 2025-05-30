import type { Product } from '../interfaces/Product'
import ProductCard2 from './ProductCard2'

const CartItem = ({ quantity, product
}: {
    quantity: number,
    product: Product
}) => {

    const priceInINR = parseInt(product.price) * 80;

    return (
        <>
            <div className='flex my-2'>
                <div className='w-[100px]'>
                    <ProductCard2 element={product} />
                </div>

                <div className=' p-2 w-[300px] '>
                    <div className='text-gray-800 font-bold text-sm '>
                        ${product.price} || ₹{priceInINR}
                    </div>

                    <div className='text-black font-bold text-sm  '>
                        Quality: {product.quality}
                    </div>

                    <div className='text-black  font-semibold text-xs     '>
                        Size: {product.sizeStringB} || {product.sizeStringA}
                    </div>

                    <div className='flex  justify-between '>
                        <div className='flex align-center'>
                            <button
                                onClick={() => {
                                    addToCart(product.productId)
                                }}
                                className='bg-gray-200 rounded-md mr-2'
                            >
                                <img src='/plus.svg' width={25} height={25} alt='image' />
                            </button>
                            <span className='text-black text-2xl font-bold select-none '>
                                {quantity}
                            </span>
                            <button
                                onClick={() => {
                                    removeOneFromCart(product.productId)
                                }}
                                className='bg-gray-200 rounded-md ml-2'
                            >
                                <img src='/minus.svg' width={25} height={25} alt='image' />
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                removeFromCart(product.productId)
                            }}
                            className='block'
                        >
                            <img src='/delete.svg' width={25} height={25} alt='image' />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem
