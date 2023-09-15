import { Link } from 'react-router-dom';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-[20px] md:py-[25]">
      <Link to="/">
        <h1 className="text-xl font-bold text-violet-700 sm:text-2xl lg:text-3xl">Task Manager</h1>
      </Link>
      <div className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
        <Link to="/signup">
          <p className="text-[15px] md:text-[19px]">Sign Up</p>
        </Link>
        <Link to="/login">
          <button className="flex items-center gap-2 rounded-[8px] bg-violet-700 px-[15px] py-[10px] text-[15px] text-white transition-all duration-1000 hover:bg-violet-600 md:px-[40px] md:text-[19px]">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default index;
