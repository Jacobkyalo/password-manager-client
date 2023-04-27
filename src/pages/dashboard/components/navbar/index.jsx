import logo from '../../../../assets/brand/logo.svg';
import profile from '../../../../assets/svg/profile.svg';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-[25px]">
      <div className=" w-auto">
        <img src={logo} alt="logo" className="block w-full max-w-[160px]" />
      </div>
      <img src={profile} alt="profile-photo" className="h-[50px] w-[50px]" />
    </nav>
  );
};
export default index;
