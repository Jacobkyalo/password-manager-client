/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRegisterUserMutation } from '../../features/auth/authApiSlice';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const index = () => {
  const [show, setShow] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const handleStateChange = (e) => {
    e.preventDefault();
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    try {
      const username = signupInfo.username;
      const email = signupInfo.email;
      const password = signupInfo.password;
      await registerUser({ username, email, password }).unwrap();
      navigate('/login');
    } catch (error) {
      toast.error(error?.data.message || error?.error);
    }
  };

  const handlePasswordShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <section className="mt-6 flex h-[80vh] flex-col items-center justify-center gap-4 bg-transparent lg:justify-start">
      <Link to="/">
        <h1 className="text-xl font-bold text-violet-700 sm:text-2xl lg:text-3xl">Task Manager</h1>
      </Link>
      <form
        onSubmit={handleRegisterUser}
        className="block w-full max-w-[400px] rounded-lg bg-white px-4 py-6 shadow-[0_50px_200px_50px_#6d28d9] md:px-6">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold leading-none md:text-4xl">Create Account</h2>
          <p className="text-[14px] opacity-80 md:text-[16px]">Sign up for a free account</p>
        </div>
        <label htmlFor="username" className="block">
          <span className="mb-2 block text-[17px] font-medium">Username</span>
          <div className="mb-4 rounded-md border border-black p-3">
            <input
              type="text"
              name="username"
              id="username"
              value={signupInfo.username}
              onChange={handleStateChange}
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter username"
            />
          </div>
        </label>
        <label htmlFor="email" className="block">
          <span className="mb-2 block text-[17px] font-medium">Email</span>
          <div className="mb-4 rounded-md border border-black p-3">
            <input
              type="email"
              name="email"
              id="email"
              value={signupInfo.email}
              onChange={handleStateChange}
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter email"
            />
          </div>
        </label>
        <label htmlFor="password" className="block">
          <span className="mb-2 block text-[17px] font-medium">Password</span>
          <div className="mb-8 flex items-center justify-between rounded-md border border-black p-3">
            <input
              type={show ? 'text' : 'password'}
              name="password"
              id="password"
              value={signupInfo.password}
              onChange={handleStateChange}
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter password"
            />
            {show ? (
              <EyeSlashIcon className="h-[20px] w-[20px] cursor-pointer" onClick={handlePasswordShow} />
            ) : (
              <EyeIcon className="h-[20px] w-[20px] cursor-pointer" onClick={handlePasswordShow} />
            )}
          </div>
        </label>
        <button
          type="submit"
          className="w-full rounded-[8px] bg-violet-700 px-[40px] py-[10px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Sign Up
        </button>
        <p className="mt-4 text-[14px] opacity-80 md:text-[17px]">
          Already have an account?{' '}
          <Link to="/login" className="text-violet-700">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default index;
