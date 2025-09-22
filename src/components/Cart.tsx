import { useNavigate } from "react-router-dom";

import CartItemCard from "./CartItemCard";
import { useCartQuery } from "../hooks/useCartQueryMutations";
import { CartData } from "../utils/CartData";
import { useTheme } from "../hooks/useTheme";
import CartItemCardLoader from "./CartItemCardLoader";
import { SheetClose } from "./ui/sheet";
import ButtonLoader from "./ButtonLoader";
import { AddCommas } from "@/utils/AddCommas";

const Cart = () => { 

    const {query} = useCartQuery() ; 
    const {theme} = useTheme() ; 
    const navigate = useNavigate() ;  
    const {cartItems} = query.data || {} ; 
    const { totalCost = 0   , totalItems = 0    } =  cartItems ?   CartData(cartItems) : {} ;
    return (     
    <div className='bg-gray-800 border border-gray-700 h-full flex flex-col justify-between p-1'>
        <div> 
        <div className='mb-4 flex items-center justify-between'>
            <span className='text-white text-2xl font-bold'>
                Shopping Cart  [{totalItems}]
            </span>
            <SheetClose asChild> 
            <button  className="rounded-full p-2 hover:bg-gray-700 transition-colors">
                <img src='/close.svg' width={25} height={25} alt='close' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            </button>
            </SheetClose>
        </div>
        <div className="h-[85vh]"> 
        {query.status === "pending" ? 
        <>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
                <CartItemCardLoader />
                <CartItemCardLoader />
                <CartItemCardLoader />
            </div>
            <div className='mt-6 flex justify-between items-center p-2'>
                <div className='font-extrabold text-blue-400'>
                    <span><ButtonLoader /></span>
            </div>
            <div className='rounded-md'>
                <ButtonLoader />
            </div>
            </div>
        </> 
        : 
        query.status === "success" ? 
        <>
        <div className='overflow-y-auto h-full'>
            {cartItems?.map((item, index) => <CartItemCard key={index} cartItem={item} />)}
        </div>    
        
        </>  : 
        <div className="flex justify-center items-center w-full h-full p-4 bg-gray-900 text-red-400 text-lg font-semibold rounded-xl shadow-lg border border-red-700">
        Error fetching Cart Products
        </div>  
        }
        </div> 
        </div> 
        <div className='mt-6 flex justify-between items-center p-2'>
            <div className='font-extrabold text-blue-400'>
                <span className='block'>
                    Rs.{AddCommas(totalCost)}.00
                </span>
            </div>
            <SheetClose asChild> 
            <div onClick={() => { navigate('/app/checkout'); }}className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-2 px-6 rounded-lg font-bold cursor-pointer'>
                CheckOut
            </div>
            </SheetClose> 
        </div>
    </div>
    )

}
          
export default Cart 