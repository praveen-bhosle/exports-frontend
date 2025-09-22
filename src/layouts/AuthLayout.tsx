import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-4'>
      <div>
        <Toaster />
      </div>
      <div className='w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 transform transition-transform duration-300  border border-gray-700'>
        <div className='flex flex-col gap-6'>
          <div className='text-center'>
            <div
              className='text-3xl font-extrabold text-blue-400 mb-2 cursor-pointer transition-colors duration-300 hover:text-blue-300'
              onClick={() => navigate('/')}
            >
              YKDevoutExports
            </div>
            <div className='text-sm font-medium text-gray-400'>
              Login to get exclusive products and services!
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;