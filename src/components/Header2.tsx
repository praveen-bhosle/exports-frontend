import { Link } from 'react-router-dom';
import { useStore } from '../state/Store'
import Cart from './Cart';
import MenuBar from './MenuBar';
import ProfileBar from './ProfileBar';


import { useTheme } from '../hooks/useTheme';

const Header2 = () => {

    const  isCartOpen           = useStore(state => state.isCartOpen) ;
    const  setIsCartOpen        = useStore(state => state.setIsCartOpen) ; 
    const  user                 = useStore(state => state.user) ;
    const  isProfileBarOpen     = useStore(state => state.isProfileBarOpen) ;
    const  setIsProfileBarOpen  = useStore(state => state.setIsProfileBarOpen) ;
    const  isMenuBarOpen        = useStore(state => state.isMenuBarOpen) ;
    const  setIsMenuBarOpen     = useStore(state => state.setIsMenuBarOpen) ;  
  
  

    const {theme ,toggleTheme } = useTheme() ; 

    return ( 
        <> 
        <div className='  w-full fixed  bg-white dark:bg-black  text-black dark:text-white top-[0px] left-[0px] z-10 py-[1px]'>
            <div className='flex justify-between  mb-2  align-center mx-4 mt-[9px] h-[30px] '>
                <div className='flex  gap-4  '>
                    {user.username ?
                        <button className=' rounded-[25px]  overflow-hidden' onClick={
                            () => {
                                setIsProfileBarOpen(!isProfileBarOpen);
                            }
                        }>
                            {isProfileBarOpen ? <img src='/close.svg' alt='profile' width={25} height={25} style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  /> : <img src='/profile1.svg' width={25} height={25} alt='image' style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />}
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
                   { theme === 'dark' ? <img src='./sun1.svg' width={25} height={25}  onClick={ toggleTheme} className='relative bottom-[3px]'  />   : <img  src='./moon.svg'  width={25} height={25} onClick={ toggleTheme}  className='relative bottom-[3px]' />    }
                            
                    <div>
                        <button
                            onClick={() => { 
                                if( user.username ) setIsCartOpen(true) 
                                else { alert('You must login to access cart.')} 
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
        </> 
    )
}

export default Header2; 