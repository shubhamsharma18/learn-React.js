import { useState } from "react";
import Login from "./Login";

function AuthPage({ setUser, setAdmin }) {
  const [role, setRole] = useState(null); // admin | user

  return (
    <div className="h-screen w-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md  p-8 rounded-2xl shadow-xl border border-gray-100 transition-all">
        
        {role === null ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-sm">Please select your role to continue</p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setRole("admin")}
                className="group relative w-full flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-3xl mb-2">🔐</span>
                <span className="text-lg font-bold text-gray-700 group-hover:text-blue-700">Admin Portal</span>
                <span className="text-xs text-gray-400">Manage items and requests</span>
              </button>

              <button
                onClick={() => setRole("user")}
                className="group relative w-full flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-3xl mb-2">👋</span>
                <span className="text-lg font-bold text-gray-700 group-hover:text-indigo-700">User Access</span>
                <span className="text-xs text-gray-400">Search for lost items</span>
              </button>
            </div>
            
            <p className="mt-8 text-center text-xs text-gray-400">
              Lost & Found Management System v1.0
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center mb-6">
               <button 
                 onClick={() => setRole(null)}
                 className="text-gray-400 hover:text-gray-600 flex items-center text-sm transition font-medium"
               >
                 <span className="mr-1">←</span> Back to selection
               </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 capitalize">
                {role} Login
              </h3>
            </div>

            <Login setUser={setUser} setAdmin={setAdmin} role={role} />
          </div>
        )}

      </div>
    </div>
  );
}

export default AuthPage;