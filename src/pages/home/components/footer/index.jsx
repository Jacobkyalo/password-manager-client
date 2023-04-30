import { Link } from 'react-router-dom';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import logo from '../../../../assets/brand/logo.svg';

const index = () => {
  return (
    <footer className="mb-20 w-full text-black">
      <hr className="mx-auto mb-10 block border-2" />
      <div className="flex flex-col items-start justify-center gap-y-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-6">
          <Link to="/">
            <img src={logo} alt={logo} className="block w-full max-w-[200px] text-start" />
          </Link>
          <div className="ps-2">
            <h4 className="mb-6 text-[20px] font-medium">Reach Creator</h4>
            <div className="flex gap-x-6">
              <a href="https://twitter.com/jacobkyalo202" target="_blank" rel="noreferrer">
                <BsTwitter size={30} />
              </a>
              <a href="https://www.linkedin.com/in/jacobkyalo/" target="_blank" rel="noreferrer">
                <BsLinkedin size={30} />
              </a>
              <a href="https://github.com/Jacobkyalo/" target="_blank" rel="noreferrer">
                <BsGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="ps-2">
          <h4 className="mb-6 text-[20px] font-medium">Contribute</h4>
          <a href="https://github.com/Jacobkyalo/password-manager-client/issues" target="_blank" rel="noreferrer">
            <p className="text-[14px] opacity-80 md:text-[17px]">Raise an issue</p>
          </a>
          <a href="https://github.com/Jacobkyalo/password-manager-client/pulls" target="_blank" rel="noreferrer">
            <p className="text-[14px] opacity-80 md:text-[17px]">Open a pull request</p>
          </a>
          <a href="https://github.com/Jacobkyalo/password-manager-client/" target="_blank" rel="noreferrer">
            <p className="text-[14px] opacity-80 md:text-[17px]">
              Check code on <span className="text-violet-600">GitHub</span>
            </p>
          </a>
        </div>
      </div>
      <p className="mt-6 ps-2 text-start text-[14px] opacity-80 md:mt-12 md:text-[17px]">
        &copy; Password Manager. All rights reserved
      </p>
    </footer>
  );
};

export default index;
