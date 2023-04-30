import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const show = () => {
    setShowPassword(!showPassword);
  };

  const hide = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="mb-12">
      <div className="flex flex-col gap-y-10">
        <h2 className="text-[25px] font-semibold">Your Passwords</h2>
        <div className="flex flex-col gap-x-4 gap-y-6 md:flex-row">
          <div className="w-full rounded-xl bg-violet-100 p-6">
            <p className="mb-4 text-[20px] font-medium">Twitter password</p>
            <div className="mb-6 flex items-center justify-between rounded-md border border-black p-4">
              <label className="block">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="border-none bg-transparent outline-none"
                  value="12345678"
                />
              </label>
              {showPassword ? (
                <EyeSlashIcon className="h-[20px] w-[20px]" onClick={show} />
              ) : (
                <EyeIcon className="h-[20px] w-[20px]" onClick={hide} />
              )}
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Copy
              </button>
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Change
              </button>
            </div>
          </div>
          <div className="w-full rounded-xl bg-violet-100 p-6">
            <p className="mb-4 text-[20px] font-medium">Linkedin password</p>
            <div className="mb-6 flex items-center justify-between rounded-md border border-black p-4">
              <label className="block">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="border-none bg-transparent outline-none"
                  value="12345678"
                />
              </label>
              {showPassword ? (
                <EyeSlashIcon className="h-[20px] w-[20px]" onClick={show} />
              ) : (
                <EyeIcon className="h-[20px] w-[20px]" onClick={hide} />
              )}
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Copy
              </button>
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Change
              </button>
            </div>
          </div>
          <div className="w-full rounded-xl bg-violet-100 p-6">
            <p className="mb-4 text-[20px] font-medium">GitHub password</p>
            <div className="mb-6 flex items-center justify-between rounded-md border border-black p-4">
              <label className="block">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="border-none bg-transparent outline-none"
                  value="12345678"
                />
              </label>
              {showPassword ? (
                <EyeSlashIcon className="h-[20px] w-[20px]" onClick={show} />
              ) : (
                <EyeIcon className="h-[20px] w-[20px]" onClick={hide} />
              )}
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Copy
              </button>
              <button className="text-md w-[50%] rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-white transition-all duration-1000 hover:bg-violet-600">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
