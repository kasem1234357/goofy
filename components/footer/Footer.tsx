const Footer = ()=>{
 return (
 <footer className="grid grid-cols-3 w-full min-h-[60vh]">
    <div className="border-r flex flex-col justify-between border-black-300 p-5">
        <h3 className="uppercase text-3xl  font-bold">inspiring <br />architecture <br />for a new area</h3>
        <div className="flex justify-between uppercase font-semibold">
            <span>extra information</span>
            <span>contact us</span>
        </div>
    </div>
    <div className="border-r border-black-300 p-5">
    <div className=" flex justify-start w-4/5">
            <div className="flex-1 ">
              <h4 className="font-bold">About us</h4>
            </div>
            <div className="flex-[2] uppercase">
              <p className="pb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing lorem.</p>
            </div>
          </div>
    </div>
    <div className="flex flex-col justify-between p-5">
    <div className= "flex flex-col gap-7 text-black-400 w-11/12">
          <div className=" flex justify-start">
            <div className="flex-1 ">
              <h4 className="font-bold">About us</h4>
            </div>
            <div className="flex-1 uppercase">
              <p className="pb-7 underline">kasemalolo2002@gmail.com</p>
             
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
         
         </div>
         <div className="flex justify-between uppercase font-semibold">
            <span>extra information</span>
            <span>top</span>
        </div>
    </div>
   

 </footer>
 )
}
export default Footer