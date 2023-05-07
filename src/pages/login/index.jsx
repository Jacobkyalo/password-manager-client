import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/brand/logo.svg';

const index = () => {
  return (
    <section className="mt-10 flex h-[80vh] flex-col items-center justify-start gap-8">
      <Link to="/">
        <img src={logo} alt="logo" className="w-full max-w-[300px]" />
      </Link>
      <form className="w-full max-w-[400px] rounded-lg bg-white px-4 py-6 shadow-[0_50px_200px_50px_#6d28d9] md:px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold leading-none md:text-5xl">Welcome</h2>
          <p className="text-[14px] opacity-80 md:text-[16px]">Login to access your account</p>
        </div>
        <label htmlFor="email" className="block">
          <span className="mb-2 block text-[17px] font-medium">Email</span>
          <div className="mb-4 rounded-md border border-black p-3">
            <input type="email" className="w-full border-none bg-transparent outline-none" placeholder="Enter email" />
          </div>
        </label>
        <label htmlFor="password" className="block">
          <span className="mb-2 block text-[17px] font-medium">Password</span>
          <div className="mb-3 flex items-center justify-between rounded-md border border-black p-3">
            <input
              type="password"
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter password"
            />
            <EyeIcon className="h-[20px] w-[20px]" />
            {/* <EyeSlashIcon className="h-[20px] w-[20px]" /> */}
          </div>
        </label>
        <p className="text-end text-[14px] opacity-80">Forgot password?</p>
        <button
          type="submit"
          className="mt-8 w-full rounded-[8px] bg-violet-700 px-[40px] py-[10px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Login
        </button>
        <p className="mt-4 text-[14px] opacity-80 md:text-[17px]">
          Don't have an account?{' '}
          <Link to="/signup" className="text-violet-700">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default index;
