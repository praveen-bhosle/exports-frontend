import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";

import SubmitButton2 from "../UIComponents/SubmitButton2";
import toast from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";

const Signup = () => {

    const [passwordHidden, setPasswordHidden] = useState(true);
    const navigate = useNavigate() ;  

    const {theme} = useTheme() ; 

    const handleSignUp = async  (e :React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault() ;
        const formData = new FormData(e.currentTarget) ; 
        const username = formData.get('username')?.toString() ; 
        const password = formData.get('password')?.toString() ;   
        console.log(password);
        console.log(username) ;
        if(username && password) { 
        const {success,data} = await signup({ username , password }) ;
        if(!success)  { toast.error(data) ;  return Promise.reject('') ;  } 
        if(success) navigate('/auth/login') ; 
    }    
    }


    return (
        <div className='flex flex-col gap-4 text-xl font-bold bg-gray-800 p-8 rounded-xl shadow-2xl transform transition-transform duration-300 border border-gray-700'>
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">Sign Up</h2>
        <form onSubmit={(e) => { const myPromise = handleSignUp(e); toast.promise(myPromise, { loading: "Registering user", success: 'Account created successfully.' }); }}>
            <div className="mb-4">
                <label className='block mb-2 text-gray-300' htmlFor='username'>Username</label>
                <input
                    type='text'
                    className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
                    id='username'
                    name='username'
                    required
                />
            </div>
            <div className="mb-4">
                <label className='block mb-2 text-gray-300' htmlFor='password'>Password</label>
                <div className="relative">
                    <input
                        className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full pr-12 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
                        id='password'
                        type={passwordHidden ? 'password' : 'text'}
                        required
                        name='password'
                    />
                    <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                        {passwordHidden ? (
                            <img
                                className="w-5 h-5"
                                src='/eye.svg'
                                alt="show password"
                                style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                            />
                        ) : (
                            <img
                                alt="hide password"
                                className="w-5 h-5"
                                src='/eyeclose.svg'
                                style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                            />
                        )}
                    </span>
                </div>
            </div>
            <SubmitButton2 text="Sign up" />
        </form>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col items-center gap-2 text-sm">
            <p className="text-gray-400">
                Already have an account? <Link to="/auth/login" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Log in</Link>
            </p>
        </div>
    </div>
    )
}

export default Signup 