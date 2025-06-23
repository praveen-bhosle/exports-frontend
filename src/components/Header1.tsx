import { useStore } from '../state/Store'; 
import { logout } from '../api/AuthApi';
import { useTheme } from '../hooks/useTheme';



const Header = () =>  { 
    const  user = useStore( (state) => state.user ) ; 
    const {theme , toggleTheme} = useTheme() ;  

    return (
        <div className='  flex justify-between w-full fixed top-0 left-0 dark:bg-black '>
            <a href='/' >
                <img src='/logp.jpeg' alt='' width={50} height={50} />
            </a>
            <div className='flex gap-4 py-2 px-4'>
                {
                    user.username ?

                        <>
                            
                            { theme === 'dark' ? <img src='./sun1.svg' width={25} height={25}  onClick={ toggleTheme} className='relative bottom-[3px]'  />   : <img  src='./moon.svg'  width={25} height={25} onClick={ toggleTheme}  className='relative bottom-[3px]' />    }
                  
                            <a href='/app/profile'> <img src='/profile.svg' alt='' width={40} height={40}  style={ { filter :  theme ==='dark' ?  'invert(1)' : 'none' } }  />  </a>
                            <button onClick={async () => {
                                 logout() ; 
                            }} > Log out </button> </>
                        :
                        <> 
                            { theme === 'dark' ? <img src='./sun1.svg' width={25} height={25}  onClick={ toggleTheme} className='relative bottom-[3px]'  />   : <img  src='./moon.svg'  width={25} height={25} onClick={ toggleTheme}  className='relative bottom-[3px]' />    }
                  
                            <a href='/auth/signup'> Sign up  </a>
                            <a href='/auth/login'> Log in   </a>
                        </>
                }
            </div>
        </div>
    )
}

export default Header