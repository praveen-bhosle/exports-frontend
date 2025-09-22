import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../state/Store'

import MenuBar from './MenuBar';
import ProfileBar from './ProfileBar';

import { useTheme } from '../hooks/useTheme';
import toast from 'react-hot-toast';
import { SheetTrigger } from './ui/sheet';

const Header2 = () => {

    
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
        <div className='fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-800 z-50 transition-colors duration-300'>
            <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    {user.username ?
                        <button 
                            className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105'
                            onClick={() => { setIsProfileBarOpen(!isProfileBarOpen) }}
                        >
                            {isProfileBarOpen ? (
                                <img src='/close.svg' alt='close profile' className='w-5 h-5 transition-transform duration-300' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                            ) : (
                                <img src='/profile.svg' alt='open profile' className='w-5 h-5 transition-transform duration-300' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                            )}
                        </button>
                        :
                        <button
                            onClick={() => { setIsMenuBarOpen(!isMenuBarOpen) }}
                            className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105'
                        >
                            {isMenuBarOpen ? (
                                <img src='/close.svg' alt='close menu' className='w-5 h-5 transition-transform duration-300' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                            ) : (
                                <img alt='open menu' src='/menu.svg' className='w-5 h-5 transition-transform duration-300' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} /> 
                            )}
                        </button>}
                    <Link to='/app' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105'> 
                        <img src='/home.svg' alt='home' className='w-5 h-5' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} /> 
                    </Link>
                </div>

                <div className='flex items-center gap-3'>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src='/logp.jpeg' alt='logo' className='w-10 h-10 rounded-full' />
                        <span className='font-bold text-lg text-black dark:text-white'>YK Devout Exports</span>
                    </Link>
                </div>
                
                <div className='flex items-center'>
                <SheetTrigger asChild>
                    <button
                        onClick={() => { 
                            if( user.username ) setIsCartOpen(true) 
                            else { toast.error('You must login to access cart.'); navigate('/auth/login'); } 
                        }}
                        className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105'
                    >
                        <img src='/cart.svg' alt='cart' className='w-5 h-5' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
                    </button>
                </SheetTrigger>
                </div>
            </div>
            {isMenuBarOpen && (
                <MenuBar />
            )}
            {isProfileBarOpen && (
                <ProfileBar />
            )}
        </div>
        </> 
    )
}

export default Header2;