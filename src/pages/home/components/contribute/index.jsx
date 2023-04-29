import contributeImg from '../../../../assets/images/contribute-photo.png';

const index = () => {
  return (
    <section className="mb-12">
      <div className="text-center text-black">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-5xl">Want to Contribute?</h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-y-12 text-center md:flex-row md:gap-x-14">
          <div className="md:text-start">
            <h3 className="text-2xl font-semibold md:text-3xl">Start Contributing</h3>
            <p className="my-2 mb-8 opacity-80 md:w-[400px]">
              Password manager is an open source project. Feel free to contribute by raising an issue or opening a PR :)
            </p>
            <button className="rounded-[8px] bg-violet-700 px-[40px] py-[15px] text-lg text-white transition-all duration-1000 hover:bg-violet-600">
              Contribute Now
            </button>
          </div>
          <div className="w-full max-w-[350px] md:max-w-[400px]">
            <img src={contributeImg} alt="contribute-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
