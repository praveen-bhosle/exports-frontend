import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordHidden, setPasswordHidden] = useState(true);

    const navigate = useNavigate() ;

    const handleSignUp = async  () => {   
        const success = await signup({ username , password }) ;
        if(success) navigate('/auth/login') ; 
        setUsername("") ;
        setPassword("") ; 
    }

    return (
        <div className='flex flex-col gap-2'>
            <label className='block  text-xs text-black mb-[2px]' htmlFor='email'>Username</label>
            <input
                type='text'
                value={username}
                onChange={e => {
                    setUsername(e.target.value)
                }}
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] text-black w-full'
                id='username'
            />
            <label className='block  text-black text-xs ' htmlFor='password'>Password</label>
            <div>
                <input
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    className='outline-none text-xs  rounded-sm bg-[#E9EAF2] text-black w-[90%] p-2'
                    id='password'
                    type={passwordHidden ? 'password' : 'text'}
                />
                <span className="w-max  " onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <img className="inline" src='/eye.svg' alt="" width={20} height={20} /> : <img alt="" className="inline" src='/eyeclose.svg' width={20} height={20} />}  </span>
            </div>
            <button onClick={ handleSignUp }   > Sign up </button>
            <hr />
            <Link to="/auth/login">  Login  </Link>
        </div>

    )
}

export default Signup 