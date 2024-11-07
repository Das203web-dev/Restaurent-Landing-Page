import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ImSpoonKnife } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



export default function Header() {
  const [open,setOpen] = useState(false)
  const navRef = useRef();

  const navLinks = [
    { name: 'Home', path: 'home', state: '/#home' },
    { name: 'About', path: 'about', state: '/#about' },
    { name: 'Portfolio', path: 'portfolio', state: '/#portfolio' },
    { name: 'Contact', path: 'contact', state: '/#contact' },
  ];

  return (
    <nav ref={navRef} className='fixed z-50 top-0 w-full text-white backdrop-blur-sm'>
      <div className='px-5 md:px-0 max-w-7xl mx-auto  flex justify-between items-center py-5'>
        <div className='flex items-center gap-2 z-50 cursor-pointer'>
          <div className='bg-[#FEBF00] flex justify-center items-center w-12 h-12 rounded-full'>
            <div className='bg-[#FEBF00] flex justify-center items-center border-2 border-red-600 w-10 h-10 rounded-full'>
              <ImSpoonKnife className='text-red-600 text-2xl' />
            </div>
          </div>
          <h1 className='font-normal text-3xl text-white'><span className='font-semibold'>Restau</span>rant</h1>
        </div>
        <div className={`flex md:static md:flex-row flex-col absolute justify-center items-center gap-10 ${open?"left-0 top-0 bg-yellow-400 w-full h-screen overflow-hidden duration-700":"-left-full top-0 bottom-0 h-screen md:h-auto duration-1000"}`}>
          {
            navLinks.map(link => (
              <Link
                className='cursor-pointer'
                key={link.path}
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => window.history.pushState(null, '', link.state)}
              >
                {link.name}
              </Link>
            ))
          }
        </div>
        <button className='bg-[#FEBF00] hidden md:block w-fit uppercase py-2 font-semibold text-black px-3 text-nowrap'>book table</button>

        <div className='text-3xl cursor-pointer z-50 md:hidden' onClick={()=>setOpen(!open)}>
          {
            open ?<RxCross2></RxCross2>:<RxHamburgerMenu></RxHamburgerMenu>
          }
        </div>

      </div>
    </nav>
  );
}
