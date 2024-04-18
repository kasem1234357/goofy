import Image from "next/image";

const Achivment = () => {
  return (
    <>
    <section className="grid w-full grid-cols-5 min-h-dvh  border-b border-black-300">
      <div className="col-span-2 grid grid-cols-2  border-r border-black-300">
        <div className="grid grid-rows-3 border-r border-black-300">
          <div className="p-2 border-b border-black-300">
            <span className="text-7xl block font-semibold pb-2 text-black-700">400</span>
            <h3 className="uppercase font-bold pt-3">professionals</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum quibusdam doloribus, velit accusamus similique vero assumenda ex debitis magnam sunt</p>
          </div>
          <div className="p-2 border-b border-black-300">
          <Image alt="" src={'/fr-4.jpg'} width={400} height={400} className="w-full h-full object-cover"/>
          </div>
          <div className="p-2 ">
          <Image alt="" src={'/fr-5.jpg'} width={400} height={400} className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="grid grid-rows-3">
          <div className="p-4 row-span-2 border-b border-black-300">
            <Image alt="" src={'/building-2.jpg'} width={200} height={500} className="w-full h-full"/>
          </div>
          <div className="p-2">
          <span className="text-7xl block font-semibold text-black-700 pb-2">62</span>
            <h3 className="uppercase  font-bold pt-3">cites</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum quibusdam doloribus, velit accusamus similique vero assumenda ex debitis magnam sunt</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 col-span-3">
        <div className="grid col-span-2 grid-rows-3 border-r border-black-300">
          <div className="grid grid-cols-2  border-b border-black-300">
            <div className="p-2 border-r border-black-300"></div>
            <div className="p-2">
               <Image alt="" src={'/fr-5.jpg'} width={400} height={400} className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="p-4 row-span-2 ">
            <Image alt="" src={'/fr-1.jpg'} width={400} height={400} className="w-full h-full"/>
          </div>
        </div>
        <div className="grid  grid-rows-3">
          <div className="p-2 border-b border-black-300">
          <span className="text-7xl block font-semibold text-black-700 pb-2">18</span>
            <h3 className="uppercase  font-bold pt-3">cites</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum quibusdam doloribus, velit accusamus similique vero assumenda ex debitis magnam sunt</p>
          </div>
          <div className="p-2 border-b border-black-300">
          <span className="text-7xl block font-semibold text-black-700 pb-2">4</span>
            <h3 className="uppercase  font-bold pt-3">cites</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum quibusdam doloribus, velit accusamus similique vero assumenda ex debitis magnam sunt</p>
          </div>
          <div className="p-2">
          <span className="text-7xl block font-semibold text-black-700 pb-2">98</span>
            <h3 className="uppercase  font-bold pt-3">cites</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum quibusdam doloribus, velit accusamus similique vero assumenda ex debitis magnam sunt</p>
          </div>
        </div>
      </div>
    </section>
    <div className="flex h-[15vh]  border-b border-black-300 ">
      <div className='flex-1 max-h-[15vh] border-r border-black-300'> </div>
      <div className='flex-1 max-h-[15vh] '> </div>
      </div>
    </>
    
  );
};
export default Achivment;
