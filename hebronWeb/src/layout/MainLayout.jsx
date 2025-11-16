import React from 'react';
import NavigationBar from '../component/NavigationBar.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 w-full overflow-x-hidden">
      <NavigationBar />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
