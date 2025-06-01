import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmailApi } from "../api/AuthApi";


const VerifyEmail = () => {

    const [email , setEmail ] = useState("") ;
 
    const navigate = useNavigate() ; 

    const handleVerification = async  () => {   
        const success = await  verifyEmailApi(email) ;
        if(success) navigate('/app') ; 
        setEmail("") ;
    }

    return (
        <div className='flex flex-col gap-2'>
            <label className='block  text-xs text-black mb-[2px]' htmlFor='email'>Email</label>
            <input
                type='text'
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                }}
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] text-black w-full'
                id='email'
            />
            <button onClick={handleVerification}>Verify Email</button>
            <hr />
            <Link to="/auth/signup"> Sign up </Link>
        </div>
    )
}

export default VerifyEmail