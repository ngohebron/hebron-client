import React, { useEffect, useState } from 'react';

import { CiUser } from "react-icons/ci";


const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsDesktop(true);
      }
    };

    handleResize(); // call once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    {isDesktop && (
     <nav className="   flex items-center justify-center mt-2 py-5">
        <div className='flex shadow-xl justify-between items-center border-2 border-customGreen gap-5 rounded-4xl px-6 space-x-6 md:px-2 '>
      <div className="flex items-center space-x-8">
        <div className="flex gap-1 items-center text-xl ">
            <img src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className='py-1'
            />
            <div className="flex flex-col text-center leading-[0.7]">
  <span className="text-md font-semibold">Hebron</span>
  <span className="text-sm font-semibold">Foundation</span>
</div>
        </div>
       
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 text-gray-700 text-sm ">About Us</a>
          <a href="#" className="hover:text-gray-400 text-gray-700 text-sm">Our Work</a>
          <a href="#" className="hover:text-gray-400 text-gray-700 text-sm">Get Involved</a>
          <a href="#" className="hover:text-gray-400 text-gray-700 text-sm">Gallery</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <CiUser  size={40} color='gray-600'/>
        <button className="bg-customGreen text-white px-2 py-2 rounded-4xl w-full hover:bg-blue-700 transition">
          Support the cause
        </button>
      </div>
      </div>
    </nav>
    )}
    
    {isMobile && (
        <>
          <nav className=" shadow-xl rounded-2xl mt-2 px-4 mx-2 py-3 bg-white flex items-center justify-between mb-2">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.svg" width={40} alt="logo" />
              <div className="flex flex-col leading-[0.7]">
                <span className="text-base font-bold">Hebron</span>
                <span className="text-xs font-semibold">Foundation</span>
              </div>
            </div>

            {/* ☰ button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-700"
            >
              ☰
            </button>
          </nav>

          {/* Expand Menu */}
          {menuOpen && (
            <div className="bg-white mt-1 rounded-2xl mx-2 shadow-sm flex flex-col items-center gap-4 py-4 text-sm mb-2">
              <a href="#">About Us</a>
              <a href="#">Our Work</a>
              <a href="#">Get Involved</a>
              <a href="#">Gallery</a>

              <div className="flex flex-col items-center gap-3 mt-2">
                <CiUser size={25} />
                <button className="bg-customGreen text-white px-3 py-2 rounded-4xl">
                  Support the cause
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
   
  );
};

export default NavigationBar;
