// components/Sidebar.jsx
import React from 'react';
import { 
  AiOutlineTransaction,
  AiOutlinePlusCircle,
  AiOutlineEdit,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineClose
} from 'react-icons/ai';
import { MdOutlineEventAvailable } from 'react-icons/md';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <AiOutlineDashboard size={20} /> },
    { id: 'createEvents', label: 'Create Events', icon: <AiOutlinePlusCircle size={20} /> },
    { id: 'updateEvents', label: 'Update Events', icon: <AiOutlineEdit size={20} /> },
    { id: 'transactions', label: 'Transactions', icon: <AiOutlineTransaction size={20} /> },
  ];

  const handleMenuItemClick = (tabId) => {
    setActiveTab(tabId);
    // Close sidebar automatically on mobile
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside className={`
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 fixed lg:fixed inset-0 lg:inset-y-0 lg:left-0 h-screen w-64 bg-gray-900 text-white 
      transition-transform duration-300 z-40 flex flex-col
    `}>
      {/* Header with Close Button */}
      <div className="p-6 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <MdOutlineEventAvailable size={28} className="text-blue-400" />
          <div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <p className="text-gray-400 text-sm">Helton Foundation</p>
          </div>
        </div>
        {/* Close Button (Visible only on mobile) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-300"
        >
          <AiOutlineClose size={20} />
        </button>
      </div>

      {/* Navigation - Takes full remaining height */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Section - Fixed at bottom */}
      <div className="p-4 border-t border-gray-800 space-y-4">
        <button 
          onClick={() => handleMenuItemClick('settings')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300"
        >
          <AiOutlineSetting size={20} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-900 text-red-300">
          <AiOutlineLogout size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;