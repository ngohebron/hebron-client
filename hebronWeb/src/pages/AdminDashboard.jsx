// pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminMainLayout from '../layout/AdminMainLayout';
import { FiDollarSign, FiCalendar, FiUsers, FiPackage } from 'react-icons/fi';


const AdminDashboard = () => {

   const stats = [
      { label: 'Total Donations', value: '₹ 85,000', icon: <FiDollarSign size={24} />, color: 'text-green-600', bg: 'bg-green-100' },
      { label: 'Upcoming Events', value: '3', icon: <FiCalendar size={24} />, color: 'text-blue-600', bg: 'bg-blue-100' },
      { label: 'Active Volunteers', value: '127', icon: <FiUsers size={24} />, color: 'text-purple-600', bg: 'bg-purple-100' },
      { label: 'Meals Served', value: '2,450', icon: <FiPackage size={24} />, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

   const recentTransactions = [
    { donor: 'John Doe', amount: '₹ 500', date: '2024-01-15', status: 'Completed' },
    { donor: 'Jane Smith', amount: '₹ 1000', date: '2024-01-14', status: 'Completed' },
    { donor: 'Robert Johnson', amount: '₹ 2000', date: '2024-01-13', status: 'Pending' },
  ];
  
  return (
    <AdminMainLayout>
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow border p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Donations</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Donor</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{transaction.donor}</td>
                  <td className="py-3 px-4 font-semibold">{transaction.amount}</td>
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </AdminMainLayout>
  );
};

export default AdminDashboard;