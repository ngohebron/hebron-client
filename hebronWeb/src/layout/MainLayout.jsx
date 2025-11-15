import React from 'react';
import NavigationBar from '../component/NavigationBar.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 font-sans">
      <NavigationBar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
