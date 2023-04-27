import { howItWorksStrings } from '../../utils/index';

const index = () => {
  return (
    <section className="mb-12">
      <div className="flex flex-col items-center text-center text-black">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">How it Works</h2>
        </div>
        <div className="flex flex-col gap-4">
          {howItWorksStrings?.map((string) => (
            <div key={string.title} className="w-full rounded-xl bg-violet-100 p-6">
              <img src={string.icon} alt="create-account-icon" className="mx-auto w-20" />
              <h3 className="my-6 text-2xl font-semibold">{string.title}</h3>
              <p className="break-words text-[17px] opacity-70">{string.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
