import { Link } from 'react-router-dom';
import { useStore } from '../state/Store'
import { useCart } from '../hooks/useCart';
import Cart from './Cart';
import MenuBar from './MenuBar';
import ProfileBar from './ProfileBar';


const Header2 = () => {

    const { isCartOpen, setIsCartOpen, user, isProfileBarOpen, setIsProfileBarOpen, isMenuBarOpen, setIsMenuBarOpen } = useStore();

    const { totalItems } = useCart();

    return (
        <div className='border  w-full fixed  bg-white  top-[0px] left-[0px] z-10'>
            <div className='flex justify-between  mb-2  align-center mx-4 mt-[9px] h-[30px] '>
                <div className='flex  gap-4  border-2 border-white'>
                    {user.loggedIn ?
                        <button className=' rounded-[25px]  overflow-hidden' onClick={
                            () => {
                                setIsProfileBarOpen(!isProfileBarOpen);
                            }
                        }>
                            {isProfileBarOpen ? <img src='/close.svg' alt='profile' width={25} height={25} /> : <img src='/profile1.svg' width={25} height={25} alt='image' />}
                        </button>
                        :
                        <button
                            onClick={() => {
                                setIsMenuBarOpen(!isMenuBarOpen)
                            }}
                            className=''
                        >
                            {isMenuBarOpen ? (
                                <img src='/close.svg' width={25} height={25} alt='image' />
                            ) : (
                                <img alt='image' src='/menu.svg' width={25} height={25} />
                            )}
                        </button>}
                    <Link to='/app'> <img src='/home.svg' alt='home' width={25} height={25} />   </Link>
                </div>
                <div className='flex  gap-2'>
                    <div className='relative bottom-[4px]'>
                        <Link to="/" className=''>
                            <img src='/logp.jpeg' alt='logo' width={40} height={40} />
                        </Link>
                    </div>
                    <div className='text-black font-bold'>YK Devout Exports</div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <button
                            onClick={() => {
                                setIsCartOpen(true)
                            }}>
                            <img src='/cart.svg' alt='cart' width={25} height={25} />
                        </button>
                        {totalItems !== undefined && totalItems > 0 ? (
                            <div className='w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[40px] left-[15px] '>
                                <span className='relative left-[3px] top-[2px] '>{totalItems}</span>
                            </div>
                        ) : (
                            <div className='w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[30px] left-[15px] opacity-0 '>
                                <span className='relative left-[3px] top-[2px]  '> 00 </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isMenuBarOpen && (
                <MenuBar />
            )}
            {isCartOpen && (
                <Cart />
            )}
            {isProfileBarOpen && (
                <ProfileBar />
            )
            }
        </div>
    )
}

export default Header2; 