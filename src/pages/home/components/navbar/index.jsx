import logo from '../../../../assets/brand/logo.svg';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-[25px]">
      <div className=" w-auto">
        <img src={logo} alt="logo" className="block w-full max-w-[160px]" />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[15px]">Sign Up</p>
        <button className="flex items-center gap-2 rounded-[8px] bg-violet-700 px-[15px] py-[10px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Login
        </button>
      </div>
    </nav>
  );
};
export default index;
