import React from "react";
import AdminNavigationBar from "../component/AdminNavigationBar";

const AdminMainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigationBar />
      <div className="px-4 md:px-10 py-5">{children}</div>
    </div>
  );
};

export default AdminMainLayout;
