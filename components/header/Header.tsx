import Image from 'next/image';
import Link from 'next/link';
const Header = ()=>{
 return (
    <header  className="flex w-full min-h-[80vh] md:h-[85vh] justify-between border-b border-black-300  ">
        <div className="flex-1 flex flex-col  border-r border-black-300">
            <h1 className='text-6xl flex-1 px-5 py-10 uppercase w-4/5'>expert construction services for every project</h1>
            
            <div className='flex flex-1 p-[10px] max-h-[15vh] border-y border-black-300'>
             <Link className='h-full w-full cursor-pointer bg-black-500 hover:bg-black-900 text-main-500 grid place-items-center' href="/contact" >
             Contact us
</Link>
            </div>
            <div className='flex-1 max-h-[15vh] '> </div>
            
        </div>
        <div className="flex flex-1 flex-col h-full  ">
          <div className='  h-full flex flex-1 border-b border-black-300'>
          <Image
        src="/header.jpg"
        
        width={560}
        height={500}
        className="hidden object-cover p-5  h-full  w-full md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
          </div>
       
          <div className='flex-1 max-h-[15vh]'> </div>
        </div>
    </header>
 )
}
export default Header