import { ArrowRightIcon } from '@heroicons/react/24/solid';

const index = () => {
  return (
    <header className="my-12 w-full md:my-14">
      <section className="flex flex-col items-center justify-center  text-center">
        <h1 className="w-full text-[60px] font-bold leading-[60px] text-black md:text-[100px] md:leading-[80px] lg:text-[120px] lg:leading-[120px]">
          Manage{' '}
          <span className="bg-gradient-to-r from-violet-700 to-violet-600 bg-clip-text text-transparent">
            passwords
          </span>
          <br />
          <span className="">like</span> a pro
        </h1>
        <p className="my-8 break-words text-[19px] text-black opacity-80 md:w-[600px]">
          Are you tired of changing your accounts passwords after forgetting them? Try password manager today to help
          you manage passwords.
        </p>
        <button className="flex items-center gap-2 rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
          Get Started Today <ArrowRightIcon className="h-6 w-6" />
        </button>
      </section>
    </header>
  );
};

export default index;
