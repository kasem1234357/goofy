import Image from "next/image";
import Link from "next/link";

const Feautres = () => {
  return (
    <section className="grid grid-cols-5 grid-rows-1 md:h-[100vh] border-b border-black-300">
       <div className="flex flex-1 flex-col h-full col-span-2 ">
          <div className='  flex flex-1 border-b border-black-300'>
          <Image
        src="/building-2.jpg"
        
        width={460}
        height={500}
        className="hidden object-cover p-5  max-h-[86vh]  w-full md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
          </div>
       
          <div className=' flex-1 max-h-[14vh] '> </div>
        </div>
      <div className="flex flex-1 flex-col h-full justify-between  col-span-3   border-l border-black-300 ">
        <div className="flex-1 grid grid-cols-2 p-5 border-b border-black-300">
        <div className="grid grid-rows-2 ">
          <div className="flex flex-col justify-between pr-5 pb-7">
            <div>
              <h1 className="text-4xl font-bold text-black-500"><span className="tracking-wider">convenince</span> <br /> and comfort</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi earum itaque nisi architecto repellat iste inventore neque porro architecto repellat iste inventore neque porro</p>
            </div>
          </div>
          <div className='flex flex-col justify-end flex-1 p-[10px] pb-0 '>
             <Link className='p-3 w-full cursor-pointer bg-black-500 hover:bg-black-900 text-main-500 grid place-items-center ' href="/contact" >
             View more
</Link>
            </div>
        </div>
        <div className="grid grid-rows-2  pl-5">
       
          <div className="flex flex-col justify-end  pb-7">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ut obcaecati nesciunt voluptas explicabo iure cumque repellendus architecto repellat iste inventore neque porro . </p>
          </div>
          <div className="flex">
          <Image className="w-full h-full object-cover" src={'/fr-5.jpg'} alt="" width={400} height={500}/>
          </div>
        </div>
        </div>
       
        <div className=' flex-1 max-h-[14vh] '> </div>
      </div>
    </section>
  );
};
export default Feautres;
