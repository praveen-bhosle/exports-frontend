import { getOTPApi, resetPasswordApi, verifyOTPApi } from '@/api/AuthApi';
import SubmitButton2 from '@/UIComponents/SubmitButton2';
import { useState } from 'react';
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
  return (
    <div> 
        <div className='flex flex-col gap-2 text-xl font-bold'>

            { mode === 'state1' ?  
            <>
            <form onSubmit={ (e) =>  { const myPromise = getOTP(e)   ;  toast.promise( myPromise ,  { loading : "Sending otp" } ) }}>
            <label className='block  mb-[2px]' htmlFor='username'>Username</label> 
            <input
                type='text'
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] dark:text-white dark:bg-black  text-black  w-full border-[1px] dark:border-white'
                id='username'
                name='username'
                defaultValue=''
                required
            />
            <SubmitButton2 text="Get OTP" />  
            </form>
            </> : 
            mode ==='state2' ?
            <> 
            <form onSubmit={ (e) =>  { const myPromise = verifyOTP(e)   ;  toast.promise( myPromise ,  { loading : "Verifying otp" } ) }}>
            <label className='block  mb-[2px]' htmlFor='code'>OTP</label> 
            <input
                type='text'
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] dark:text-white dark:bg-black  text-black  w-full border-[1px] dark:border-white'
                id='code'
                name='code'
                defaultValue=''
                required
            />
            <SubmitButton2 text="Verify OTP" />  
            </form>
            </> : 
            <> 
            <form onSubmit={ (e) =>  { const myPromise = resetPassword(e)   ;  toast.promise( myPromise ,  { loading : "Resetting password.." } ) }}>
            <label className='block  mb-[2px]' htmlFor='password'>Password</label> 
            <input
                type='text'
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] dark:text-white dark:bg-black  text-black  w-full border-[1px] dark:border-white'
                id='password'
                name='password'
                defaultValue=''
                required
            />
            <SubmitButton2 text="Reset password" />  
            </form>
            </>
            } 
            <hr /> 
            <div className='text-xs'> Please do not refresh this page until password reset is done.</div>
        </div> 
    </div>
  )
}

export default ForgotPassword 