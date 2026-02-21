import { useState } from "react";

function Login({ setUser, setAdmin, role }) { // role prop add kiya: 'admin' ya 'user'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();

    // LocalStorage se registered users ki list nikalna
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    // --- CASE 1: ADMIN LOGIN ---
    if (role === "admin") {
      if (email === "admin@gmail.com" && password === "1234") {
        localStorage.setItem("currentUser", JSON.stringify({ email, role: 'admin' }));
        setAdmin(true);
      } else {
        alert("Ghalat Admin Details! Aap register nahi kar sakte.");
      }
      return; // Admin logic yahi khatam
    }

    // --- CASE 2: USER AUTHENTICATION ---
    if (isRegistering) {
      // REGISTER LOGIC
      const userExists = users.find((u) => u.email === email);
      if (userExists) {
        alert("User pehle se hai! Login karo.");
      } else {
        const newUser = { email, password };
        localStorage.setItem("registeredUsers", JSON.stringify([...users, newUser]));
        alert("Registration Successful! Ab login karein.");
        setIsRegistering(false);
      }
    } else {
      // LOGIN LOGIC
      const validUser = users.find((u) => u.email === email && u.password === password);
      
      if (validUser || ((email === "user@gmail.com" || email === "user2@gmail.com") && password === "1234")) {
        localStorage.setItem("currentUser", JSON.stringify({ email, role: 'user' }));
        setUser(true);
      } else {
        alert("Invalid Details! Agar naye ho toh Register karo.");
      }
    }
  };

  return (
    <div className="h-[60vh] flex items-center justify-center ">
      <div className="p-8 border-[1px] border-black rounded-2xl shadow-lg w-80 bg-white">
        
        {/* Dynamic Title based on Role and Mode */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 uppercase tracking-tight">
          {role === 'admin' ? "Admin Portal" : (isRegistering ? "User Register" : "User Login")}
        </h2>

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className={`py-2 rounded-lg text-white font-bold transition duration-300 ${
              role === 'admin' ? "bg-indigo-600 hover:bg-indigo-700" : 
              (isRegistering ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600")
            }`}
          >
            {role === 'admin' ? "Login as Admin" : (isRegistering ? "Create Account" : "Login")}
          </button>
        </form>

        {/* --- CATCH SOLVED: Register button sirf User role mein dikhega --- */}
        {role === 'user' && (
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="mt-4 w-full text-sm text-blue-600 hover:underline font-medium"
          >
            {isRegistering ? "Already have an account? Login" : "New User? Register here"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;