import { BsTrash } from 'react-icons/bs';

const index = () => {
  return (
    <section className="mb-12">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-[25px] font-semibold">Your tasks</h2>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" name="" id="" className="p-10" />
          <p className="text-[15px] text-black opacity-80 sm:text-[19px]">Go to the gym</p>
          <button type="button" className="ml-4">
            <BsTrash size={20} className="text-red-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;
