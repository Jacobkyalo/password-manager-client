import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState();

  const handlePasswordShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <section className="mt-20 flex h-[80vh] flex-col items-center justify-start">
      <form className="w-full max-w-[400px] rounded-lg px-4 py-6 shadow-[0_50px_200px_50px_#6d28d9] md:px-6">
        <div className="mb-8 flex justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-none">New Password</h2>
            <p className="text-[14px] opacity-80">Add a new a password here.</p>
          </div>
          <Link to="/dashboard">
            <button
              type="button"
              className="text-md rounded-[8px] bg-violet-700 px-[10px] py-[5px] text-white transition-all duration-1000 hover:bg-violet-600">
              Cancel
            </button>
          </Link>
        </div>
        <label htmlFor="account-name" className="block">
          <span className="mb-2 block text-[17px] font-medium">Account name</span>
          <div className="mb-6 rounded-md border border-black p-3">
            <input
              type="text"
              className="w-full border-none bg-transparent outline-none"
              placeholder="Account e.g Twitter"
            />
          </div>
        </label>
        <label htmlFor="account-password" className="block">
          <span className="mb-2 block text-[17px] font-medium">Account password</span>
          <div className="mb-12 flex items-center justify-between rounded-md border border-black p-3">
            <input
              type={show ? 'text' : 'password'}
              className="w-full border-none bg-transparent outline-none"
              placeholder="Account password"
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
          Add Password
        </button>
      </form>
    </section>
  );
};

export default index;
