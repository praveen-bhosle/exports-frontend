import { Link, useNavigate } from "react-router-dom";
import { verifyEmailApi } from "../api/AuthApi";
import validateEmail from "../validations/validateEmail";
import SubmitButton2 from "../UIComponents/SubmitButton2";


const VerifyEmail = () => {

    const navigate = useNavigate() ; 

    const handleVerification = async  (e:React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget) ; 
        const email = formData.get('email')?.toString() ; 
        if(email) { 
        const valid = validateEmail(email) ;  
        if(!valid) { alert('Invalid email.');  return ;   } 
        const success = await  verifyEmailApi(email) ;
        if(success) navigate('/app') ;  
        } 
    } 

    return (
        <div className='flex flex-col gap-2 font-bold '>
            <form onSubmit= {(e) =>  handleVerification(e) }> 
            <label className='block mb-[2px]' htmlFor='email'>Email</label>
            <input
                type='text'
                className='p-2 outline-none rounded-md bg-[#E9EAF2] text-black w-full'
                id='email'
                name='email'
            />
            <SubmitButton2 text="Verify Email" /> 
            <hr />
            </form>
            <Link to="/auth/signup"> Sign up </Link>
        </div>
    )
}

export default VerifyEmail