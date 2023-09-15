/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const index = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <nav className="flex items-center justify-between py-[20px] md:py-[25px]">
      <Link to="/">
        <h1 className="text-xl font-bold text-violet-700 sm:text-2xl lg:text-3xl">Task Manager</h1>
      </Link>
      <h5 className="text-xl capitalize text-black">{user?.username},</h5>
    </nav>
  );
};
export default index;
