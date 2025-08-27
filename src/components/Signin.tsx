import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/AuthApi";
import SubmitButton2 from "../UIComponents/SubmitButton2";
import toast  from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";
//import { useStore } from "../state/Store";
//import toast, { type Renderable, type ValueOrFunction } from "react-hot-toast";



const Signin = () => {

    const [passwordHidden, setPasswordHidden] = useState(true);      
    const navigate = useNavigate() ;    

    const {theme } = useTheme( ) ;

    const handleLogin = async  (e:React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')?.toString() ; 
        const password = formData.get('password')?.toString() ; 
        console.log(username) ; 
        console.log(password);
        if(username&&password) { 
        const  response  = await login({ username , password }) ;  
        
        if(response.success) { 
          const { email  } = response.data ; 
          if( !email)  navigate('/auth/verifyEmail') ;   
          else navigate('/app') ;  
          toast.success("Logged in successfully.") ; 
          document.location.reload() ; 
        }
        else { 
          toast.error(response.data) ; 
        } 
    }
    } 
    
    

    return ( 
          <div className='flex flex-col gap-2 text-xl font-bold'>
            <form onSubmit={ (e) =>  { const myPromise =  handleLogin(e) ;  toast.promise( myPromise ,  { loading : "Logging in..." } ) }}>
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
                <span className="w-max" onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <img className="inline" src='/eye.svg' alt="" width={20} height={20}   style = {{ filter : theme==='dark' ? 'invert(1)' : 'none' }} /> : <img alt="" className="inline" src='/eyeclose.svg' width={20} height={20} style = {{ filter : theme==='dark' ? 'invert(1)' : 'none' }} />}  </span>
            </div>
            <SubmitButton2 text="Login" />  
            </form>
            <hr /> 
            <Link to="/auth/forgotPassword"  className="underline"> Forgot Password  </Link>

            <Link to="/auth/signup"  className="underline w-min"> Signup  </Link>

        </div>
    
    )
}

export default Signin