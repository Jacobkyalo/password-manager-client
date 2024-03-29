import { Link } from 'react-router-dom';

const index = () => {
  return (
    <section className="mt-10 flex h-[80vh] flex-col items-center justify-start gap-10">
      <Link to="/">
        <h1 className="text-xl font-bold text-violet-700 sm:text-2xl lg:text-3xl">Task Manager</h1>
      </Link>
      <form className="w-full max-w-[400px] rounded-lg px-4 py-6 shadow-[0_50px_200px_50px_#6d28d9] md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold leading-none">Forgot password?</h2>
          <p className="text-[14px] opacity-80">
            Don&apos;t worry enter your email below and we will send a link to reset your password.
          </p>
        </div>
        <label htmlFor="email" className="block">
          <span className="mb-2 block text-[17px] font-medium">Email</span>
          <div className="mb-6 rounded-md border border-black p-3">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-none bg-transparent outline-none"
              placeholder="Enter email"
            />
          </div>
        </label>
        <button
          type="submit"
          className="mt-4 w-full rounded-[8px] bg-violet-700 px-[40px] py-[10px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Send Reset Link
        </button>
      </form>
    </section>
  );
};

export default index;
