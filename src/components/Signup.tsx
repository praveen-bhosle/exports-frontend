import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";

import SubmitButton2 from "../UIComponents/SubmitButton2";

const Signup = () => {

    const [passwordHidden, setPasswordHidden] = useState(true);
    const navigate = useNavigate() ;  

    const handleSignUp = async  (e :React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault() ;
        const formData = new FormData(e.currentTarget) ; 
        const username = formData.get('username')?.toString() ; 
        const password = formData.get('password')?.toString() ;   
        console.log(password);
        console.log(username) ;
        if(username && password) { 
        const success = await signup({ username , password }) ;
        if(success) navigate('/auth/login') ; 
    }    
    }


    return (
        <div className='flex flex-col gap-2 text-xl font-bold'> 
            <form  onSubmit={ (e) => {  handleSignUp(e)  }}> 
            <label className='block  mb-[2px]' htmlFor='username'>Username</label> 
            <input
                type='text'
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] dark:text-white dark:bg-black  text-black  w-full border-[1px] dark:border-white'
                id='username'
                name='username'
                required
            />
            <label className='block  ' htmlFor='password'>Password</label>
            <div>
                <input
                    className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] dark:text-white dark:bg-black  text-black  w-[90%] border-[1px] dark:border-white'
                id='password'
                    type={passwordHidden ? 'password' : 'text'}
                    required
                    name='password'
                />
                <span className="w-max" onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <img className="inline" src='/eye.svg' alt="" width={20} height={20} /> : <img alt="" className="inline" src='/eyeclose.svg' width={20} height={20} />}  </span>
            </div>
            <SubmitButton2  text="Sign up" />  
            </form>
            <hr />
            <Link to="/auth/login" className="underline w-min" >  Login   </Link>
        </div>
    )
}

export default Signup 