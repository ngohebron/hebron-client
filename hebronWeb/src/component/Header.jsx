// components/Header.jsx
import React from 'react';
import { FiMenu, FiBell, FiSearch } from 'react-icons/fi';

const Header = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className="sticky top-0 z-20 bg-white border-b shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button - Only show when sidebar is closed on mobile */}
          <button
            onClick={toggleSidebar}
            className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 ${sidebarOpen ? 'hidden' : 'block'}`}
          >
            <FiMenu size={24} />
          </button>
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <FiBell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="hidden md:block">
              <p className="font-medium">Admin</p>
              <p className="text-sm text-gray-500">Helton Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;