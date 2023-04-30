import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import noPasswords from '../../../../assets/images/no-password.png';

const index = () => {
  return (
    <header className="mb-12 mt-6 w-full text-black">
      <section className="flex w-full flex-col gap-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold md:text-[25px] lg:text-[30px]">Welcome, Jacob</h2>
          <Link to="/add-password">
            <button className="text-md flex items-center gap-2 rounded-[8px] bg-violet-700 px-[10px] py-[8px] text-white transition-all duration-1000 hover:bg-violet-600 md:px-[20px] md:py-[10px]">
              <AiOutlinePlus size={20} /> New
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="w-full text-[20px] font-bold leading-[20px] md:text-[30px]">You have no passwords yet!</h3>
          <p className="mb-4 mt-2 break-words text-[17px] opacity-70 md:text-[19px]">Try adding some.</p>
          <img src={noPasswords} alt="no-passwords-image" className="mb-4 w-full max-w-[250px]" />
          <Link to="/add-password">
            <button className="flex items-center gap-2 rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
              <AiOutlinePlus size={20} /> Add One
            </button>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default index;
