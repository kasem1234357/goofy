import Image from "next/image"

const Info = ()=>{
  return (
    <section className="border-b border-black-300">
      <div className="flex  min-h-[100vh] w-5/6">
      <div className="flex-1  border-r border-black-300">
        <Image alt="" src={'/building-2.jpg'} width={400} height={400} className="w-full h-full object-cover p-5"/>
        </div>
        <div className="flex flex-col justify-between flex-[3] p-5">
         <div>
          <h2 className="text-4xl text-black-500 font-bold"><span className=" w-full flex justify-end">we are committed to creating </span>
          building that are not only functional and aesthetically pleasing
          </h2>
         </div>
         <div className= "flex flex-col gap-7 text-black-400">
          <div className=" flex justify-start">
            <div className="flex-1 ">
              <h4 className="font-bold">About us</h4>
            </div>
            <div className="flex-1 uppercase">
              <p className="pb-7"><span className="pr-10">(01)</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p><span className="pr-10">(02)</span>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing lorem.</p>
            </div>
          </div>
          <div className=" flex justify-start">
            <div className="flex-1 ">
              <h4 className="font-bold">our approach</h4>
            </div>
            <div className="flex-1 uppercase">
              <p className="pb-5"><span className="pr-10">(03)</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              
            </div>
          </div>
          <div className=" flex justify-start">
            <div className="flex-1 ">
              <h4 className="font-bold">our mission</h4>
            </div>
            <div className="flex-1 uppercase">
              <p className="pb-5"><span className="pr-10">(04)</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             
            </div>
          </div>
         </div>
        </div>
      </div>
       
    
    </section>
  )
}
export default Info