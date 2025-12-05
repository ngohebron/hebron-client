// components/Transactions.jsx
import React, { useState } from 'react';
import { FiDownload, FiFilter, FiEye, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AdminMainLayout from '../layout/AdminMainLayout';

const Transactions = () => {
  const [transactions] = useState([
    { id: 1, donor: 'John Doe', amount: '₹ 500', date: '2024-01-15', method: 'Credit Card', status: 'Completed', email: 'john@example.com' },
    { id: 2, donor: 'Jane Smith', amount: '₹ 1000', date: '2024-01-14', method: 'UPI', status: 'Completed', email: 'jane@example.com' },
    { id: 3, donor: 'Robert Johnson', amount: '₹ 2000', date: '2024-01-13', method: 'Bank Transfer', status: 'Pending', email: 'robert@example.com' },
    { id: 4, donor: 'Sarah Williams', amount: '₹ 1500', date: '2024-01-12', method: 'Credit Card', status: 'Completed', email: 'sarah@example.com' },
    { id: 5, donor: 'Mike Brown', amount: '₹ 3000', date: '2024-01-11', method: 'PayPal', status: 'Failed', email: 'mike@example.com' },
    { id: 6, donor: 'Emily Davis', amount: '₹ 750', date: '2024-01-10', method: 'UPI', status: 'Completed', email: 'emily@example.com' },
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  
  const itemsPerPage = 4;

  // Filter transactions
  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         t.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         t.id.toString().includes(searchTerm);
    const matchesStatus = filter === 'all' || t.status.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const totalAmount = transactions
    .filter(t => t.status === 'Completed')
    .reduce((sum, t) => sum + parseInt(t.amount.replace('₹ ', '').replace(/,/g, '')), 0);

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setDetailModalOpen(true);
  };

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Donor,Amount,Date,Method,Status,Email\n"
      + transactions.map(t => 
          `${t.id},${t.donor},${t.amount},${t.date},${t.method},${t.status},${t.email}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminMainLayout>
      {/* Header with Mobile Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Donation Transactions</h1>
        </div>
        
        {/* Desktop Export Button */}
        <button 
          onClick={exportToCSV}
          className="flex justify-center md:flex items-center space-x-2 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-900"
        >
          <FiDownload size={18} />
          <span>Export CSV</span>
        </button>
      </div>

    

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  my-5">
        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Total Amount</p>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mt-1">₹ {totalAmount.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Total Transactions</p>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mt-1">{transactions.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Success Rate</p>
          <p className="text-xl md:text-2xl font-bold text-green-600 mt-1">
            {Math.round((transactions.filter(t => t.status === 'Completed').length / transactions.length) * 100)}%
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow border p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by donor, email, or ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 font-medium">Donor</th>
                <th className="text-left py-3 px-4 font-medium">Amount</th>
                <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Date</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No transactions found. Try adjusting your search or filters.
                  </td>
                </tr>
              ) : (
                paginatedTransactions.map(transaction => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{transaction.donor}</p>
                        <p className="text-sm text-gray-500">{transaction.email}</p>
                        <p className="text-xs text-gray-400 md:hidden">{transaction.date}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-bold">{transaction.amount}</td>
                    <td className="py-3 px-4 hidden md:table-cell">{transaction.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleViewDetails(transaction)}
                        className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                      >
                        <FiEye size={14} />
                        <span className="hidden sm:inline">View</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft />
              <span className="hidden sm:inline">Previous</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Next</span>
              <FiChevronRight />
            </button>
          </div>
        )}

        {/* Mobile Summary */}
        <div className="mt-6 p-4 bg-green-50 rounded-lg md:hidden">
          <div className="text-center">
            <p className="text-green-800 font-medium">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} transactions
            </p>
            <p className="text-sm text-green-600">Tap on a transaction to view details</p>
          </div>
        </div>

        {/* Desktop Summary */}
        <div className="hidden md:block mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Showing {paginatedTransactions.length} of {filteredTransactions.length} transactions</p>
              <p className="text-lg text-blue-600">Page {currentPage} of {totalPages}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Total Filtered Amount</p>
              <p className="text-2xl font-bold text-green-600">
                ₹ {filteredTransactions
                  .filter(t => t.status === 'Completed')
                  .reduce((sum, t) => sum + parseInt(t.amount.replace('₹ ', '').replace(/,/g, '')), 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {detailModalOpen && selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Transaction Details</h3>
                <button
                  onClick={() => setDetailModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Transaction ID</p>
                    <p className="font-medium">TRX-{selectedTransaction.id.toString().padStart(6, '0')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      selectedTransaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      selectedTransaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedTransaction.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Donor</p>
                  <p className="font-medium">{selectedTransaction.donor}</p>
                  <p className="text-sm text-gray-600">{selectedTransaction.email}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="text-xl font-bold">{selectedTransaction.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{selectedTransaction.date}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">{selectedTransaction.method}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                <button
                  onClick={() => setDetailModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Generate Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminMainLayout>
  );
};

export default Transactions;