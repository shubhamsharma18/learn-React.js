import React, { useState, useEffect } from 'react';

const UserPage = () => {
  // 1. Pehle logged-in user ki details nikal lo
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('lostItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('claimRequests');
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [claimantDetails, setClaimantDetails] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setItems(JSON.parse(localStorage.getItem('lostItems') || '[]'));
      setRequests(JSON.parse(localStorage.getItem('claimRequests') || '[]'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const openClaimModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      requestId: Date.now(),
      itemId: selectedItem.id,
      itemName: selectedItem.name,
      userEmail: currentUser.email, // <--- LOW LEVEL: Identify kis user ne claim kiya
      claimantName: claimantDetails.name,
      claimantPhone: claimantDetails.phone,
      message: claimantDetails.message,
      status: 'Pending',
      date: new Date().toLocaleString()
    };

    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    localStorage.setItem('claimRequests', JSON.stringify(updatedRequests));

    alert(`Claim request for ${selectedItem.name} sent!`);
    setIsModalOpen(false);
    setClaimantDetails({ name: '', phone: '', message: '' });
  };

  // --- UPDATED: Filter Status by current logged-in user ---
  const getItemStatus = (itemId) => {
    // Sirf woh request dhundo jo IS item ki ho AND IS user ki ho
    const request = requests.find(r => 
      r.itemId === itemId && r.userEmail === currentUser.email
    );
    return request ? request.status : null;
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload(); // App.jsx wapas AuthPage dikhayega
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with User Info */}
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
           <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Logged in as</p>
              <p className="text-blue-600 font-bold">{currentUser.email}</p>
           </div>
           <button onClick={handleLogout} className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition">
             Logout
           </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Lost & Found Gallery</h1>
          <p className="text-gray-600 italic">Check if your lost item has been found.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => {
            const status = getItemStatus(item.id); 

            return (
              <div key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col transition hover:shadow-xl group">
                <div className="relative overflow-hidden">
                   <img src={item.imageSrc} alt={item.name} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
                   {status && (
                     <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-[10px] font-black uppercase tracking-tighter">
                        {status}
                     </div>
                   )}
                </div>
                
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                  <div className="flex items-center text-blue-500 font-bold text-[10px] mb-3 uppercase tracking-widest">
                    📍 {item.location}
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="p-5 pt-0">
                  {!status ? (
                    <button 
                      onClick={() => openClaimModal(item)}
                      className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                    >
                      Claim This Item
                    </button>
                  ) : (
                    <div className={`w-full py-3 rounded-2xl font-bold text-center border-2 ${
                      status === 'Accepted' ? 'bg-green-50 text-green-700 border-green-100' : 
                      status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-100' : 
                      'bg-yellow-50 text-yellow-700 border-yellow-100'
                    }`}>
                      {status === 'Accepted' ? '✅ Claim Approved' : 
                       status === 'Rejected' ? '❌ Request Denied' : 
                       '⏳ Status: Pending'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Claim Item</h2>
              <p className="text-sm text-gray-500 mb-6">Verify your ownership for <strong>{selectedItem?.name}</strong></p>
              
              <form onSubmit={handleClaimSubmit} className="space-y-4">
                <input 
                  type="text" placeholder="Full Name" required 
                  className="w-full border-gray-200 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                  value={claimantDetails.name}
                  onChange={(e) => setClaimantDetails({...claimantDetails, name: e.target.value})}
                />
                <input 
                  type="tel" placeholder="Active Phone Number" required 
                  className="w-full border-gray-200 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                  value={claimantDetails.phone}
                  onChange={(e) => setClaimantDetails({...claimantDetails, phone: e.target.value})}
                />
                <textarea 
                  placeholder="Describe some unique marks or details of the item..." required
                  className="w-full border-gray-200 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 h-24"
                  value={claimantDetails.message}
                  onChange={(e) => setClaimantDetails({...claimantDetails, message: e.target.value})}
                ></textarea>
                
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition">Cancel</button>
                  <button type="submit" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700">Submit Claim</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;