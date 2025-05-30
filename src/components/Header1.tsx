import { useEffect, useState } from 'react'
import axios from 'axios';

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const res = await axios.get('/api/auth/checkLogged').then(res => res.data);
                if (res.loggedIn) {
                    setLoggedIn(true);
                }
            }
            catch (e) {
                console.log(e);
            }
            console.log(loggedIn);
        };


        checkLoggedIn();
    }, [loggedIn])
    return (

        <div className='bg-white  flex justify-between w-full fixed top-0 left-0'>
            <a href='/' >
                <img src='/logp.jpeg' alt='' width={50} height={50} />
            </a>
            <div className='flex gap-4 py-2 px-4'>
                {
                    loggedIn ?

                        <>
                            <a href='/app/profile'> <img src='/profile.svg' alt='' width={40} height={40} />  </a>
                            <button onClick={async () => {
                                await axios.put(`/api/auth/signout`);
                                setLoggedIn(false);
                            }} > Log out </button> </>
                        :
                        <>
                            <a href='/auth/signup'> Sign up  </a>
                            <a href='/auth/signin'> Log in   </a>
                        </>
                }
            </div>
        </div>
    )
}

export default Header