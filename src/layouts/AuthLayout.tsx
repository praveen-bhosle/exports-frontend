import { Outlet, useNavigate } from "react-router-dom"

const AuthLayout = () => {

    const navigate = useNavigate() ; 

return (
<div className=''>
      <div className='flex flex-col justify-center items-center  h-[90vh]  gap-8'>
        <div className=' rounded-xl p-2   bg-white border-[1px] flex flex-col gap-16 justify-between  '>
          <div className=''>
            <div className='text-2xl font-semibold text-black text-center cursor-pointer' onClick={() => navigate('/')}>
              Welcome to YKDevoutExports
            </div>
            <div className='text-xs font-bold text-center '>
              Login to get exclusive products and services!
            </div>
          </div>

          <Outlet /> 
          
        </div>
        </div>
        </div>
  )
}

export default AuthLayout