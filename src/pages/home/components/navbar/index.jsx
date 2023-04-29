import logo from '../../../../assets/brand/logo.svg';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-[20px] md:py-[25]">
      <div>
        <img src={logo} alt="logo" className="lg-max-w-[200px] block w-full max-w-[160px] md:max-w-[180px]" />
      </div>
      <div className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
        <p className="text-[15px] md:text-[19px]">Sign Up</p>
        <button className="flex items-center gap-2 rounded-[8px] bg-violet-700 px-[15px] py-[10px] text-[15px] text-white transition-all duration-1000 hover:bg-violet-600 md:px-[40px] md:text-[19px]">
          Login
        </button>
      </div>
    </nav>
  );
};
export default index;
