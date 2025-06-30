import { AxiosRequest } from "@/api/AxiosApiHandler";

import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom"

const VerifyEmail2 = () => { 
 

 const [searchParams  , _ ] = useSearchParams() ;  

 const navigate = useNavigate() ; 
 
 
 const code = searchParams.get('code')  ; 
 console.log(code) ; 

   const getRequest = async  () => {
    const response = await AxiosRequest( { url : `user/verifyEmail/${code}` , method : 'get' }) ;  
    if(response.status === 200 ) {  toast.success('Email verified successfully.') ; navigate('/app/account') ;    return ;   }
    toast.error(response.data) ; 
    }

  return (
    <div className="border dark:bg-white dark:text-black text-center font-bold rounded-[10px] cursor-pointer" onClick={ () => { const myPromise = getRequest ;  toast.promise( myPromise ,  { loading : 'Verifying email.' } )}  }>    
        Click here to verify the email.
    </div> 
  )
}

export default VerifyEmail2