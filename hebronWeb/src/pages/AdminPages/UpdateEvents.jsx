// components/UpdateEvents.jsx
import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiDownload } from 'react-icons/fi';
import AdminMainLayout from '../../layout/AdminMainLayout';
import { useNavigate } from 'react-router-dom';

const UpdateEvents = () => {

  const [events, setEvents] = useState([
    { id: 1, name: 'Food Drive 2024', date: '2024-02-01', volunteers: 45, status: 'Upcoming' },
    { id: 2, name: 'Winter Meal Distribution', date: '2023-12-25', volunteers: 60, status: 'Completed' },
    { id: 3, name: 'Children Nutrition Camp', date: '2024-01-20', volunteers: 30, status: 'Ongoing' },
    { id: 4, name: 'Summer Food Festival', date: '2024-06-15', volunteers: 80, status: 'Upcoming' },
  ]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const navigate = useNavigate()

  // Filter events based on search and status
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.date.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || event.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedEvent) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setEditModalOpen(false);
    setSelectedEvent(null);
  };

  const handleAddEvent = () => {
    navigate("/createEvent")
  };

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Event Name,Date,Volunteers,Status\n"
      + events.map(event => 
          `${event.name},${event.date},${event.volunteers},${event.status}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "events.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminMainLayout>
      {/* Header with Mobile Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Events</h1>
        </div>
        
        {/* Desktop Actions */}
        <div className="flex  justify-center md:flex space-x-4">
          <button 
            onClick={exportToCSV}
            className="flex items-center space-x-2 px-4 py-2 border text-white bg-emerald-700 rounded-lg hover:bg-emerald-900"
          >
            <FiDownload size={18} />
            <span>Export CSV</span>
          </button>
          <button 
            onClick={handleAddEvent}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-900"
          >
            <FiPlus size={18} />
            <span>Add New Event</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow border p-4 md:p-6 my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or date..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Events Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 font-medium">Event Name</th>
                <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Date</th>
                <th className="text-left py-3 px-4 font-medium">Volunteers</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No events found. Try adjusting your search or filters.
                  </td>
                </tr>
              ) : (
                filteredEvents.map(event => (
                  <tr key={event.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-gray-500 md:hidden">{event.date}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">{event.date}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {event.volunteers}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                        event.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(event)}
                          className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                        >
                          <FiEdit2 size={14} />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                        >
                          <FiTrash2 size={14} />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Stats */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg md:hidden">
          <div className="text-center">
            <p className="text-blue-800 font-medium">Showing {filteredEvents.length} events</p>
            <p className="text-sm text-blue-600">Tap an event to view details</p>
          </div>
        </div>

        {/* Summary Stats (Desktop) */}
        <div className="hidden md:block mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Total Events</p>
              <p className="text-2xl font-bold">{events.length}</p>
            </div>
            <div>
              <p className="text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-blue-600">
                {events.filter(e => e.status === 'Upcoming').length}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Ongoing</p>
              <p className="text-2xl font-bold text-green-600">
                {events.filter(e => e.status === 'Ongoing').length}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-600">
                {events.filter(e => e.status === 'Completed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Edit Event</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedEvent.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    defaultValue={selectedEvent.date}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveEdit(selectedEvent)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminMainLayout>
  );
};

export default UpdateEvents;