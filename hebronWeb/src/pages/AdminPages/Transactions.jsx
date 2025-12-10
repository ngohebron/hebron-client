import React, { useEffect, useState } from "react";
import { getDonations } from "../../utils/donationApis";
import { Search, Filter, X } from "lucide-react";
import AdminMainLayout from "../../layout/AdminMainLayout";
import { FiDownload, FiFilter, FiEye, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function AdminTransaction() {
  const [donations, setDonations] = useState([]);
  const [filtered, setFiltered] = useState([]);
 const [totalPages, setTotalPages] = useState(1);

  // Search + Filters
  const [search, setSearch] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
     const [selectedTransaction, setSelectedTransaction] = useState(null);
   const [detailModalOpen, setDetailModalOpen] = useState(false);
  

      const handleViewDetails = (transaction) => {
     setSelectedTransaction(transaction);
     setDetailModalOpen(true);
   };

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 50;


  useEffect(() => {
    fetchDonations();
  }, [page]);

 const fetchDonations = async () => {
  try {
    const res = await getDonations(page);

    console.log(res.data.data);

    setDonations(res.data.data.data);   // paginated donations
    setFiltered(res.data.data.data);
    setTotalPages(res.data.data.totalPages); // <- IMPORTANT
  } catch (err) {
    console.log(err);
  }
};


 
  useEffect(() => {
    let results = [...donations];

    // Search
    if (search) {
      results = results.filter((d) =>
        d.donor?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Currency
    if (currencyFilter) {
      results = results.filter((d) => d.currency === currencyFilter);
    }

    // Amount Range
    if (minAmount) {
      results = results.filter((d) => Number(d.amount) >= Number(minAmount));
    }
    if (maxAmount) {
      results = results.filter((d) => Number(d.amount) <= Number(maxAmount));
    }

    // Date Range
    if (fromDate) {
      results = results.filter(
        (d) => new Date(d.created_at) >= new Date(fromDate)
      );
    }
    if (toDate) {
      results = results.filter(
        (d) => new Date(d.created_at) <= new Date(toDate)
      );
    }

    setFiltered(results);
    setPage(1);
  }, [search, currencyFilter, minAmount, maxAmount, fromDate, toDate]);

  

  

  const exportToCSV = () => {
  if (filtered.length === 0) {
    alert("No data to export");
    return;
  }

  const header = [
    "Donation ID",
    "Donor Name",
    "Email",
    "Phone",
    "Amount",
    "Currency",
    "Message",
    "Date",
  ];

  const rows = filtered.map((d) => [
    d.donation_id,
    d.donor.name,
    d.donor.email,
    d.donor.phone,
    d.amount,
    d.currency,
    `"${d.message}"`, // Keep quotes for commas
    new Date(d.created_at).toLocaleString("en-IN"),
  ]);

  // Convert to CSV format
  const csvContent =
    "data:text/csv;charset=utf-8," +
    header.join(",") +
    "\n" +
    rows.map((row) => row.join(",")).join("\n");

  // Download CSV
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "donations.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <AdminMainLayout>
             <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Donation Transactions</h1>
        </div>     
         {/* Desktop Export Button */}
         <button 
           onClick={exportToCSV}
           className="flex w-fit justify-center md:flex items-center space-x-2 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-900"
         >
           <FiDownload size={18} />
           <span>Export CSV</span>
         </button>
       </div>


       {/* Stats Section */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">

  {/* Total Amount */}
  <div className="bg-white p-4 rounded-xl shadow border">
    <p className="text-gray-500 text-sm">Total Amount</p>
    <p className="text-xl md:text-2xl font-bold text-gray-800 mt-1">
      ₹ {filtered.reduce((sum, d) => sum + Number(d.amount || 0), 0).toLocaleString()}
    </p>
  </div>

  {/* Total Donations */}
  <div className="bg-white p-4 rounded-xl shadow border">
    <p className="text-gray-500 text-sm">Total Donations</p>
    <p className="text-xl md:text-2xl font-bold text-gray-800 mt-1">
      {filtered.length}
    </p>
  </div>

  {/* Success Rate */}
  <div className="bg-white p-4 rounded-xl shadow border">
    <p className="text-gray-500 text-sm">Success Rate</p>
    <p className="text-xl md:text-2xl font-bold text-green-600 mt-1">
      100%
    </p>
  </div>

</div>


      {/* ---------- Filters Section ---------- */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Search */}
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <Search className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search donor name..."
              className="bg-transparent outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Currency */}
          <select
            className="bg-gray-100 p-2 rounded-lg outline-none"
            value={currencyFilter}
            onChange={(e) => setCurrencyFilter(e.target.value)}
          >
            <option value="">All Currency</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>

          {/* Min Amount */}
          <input
            type="number"
            placeholder="Min Amount"
            className="bg-gray-100 p-2 rounded-lg outline-none"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
          />

          {/* Max Amount */}
          <input
            type="number"
            placeholder="Max Amount"
            className="bg-gray-100 p-2 rounded-lg outline-none"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
          />
        </div>

        {/* DATE FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="date"
            className="bg-gray-100 p-2 rounded-lg outline-none"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="bg-gray-100 p-2 rounded-lg outline-none"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      {/*table*/}
     <div className="overflow-auto  border-gray-100 rounded-lg scrollbar-thin bg-gray-100">
  <table className="w-full min-w-max border-collapse">
    <thead className="bg-gray-100 border-b border-gray-200">
      <tr>
         <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Donor ID
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Donor
        </th>
         <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Donor Number
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Amount
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Currency
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Message
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Date
        </th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-400">
      {donations.map((item) => (
        <tr key={item.donation_id} className="hover:bg-gray-50 transition duration-150">
          
          <td className="p-3 font-semibold text-gray-800">{item.donation_id}</td>

          <td className="p-3">
            <div className="font-medium text-gray-800">{item.donor.name}</div>
            <div className="text-sm text-gray-500">{item.donor.email}</div>
          </td>
          <td className="p-3 font-semibold text-gray-800">{item.donor.phone}</td>
          <td className="p-3 font-semibold text-gray-800">₹{item.amount}</td>
          <td className="p-3 text-gray-600">{item.currency}</td>
          <td className="p-3 text-gray-600">{item.message || '-'}</td>
          <td className="p-3 text-gray-600">
            {new Date(item.created_at).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </td>

          <td className="p-3">
            <button
              onClick={() => handleViewDetails(item)}
              className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-md hover:bg-blue-200 transition"
            >
              <FiEye size={16} />
              <span className="hidden sm:inline">View</span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {donations.length === 0 && (
    <p className="text-center py-6 text-gray-500 text-sm">No donations found.</p>
  )}
</div>


      {/* ---------- Pagination ---------- */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="px-4 py-1 bg-white shadow rounded">
          {page} 
        </span>

        <button
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {detailModalOpen && selectedTransaction && (
  <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md animate-fadeIn">
      <div className="p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Donation Details</h3>
          <button
            onClick={() => setDetailModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4">

          {/* ID + Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Donation ID</p>
              <p className="font-medium">
                DON-{selectedTransaction.donation_id.toString().padStart(6, "0")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">
                {new Date(selectedTransaction.created_at).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Donor Info */}
          <div>
            <p className="text-sm text-gray-500">Donor</p>
            <p className="font-medium">{selectedTransaction.donor.name}</p>
            <p className="text-sm text-gray-600">{selectedTransaction.donor.email}</p>
            <p className="text-sm text-gray-600">{selectedTransaction.donor.phone}</p>
          </div>

          {/* Amount + Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="text-xl font-bold">
                ₹ {selectedTransaction.amount}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Currency</p>
              <p className="font-medium">{selectedTransaction.currency}</p>
            </div>
          </div>

          {/* Message */}
          {selectedTransaction.message && (
            <div>
              <p className="text-sm text-gray-500">Message</p>
              <p className="font-medium">{selectedTransaction.message}</p>
            </div>
          )}

        </div>

        {/* Footer */}
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
}
