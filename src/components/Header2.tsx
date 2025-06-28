import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../state/Store'
import Cart from './Cart';
import MenuBar from './MenuBar';
import ProfileBar from './ProfileBar';


import { useTheme } from '../hooks/useTheme';
import toast from 'react-hot-toast';

const Header2 = () => {

    const  isCartOpen           = useStore(state => state.isCartOpen) ;
    const  setIsCartOpen        = useStore(state => state.setIsCartOpen) ; 
    const  user                 = useStore(state => state.user) ;
    const  isProfileBarOpen     = useStore(state => state.isProfileBarOpen) ;
    const  setIsProfileBarOpen  = useStore(state => state.setIsProfileBarOpen) ;
    const  isMenuBarOpen        = useStore(state => state.isMenuBarOpen) ;
    const  setIsMenuBarOpen     = useStore(state => state.setIsMenuBarOpen) ;  
  
  

    const {theme } = useTheme() ; 

    const navigate = useNavigate() ; 

    return ( 
        <> 
        <div className='fixed top-0 left-0 w-[100%] dark:bg-black  bg-white flex flex-col justify-center  z-10'>
        <div className='text-black dark:text-white dark:bg-black '>
            <div className='flex justify-between  mb-2  align-center mx-4 mt-[9px] h-[30px] '>
                <div className='flex  gap-4  '>
                    {user.username ?
                        <button className=' rounded-[25px]  overflow-hidden' onClick={
                            () => {
                                setIsProfileBarOpen(!isProfileBarOpen);
                            }
                        }>
                            {isProfileBarOpen ? <img src='/close.svg' alt='profile' width={25} height={25} style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  /> : <img src='/profile.svg' width={30} height={25} alt='image' style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />}
                        </button>
                        :
                        <button
                            onClick={() => {
                                setIsMenuBarOpen(!isMenuBarOpen)
                            }}
                            className=''
                        >
                            {isMenuBarOpen ? (
                                <img src='/close.svg' width={25} height={25} alt='image' style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />
                            ) : (
                                <img alt='image' src='/menu.svg' width={25} height={25}  style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }   /> 
                            )}
                        </button>}
                    <Link to='/app'> <img src='/home.svg' alt='home' width={25} height={25}  style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } } className='relative top-[2px]'   />   </Link>
                </div>
                <div className='flex  gap-2'>
                    <div className='relative bottom-[4px]'>
                        <Link to="/" className=''>
                            <img src='/logp.jpeg' alt='logo' width={40} height={40} />
                        </Link>
                    </div>
                    <div className='font-bold'>YK Devout Exports</div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <button
                            onClick={() => { 
                                if( user.username ) setIsCartOpen(true) 
                                else { toast.error('You must login to access cart.') ;  navigate('/auth/login');  } 
                            }}>
                            <img src='/cart.svg' alt='cart' width={25} height={25} style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />
                        </button>
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
                <ProfileBar   />
            )
            }
        </div>
        </div>
        </> 
    )
}

export default Header2; 