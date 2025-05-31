import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartItemCard from "./CartItemCard";
import { useStore } from "../state/Store";

const Cart = () => {
    const { cartItems, totalCost, totalItems } = useCart();

    const { setIsCartOpen } = useStore();

    return (
        <div>
            <div className='px-4 py-2  rounded-md z-50'>
                <div className='mb-2  align-center flex'>
                    <span className='text-black font-bold mr-2'>
                        Shopping Cart {`(${totalItems})`}
                    </span>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className='hover:bg-gray-100 rounded-md'
                    >
                        <img src='/close.svg' width={25} height={25} alt='close' />
                    </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'>
                    {cartItems?.map(item => <CartItemCard cartItem={item} id={item.id} />)}
                </div>

                <div className='mt-2 flex bg-black justify-between p-2 align-center'>
                    <div className=' font-extrabold text-white border-white   align-center  '>
                        <span className='block  relative top-[6px] '>
                            Total Price: ${totalCost} || ₹{ // @ts-ignore 
                                total * 80}
                        </span>
                    </div>

                    <Link to="/app/checkout"
                        className='bg-white text-black text-lg py-1  px-2 rounded-md font-bold'
                    >
                        CheckOut
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart