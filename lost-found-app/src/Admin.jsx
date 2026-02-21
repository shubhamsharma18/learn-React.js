import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('lostItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [requests, setRequests] = useState(() => {
    const savedRequests = localStorage.getItem('claimRequests');
    return savedRequests ? JSON.parse(savedRequests) : [];
  });

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', description: '', image: '' });

  useEffect(() => {
    localStorage.setItem('lostItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const syncRequests = () => {
      setRequests(JSON.parse(localStorage.getItem('claimRequests') || '[]'));
    };
    window.addEventListener('storage', syncRequests);
    return () => window.removeEventListener('storage', syncRequests);
  }, []);

  const updateRequestStatus = (reqId, newStatus) => {
    const updatedRequests = requests.map(req => 
      req.requestId === reqId ? { ...req, status: newStatus } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem('claimRequests', JSON.stringify(updatedRequests));
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    localStorage.setItem('lostItems', JSON.stringify(filteredItems));
  };

  const deleteRequest = (reqId) => {
    const updated = requests.filter(r => r.requestId !== reqId);
    setRequests(updated);
    localStorage.setItem('claimRequests', JSON.stringify(updated));
  };

  const openDetails = (req) => {
    setSelectedRequest(req);
    setIsViewModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formData.name,
      location: formData.location,
      description: formData.description,
      imageSrc: formData.image || "https://via.placeholder.com/150"
    };
    setItems([newItem, ...items]);
    setFormData({ name: '', location: '', description: '', image: '' });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center uppercase tracking-tight">Admin Dashboard</h1>

        {/* --- ADD ITEM FORM --- */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12 border border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-gray-700 font-mono">➕ POST NEW FOUND ITEM</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} className="p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400" required />
            <input name="location" placeholder="Found Location" value={formData.location} onChange={handleChange} className="p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="description" placeholder="Short description..." value={formData.description} onChange={handleChange} className="p-3 bg-gray-50 border rounded-xl md:col-span-2 h-24 outline-none focus:ring-2 focus:ring-blue-400" required />
            <div className="md:col-span-2">
              <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
            </div>
            <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">Post to Gallery</button>
          </form>
        </div>

        {/* --- CLAIM REQUESTS TABLE --- */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📥 User Claim Requests</h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-bold text-gray-600 text-sm">ITEM / CLAIMANT</th>
                  <th className="p-4 font-bold text-gray-600 text-sm">USER EMAIL</th> {/* Naya Column */}
                  <th className="p-4 font-bold text-gray-600 text-sm text-center">STATUS</th>
                  <th className="p-4 font-bold text-gray-600 text-sm text-right">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr><td colSpan="4" className="p-10 text-center text-gray-400 italic">No requests found.</td></tr>
                ) : (
                  requests.map((req) => (
                    <tr key={req.requestId} className="border-b hover:bg-gray-50/50">
                      <td className="p-4">
                        <div className="font-bold text-blue-700">{req.itemName}</div>
                        <div className="text-xs text-gray-500 font-medium">Claimant: {req.claimantName}</div>
                      </td>
                      <td className="p-4">
                         {/* User ki email yahan dikhegi */}
                        <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {req.userEmail || "Guest"} 
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          req.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
                          req.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {req.status || 'Pending'}
                        </span>
                      </td>
                      <td className="p-4 text-right flex justify-end gap-2 mt-1">
                        <button onClick={() => openDetails(req)} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-200">Details</button>
                        <button onClick={() => updateRequestStatus(req.requestId, 'Accepted')} className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-green-700">Accept</button>
                        <button onClick={() => updateRequestStatus(req.requestId, 'Rejected')} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600">Reject</button>
                        <button onClick={() => deleteRequest(req.requestId)} className="text-gray-300 hover:text-red-500 px-2 text-xl font-bold">&times;</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- VIEW DETAILS MODAL --- */}
        {isViewModalOpen && selectedRequest && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-200 border-t-4 border-blue-600">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Verification Info</h2>
              <div className="space-y-4 text-sm">
                <p><strong>Account Email:</strong> <span className="text-blue-600">{selectedRequest.userEmail}</span></p>
                <p><strong>Claimant Name:</strong> {selectedRequest.claimantName}</p>
                <p><strong>Mobile:</strong> {selectedRequest.claimantPhone}</p>
                <p><strong>Date:</strong> {selectedRequest.date}</p>
                <div className="bg-blue-50 p-4 rounded-xl italic text-gray-700 border border-blue-100">
                  "{selectedRequest.message || "No verification message provided."}"
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button onClick={() => { updateRequestStatus(selectedRequest.requestId, 'Accepted'); setIsViewModalOpen(false); }} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg">Approve Now</button>
                <button onClick={() => setIsViewModalOpen(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold">Close</button>
              </div>
            </div>
          </div>
        )}

        {/* --- ACTIVE LISTINGS --- */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🗂️ Active Found Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border flex flex-col group hover:border-blue-300 transition-all">
              <div className="relative">
                <img src={item.imageSrc} alt={item.name} className="w-full h-48 object-cover" />
                <button onClick={() => deleteItem(item.id)} className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg font-bold text-xs hover:bg-red-700">Delete</button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-blue-500 text-xs font-bold mb-2 uppercase tracking-wide">📍 {item.location}</p>
                <p className="text-gray-500 text-xs line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;