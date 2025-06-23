import { Outlet, useNavigate } from "react-router-dom"
import { Toaster } from "react-hot-toast" ; 



const AuthLayout = () => {
const navigate = useNavigate() ; 
return (
<div className=''>  
   <div> 
    <Toaster />
   </div>
   <div className='flex flex-col justify-center items-center dark:bg-gray-900  h-[100vh]  gap-8 dark:text-gray-100'>
        <div className=' rounded-xl p-2   bg-white  dark:bg-black border-[1px] dark:border-white flex flex-col gap-16 justify-between  '>
          <div className=''>
            <div className='text-2xl font-semibold text-black dark:text-white text-center cursor-pointer' onClick={() => navigate('/')}>
              Welcome to YKDevoutExports
            </div>
            <div className='text-xs font-bold text-center  '>
              Login to get exclusive products and services!
            </div>
          </div>
          <Outlet    />      
        </div>
   </div>
</div>
  )
}

export default AuthLayout