import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/AuthApi";
import SubmitButton2 from "../UIComponents/SubmitButton2";
import toast from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";

const Signin = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate();

  const { theme } = useTheme();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    console.log(username);
    console.log(password);
    if (username && password) {
      const response = await login({ username, password });

      if (response.success) {
        const { email } = response.data;
        if (!email) navigate('/auth/verifyEmail');
        else navigate('/app');
        toast.success("Logged in successfully.");
        document.location.reload();
      } else {
        toast.error(response.data);
      }
    }
  };

  return (
    <div className='flex flex-col gap-4 text-xl font-bold bg-gray-800 p-8 rounded-xl shadow-2xl transform transition-transform duration-300 border border-gray-700'>
      <h2 className="text-3xl font-extrabold text-white text-center mb-6">Login</h2>
      <form onSubmit={(e) => { const myPromise = handleLogin(e); toast.promise(myPromise, { loading: "Logging in..." }); }}>
        <div className="mb-4">
          <label className='block mb-2 text-gray-300' htmlFor='username'>Username</label>
          <input
            type='text'
            className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
            id='username'
            name='username'
            required
          />
        </div>
        <div className="mb-4">
          <label className='block mb-2 text-gray-300' htmlFor='password'>Password</label>
          <div className="relative">
            <input
              className='p-3 outline-none text-sm rounded-md bg-gray-900 text-white w-full pr-12 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200'
              id='password'
              type={passwordHidden ? 'password' : 'text'}
              required
              name='password'
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setPasswordHidden(!passwordHidden)}
            >
              {passwordHidden ? (
                <img
                  className="w-5 h-5"
                  src='/eye.svg'
                  alt="show password"
                  style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                />
              ) : (
                <img
                  alt="hide password"
                  className="w-5 h-5"
                  src='/eyeclose.svg'
                  style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                />
              )}
            </span>
          </div>
        </div>
        <SubmitButton2 text="Login" />
      </form>
      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col items-center gap-2 text-sm">
        <Link to="/auth/forgotPassword" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          Forgot Password
        </Link>
        <p className="text-gray-400">
          Don't have an account? <Link to="/auth/signup" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;