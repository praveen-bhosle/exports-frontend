import { useStore } from '../state/Store'; 
import { logout } from '../api/AuthApi';
import { useTheme } from '../hooks/useTheme';

const Header = () =>  { 
    const user = useStore((state) => state.user); 
    const { theme } = useTheme();  

    return (
        <div className='fixed top-0 left-0 w-[100%] h-[47px] bg-[#111827] dark:bg-[#0a0a0a] flex flex-col justify-center shadow-md shadow-black/20'>
            <div className='flex justify-between items-center px-3'>
                {/* Logo */}
                <a href='/'>
                    <img src='/logp.jpeg' alt='logo' width={42} height={42} className='rounded-md shadow-sm' />
                </a>

                {/* Links */}
                <div className='flex gap-5 items-center text-sm font-medium'>
                    {user.username ? (
                        <>
                            <a href='/app/account'>
                                <img 
                                    src='/profile.svg' 
                                    alt='profile' 
                                    width={32} 
                                    height={32}  
                                    className='transition duration-200 hover:scale-105'
                                    style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                                />  
                            </a>
                            <button 
                                onClick={async () => { logout(); }} 
                                className='px-3 py-1 rounded-md text-gray-200 hover:text-white hover:bg-white/10 transition'
                            >
                                Log out
                            </button>
                        </>
                    ) : (
                        <> 
                            <a href='/auth/signup' className='px-3 py-1 rounded-md text-gray-200 hover:text-white hover:bg-white/10 transition '>Sign up</a>
                            <a href='/auth/login' className='px-3 py-1 rounded-md text-gray-200 hover:text-white hover:bg-white/10 transition '>Log in</a>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
