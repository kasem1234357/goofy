import Link from "next/link";

type props ={
 props:{
    numberOfItem?:Number;
    content?:[string]
 }
}


const AboutUs = ()=>{
 return (
    <section className="flex min-h-[80vh]  border-b border-black-300 w-full">
        <div className="flex flex-col justify-between basis-2/5   border-r border-black-300">
            <div className="flex flex-1 h-full p-5 flex-col justify-between border-b border-black-300">
            <h2 className="text-black-700 text-2xl font-bold">
             delivering iconic projects in partnership with our client
             around the world

            </h2>
            <Link className="flex items-center pb-3" href={'/about'}>
                <span className="relative mr-14  w-20 rounded-full block h-20  border border-black-500 ">
                    <i className="absolute w-full h-px bg-black-500 top-1/2 left-1/2 ">
                        <i className="absolute grid place-items-center  top-1/2 -translate-y-1/2 -translate-x-full left-full"> &gt;</i>
                    </i>
                </span>
                <span className="italic">Learn more</span>
            </Link>
            </div>
            <div className='flex-1 max-h-[15vh]'> </div>
        </div>
        <div className="flex flex-1 flex-col basis-3/5 ">
            <div className="flex flex-1 border-b border-black-300">
            <div className="flex flex-1 p-5 border-r border-black-300">
            <p className="p-2 text-black-400">A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals.

Over time, companies have evolved to have following features: "separate legal personality, limited liability, transferable shares, investor ownership, and a managerial hierarchy".[1] The company, as an entity, was created by the state which granted the privilege of incorporation.</p>

        </div>
        <div className="flex flex-1 p-5 ">
     <p className="p-2 text-black-400">A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals.</p>
        </div>
            </div>
            <div className='flex-1 max-h-[15vh]'> </div>
        </div>
        
    </section>
 )
}
export default AboutUs