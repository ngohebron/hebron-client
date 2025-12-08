import React, { useEffect, useState, useRef } from 'react';
import { navLinks } from '../constants/data';
import { CiUser } from "react-icons/ci";
import { useNavigate, useLocation } from 'react-router-dom';


const NavigationBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navItemsRef = useRef([]);
  const navListRef = useRef(null);
  const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0 });
  const location = useLocation();

   const handleNavigation = (path) => {
    navigate(path);
  };

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

  useEffect(() => {
    // compute active index based on current path
    const path = location.pathname;
    const idx = navLinks.findIndex((link) => link.path === path);
    const newIndex = idx === -1 ? 0 : idx;
    setActiveIndex(newIndex);
  }, [location]);

  useEffect(() => {
    // position the glass selector to the active nav item
    const container = navListRef.current;
    const activeEl = navItemsRef.current[activeIndex];
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const extra = 12; // extra padding for the glass around the text
      const left = itemRect.left - containerRect.left - extra / 2; // relative left
      setSelectorStyle({ left, width: itemRect.width + extra });
    }
  }, [activeIndex, isDesktop]);

  const updateSelectorToIndex = (idx) => {
    const container = navListRef.current;
    const el = navItemsRef.current[idx];
    if (container && el) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      const extra = 12;
      const left = itemRect.left - containerRect.left - extra / 2;
      setSelectorStyle({ left, width: itemRect.width + extra });
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      const container = navListRef.current;
      const activeEl = navItemsRef.current[activeIndex];
      if (container && activeEl) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();
        const extra = 12;
        const left = itemRect.left - containerRect.left - extra / 2;
        setSelectorStyle({ left, width: itemRect.width + extra });
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [activeIndex]);

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
       
        <div ref={navListRef} className="nav-list relative flex space-x-4 items-center">
          {/* glass selector */}
          <span
            className="nav-glass-selector absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: selectorStyle.left, width: selectorStyle.width }}
          />
         
           {navLinks.map((item, index) => (
        <p
          key={index}
          ref={(el) => (navItemsRef.current[index] = el)}
          onClick={() => {
            handleNavigation(item.path);
            setActiveIndex(index);
          }}
          onMouseEnter={() => updateSelectorToIndex(index)}
          onMouseLeave={() => updateSelectorToIndex(activeIndex)}
          className={`nav-item relative z-10 text-sm cursor-pointer px-3 py-1 transition ${index === activeIndex ? 'text-customGreen font-semibold' : 'text-gray-700 hover:text-gray-400'}`}
        >
          {item.label}
        </p>
      ))}


         
        </div>
      </div>
      <div className="flex items-center space-x-4">
        
        <CiUser  size={40} className='cursor-pointer' color='gray-600' onClick={()=> navigate('/adminlogin')}/>
        <button className="bg-customGreen text-white px-2 py-2 rounded-4xl w-full hover:bg-blue-700 transition"
                onClick={() => navigate('donationhub')}>
          Support the cause
        </button>
      </div>
      </div>
    </nav>
    )}
    
    {isMobile && (
        <>
          <nav className="  shadow-xl rounded-2xl mt-2 px-4 mx-2 py-3 bg-white flex items-center justify-between mb-2">

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
                {navLinks.map((item, index) => (
        <p
          key={index}
          onClick={() => {
            handleNavigation(item.path);
            setActiveIndex(index);
            setMenuOpen(false);
          }}
          className={`hover:text-gray-400 text-gray-700 text-sm cursor-pointer ${index === activeIndex ? 'text-customGreen font-semibold' : ''}`}
        >
          {item.label}
        </p>
      ))}

              <div className="flex flex-col items-center gap-3 mt-2">
                <CiUser size={25} />
                <button className="bg-customGreen text-white px-3 py-2 rounded-4xl"
                        onClick={() => navigate('/donationhub')}>
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
