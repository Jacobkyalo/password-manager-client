import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/brand/logo.svg';

const index = () => {
  return (
    <section className="mt-10 flex h-[80vh] flex-col items-center justify-start gap-10">
      <img src={logo} alt="logo" className="w-full max-w-[300px]" />
      <form className="w-full max-w-[400px] rounded-lg ">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold leading-none">Create Account</h2>
          <p className="text-[14px] opacity-80">Sign up below for a free account</p>
        </div>
        <label htmlFor="username" className="block">
          <span className="mb-2 block text-[17px] font-medium">Username</span>
          <div className="mb-6 rounded-md border border-black p-4">
            <input
              type="text"
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter username"
            />
          </div>
        </label>
        <label htmlFor="email" className="block">
          <span className="mb-2 block text-[17px] font-medium">Email</span>
          <div className="mb-6 rounded-md border border-black p-4">
            <input type="email" className="w-full border-none bg-transparent outline-none" placeholder="Enter email" />
          </div>
        </label>
        <label htmlFor="password" className="block">
          <span className="mb-2 block text-[17px] font-medium">Password</span>
          <div className="mb-12 flex items-center justify-between rounded-md border border-black p-4">
            <input
              type="password"
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter password"
            />
            <EyeIcon className="h-[20px] w-[20px]" />
            {/* <EyeSlashIcon className="h-[20px] w-[20px]" /> */}
          </div>
        </label>
        <button
          type="submit"
          className="w-full rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default index;
