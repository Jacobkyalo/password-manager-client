import logo from '../../../../assets/brand/logo.svg';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const index = () => {
  return (
    <footer className="mb-20 w-full text-black">
      <hr className="mx-auto mb-10 block border-2" />
      <div className="flex flex-col items-start justify-center gap-y-10">
        <div className="flex flex-col gap-y-6">
          <img src={logo} alt={logo} className="block w-full max-w-[300px] text-start" />
          <div className="ps-2">
            <h4 className="mb-6 text-[25px] font-medium">Reach Creator</h4>
            <div className="flex gap-x-6">
              <BsTwitter size={30} />
              <BsLinkedin size={30} />
              <BsGithub size={30} />
            </div>
          </div>
        </div>
        <div className="ps-2">
          <h4 className="mb-6 text-[25px] font-medium">Contribute</h4>
          <p className="opacity-80">Raise an issue</p>
          <p className="opacity-80">Open a pull request</p>
          <p className="opacity-80">
            Check code on <span className="text-violet-600">GitHub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default index;