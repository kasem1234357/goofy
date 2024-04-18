const Navbar = ()=>{
  
    return (
        <div className='flex h-full  justify-between align-middle   border-b-[1px] border-black-400'>
            <div className="flex items-center whitespace-nowrap basis-2/6">
              
                <ul className="flex flex-1">
                <li className="logo uppercase whitespace-nowrap font-semibold   px-3 py-4 md:px-3 md:pr-11 border-r border-black-500 hover--nav--effect">nova construct </li>
                <li className="flex w-full items-center justify-around gap-2.5  py-4   border-r border-black-500 hover--nav--effect">EN <span className="rounded-[100%] block w-2 h-2 bg-black-500"></span></li>
                <li className="flex w-full items-center justify-evenly gap-2.5  py-4   border-r border-black-500 hover--nav--effect">ABOUT US <span className="rounded-[100%] block w-2 h-2 bg-black-500"></span></li>
                </ul>
            </div>
            <div className="flex items-center whitespace-nowrap basis-2/6">
              
                <ul className="flex flex-1 uppercase">
                <li className="flex w-full items-center justify-around gap-2.5  py-4   border-l border-black-300 hover--nav--effect">projects <span className="rounded-[100%] block w-2 h-2 bg-black-500"></span></li>
                <li className="flex w-full items-center justify-around gap-2.5  py-4   border-l border-black-300 hover--nav--effect">news <span className="rounded-[100%] block w-2 h-2 bg-black-500"></span></li>
                <li className="flex w-full items-center justify-evenly gap-2.5  py-4   border-l border-black-300 hover--nav--effect">contacts <span className="rounded-[100%] block w-2 h-2 bg-black-500"></span></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Navbar