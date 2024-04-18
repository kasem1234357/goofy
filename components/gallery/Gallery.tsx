import Image from "next/image"

const Gallery = ()=>{
    return (
        <section className="grid grid-cols-5 min-h-[80vh] border-b border-black-300">
         <div className=" grid grid-rows-2 col-span-2 border-r border-black-300">
            <div className=" border-b border-black-300">
            <Image alt="" src={'/fr-4.jpg'} width={400} height={400} className="w-full h-full object-cover p-5"/>
            </div>
            <div></div>
         </div>
         <div className=" col-span-3">
         <Image alt="" src={'/fr-1.jpg'} width={700} height={300} className="w-full h-full  p-5"/>
         </div>
        </section>
    )
}
export default Gallery