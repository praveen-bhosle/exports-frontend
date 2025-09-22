import { Link, useNavigate } from "react-router-dom";
import { verifyEmailApi } from "../api/AuthApi";
import validateEmail from "../validations/validateEmail";

import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";


const VerifyEmail = () => {

    const navigate = useNavigate() ; 

    const handleVerification = async  (e:React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget) ; 
        const email = formData.get('email')?.toString() ; 
        if(email) { 
        const valid = validateEmail(email) ;  
        if(!valid) { alert('Invalid email.');  return ;   } 
        const {success , data } = await  verifyEmailApi(email) ;
        if(success) { toast.success('Email sent to ' + email) ;   navigate('/app') ;  return  ;   } 
        toast.error(data) ;  
        } 
    } 

    useEffect( () => { 
        axios.get('https://mailservice-hyd8.onrender.com/test').catch(()=>{}) ;
    },[])

    return (
<div className='flex flex-col gap-4 p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-lg mx-auto text-white'>
    <form onSubmit={(e) => { const myPromise = handleVerification(e); toast.promise(myPromise, { loading: 'Sending verification link to email id.' }); }}>
        <label className='block mb-2 text-gray-300' htmlFor='email'>Email</label>
        <input
            type='text'
            className='p-3 outline-none rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
            id='email'
            name='email'
        />
        <button
            type="submit"
            className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
            Verify Email
        </button>
        <hr className="my-6 border-gray-700" />
    </form>
    <Link to="/auth/signup" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-center">
        Sign up
    </Link>
</div>
    )
}

export default VerifyEmail