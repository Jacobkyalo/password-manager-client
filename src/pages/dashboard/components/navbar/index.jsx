import { Link } from 'react-router-dom';
import logo from '../../../../assets/brand/logo.svg';
import profile from '../../../../assets/svg/profile.svg';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-[20px] md:py-[25px]">
      <Link to="/">
        <img src={logo} alt="logo" className="block w-full max-w-[160px] md:max-w-[180px]" />
      </Link>
      <img src={profile} alt="profile-photo" className="h-[50px] w-[50px]" />
    </nav>
  );
};
export default index;
