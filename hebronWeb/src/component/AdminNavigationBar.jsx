import React, { useEffect, useState, useRef } from "react";
import { adminNavLinks } from "../constants/data";
import { useNavigate, useLocation } from "react-router-dom";

const AdminNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemsRef = useRef([]);
  const navListRef = useRef(null);
  const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0 });

  // Detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Detect active route
  useEffect(() => {
    const path = location.pathname;
    const idx = adminNavLinks.findIndex((l) => l.path === path);
    setActiveIndex(idx === -1 ? 0 : idx);
  }, [location]);

  // Move highlight bar
  useEffect(() => {
    const container = navListRef.current;
    const activeEl = navItemsRef.current[activeIndex];
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const extra = 12;
      setSelectorStyle({
        left: itemRect.left - containerRect.left - extra / 2,
        width: itemRect.width + extra,
      });
    }
  }, [activeIndex, isMobile]);

   const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminTokenExpiry");

    navigate("/");
  };


  return (
    <>
      {/* Desktop Version */}
      {!isMobile && (
        <nav className="flex justify-center mt-2 py-5">
          <div className="flex shadow-xl justify-between items-center border-2 border-customGreen gap-5 rounded-4xl px-6">

            {/* Logo */}
            <div className="flex gap-2 items-center text-xl">
              <img src="/logo.svg" width={50} alt="logo" />
              <div className="flex flex-col leading-[0.7]">
                <span className="text-md font-semibold">Hebron</span>
                <span className="text-sm font-semibold">Foundation</span>
              </div>
            </div>

            {/* Menu */}
            <div ref={navListRef} className="relative flex space-x-4 items-center">
              <span
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: selectorStyle.left, width: selectorStyle.width }}
              />

              {adminNavLinks.map((item, index) => (
                <p
                  key={index}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  onClick={() => navigate(item.path)}
                  className={`cursor-pointer px-3 py-1 text-sm transition ${
                    activeIndex === index
                      ? "text-customGreen font-semibold"
                      : "text-gray-700 hover:text-gray-400"
                  }`}
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div>
              <button
                className=" bg-emerald-700 hover:bg-emerald-600 py-1 px-4 rounded-3xl text-gray-50 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Version */}
      {isMobile && (
        <>
          <nav className="shadow-xl rounded-2xl mt-2 px-4 mx-2 py-3 bg-white flex justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" width={40} alt="logo" />
              <div className="flex flex-col leading-[0.7]">
                <span className="text-base font-bold">Hebron</span>
                <span className="text-xs font-semibold">Foundation</span>
              </div>
            </div>

            <button className="text-3xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </nav>

          {menuOpen && (
            <div className="bg-white mt-1 rounded-2xl mx-2 shadow-sm flex flex-col items-center gap-4 py-4 text-sm mb-2">
              {adminNavLinks.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false);
                  }}
                  className={`cursor-pointer ${
                    activeIndex === index ? "text-customGreen font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </p>
              ))}
               <div>
              <button
                className=" bg-emerald-700 hover:bg-emerald-600 py-1 px-4 rounded-3xl text-gray-50 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            </div>
            
          )}
         
        </>
      )}
    </>
  );
};

export default AdminNavigationBar;
