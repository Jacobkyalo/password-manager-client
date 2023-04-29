import { howItWorksStrings } from '../../utils/index';

const index = () => {
  return (
    <section className="mb-16 w-full">
      <div className="flex flex-col items-center text-center text-black">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">How it Works</h2>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
          {howItWorksStrings?.map((string) => (
            <div key={string.title} className="w-full rounded-xl bg-violet-100 px-4 py-6 md:w-[500px] lg:w-full ">
              <img src={string.icon} alt="create-account-icon" className="mx-auto w-20" />
              <h3 className="my-6 text-2xl font-semibold">{string.title}</h3>
              <p className="mx-auto w-full break-words text-[17px] opacity-80 md:w-[300px] md:text-[19px] lg:w-full">
                {string.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
