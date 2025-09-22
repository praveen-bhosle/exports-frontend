import { getOTPApi, resetPasswordApi, verifyOTPApi } from '@/api/AuthApi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

    const navigate = useNavigate() ; 

    const [mode,setMode] = useState('state1') ; 
    const [globalUsername,setGlobalUsername] = useState('') ; 

    const getOTP = async  (e:React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')?.toString() ; 
        console.log(username) ; 
        if(username) { 
        const  response  = await getOTPApi(username) ;  
        if(response.success) { 
          toast.success(response.data) ; 
          setGlobalUsername(username) ; 
          setMode('state2') ; 
        }
        else { 
          toast.error(response.data) ; 
        } 
    }
    }
    
    const verifyOTP =  async  (e:React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const code = formData.get('code')?.toString() ; 
        if(code) { 
        const  response  = await verifyOTPApi( code ,globalUsername) ;  
        if(response.success) { 
            toast.success(response.data) ; 
            setMode('state3') ; 
         }
        else { 
          toast.error(response.data) ; 
        } 
    }
    }

    const resetPassword =  async  (e:React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const password = formData.get('password')?.toString() ; 
        if(password) { 
        const  response  = await resetPasswordApi( password ) ;  
        if(response.success) { 
            toast.success(response.data) ; 
            navigate('/auth/login') ;  
        }
        else { 
          toast.error(response.data) ; 
        } 
        } 
    } 
   
  useEffect( () => { 
      axios.get('https://mailservice-hyd8.onrender.com/test').catch(()=>{}) ;
  },[])

  return (
<div>
    <div className='flex flex-col gap-4 p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-lg mx-auto text-white'>
        {mode === 'state1' ?
            <form onSubmit={(e) => { const myPromise = getOTP(e); toast.promise(myPromise, { loading: "Sending OTP" }); }}>
                <label className='block mb-2 text-gray-300' htmlFor='username'>Username</label>
                <input
                    type='text'
                    className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
                    id='username'
                    name='username'
                    defaultValue=''
                    required
                />
                <button
                    type="submit"
                    className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                >
                    Get OTP
                </button>
            </form>
            :
            mode === 'state2' ?
                <form onSubmit={(e) => { const myPromise = verifyOTP(e); toast.promise(myPromise, { loading: "Verifying OTP" }); }}>
                    <label className='block mb-2 text-gray-300' htmlFor='code'>OTP</label>
                    <input
                        type='text'
                        className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
                        id='code'
                        name='code'
                        defaultValue=''
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    >
                        Verify OTP
                    </button>
                </form>
                :
                <form onSubmit={(e) => { const myPromise = resetPassword(e); toast.promise(myPromise, { loading: "Resetting password.." }); }}>
                    <label className='block mb-2 text-gray-300' htmlFor='password'>Password</label>
                    <input
                        type='text'
                        className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
                        id='password'
                        name='password'
                        defaultValue=''
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    >
                        Reset password
                    </button>
                </form>
        }
        <hr className="my-4 border-gray-700" />
        <div className='text-xs text-gray-400'>Please do not refresh this page until password reset is done.</div>
    </div>
</div>
  )
}

export default ForgotPassword 