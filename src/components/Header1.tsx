import { useStore } from '../state/Store'; 
import { logout } from '../api/AuthApi';



const Header = () =>  { 
    const  {user} = useStore() ;
    return (
        <div className=' bg-[#FAFAFA] flex justify-between w-full fixed top-0 left-0 '>
            <a href='/' >
                <img src='/logp.jpeg' alt='' width={50} height={50} />
            </a>
            <div className='flex gap-4 py-2 px-4'>
                {
                    user.username ?

                        <>
                            <a href='/app/profile'> <img src='/profile.svg' alt='' width={40} height={40} />  </a>
                            <button onClick={async () => {
                                 logout() ; 
                            }} > Log out </button> </>
                        :
                        <>
                            <a href='/auth/signup'> Sign up  </a>
                            <a href='/auth/login'> Log in   </a>
                        </>
                }
            </div>
        </div>
    )
}

export default Header