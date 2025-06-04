import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/AuthApi";
import SubmitButton2 from "../UIComponents/SubmitButton2";

const Signin = () => {

   
    const [passwordHidden, setPasswordHidden] = useState(true);  
 
    const navigate = useNavigate() ; 

    const handleLogin = async  (e:React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')?.toString() ; 
        const password = formData.get('password')?.toString() ; 
        if(username&&password) { 
        const success = await login({ username , password }) ;  
        if(success) navigate('/auth/verifyEmail') ; }
       
    }

    return ( 
          <div className='flex flex-col gap-2 text-xl font-bold'>
            <form onSubmit={ (e) => handleLogin(e)  }>
            <label className='block  mb-[2px]' htmlFor='username'>Username</label>
            <input
                type='text'
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] text-black w-full'
                id='username'
                required
            />
            <label className='block  ' htmlFor='password'>Password</label>
            <div>
                <input
                    className='outline-none text-xs  rounded-sm bg-[#E9EAF2] text-black w-[90%] p-2'
                    id='password'
                    type={passwordHidden ? 'password' : 'text'}
                    required
                />
                <span className="w-max" onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <img className="inline" src='/eye.svg' alt="" width={20} height={20} /> : <img alt="" className="inline" src='/eyeclose.svg' width={20} height={20} />}  </span>
            </div>
            <SubmitButton2 text="Login" /> 
            </form>
            <hr /> 
            <Link to="/auth/signup"  className="underline w-min"> Signup  </Link>
        </div>
    
    )
}

export default Signin