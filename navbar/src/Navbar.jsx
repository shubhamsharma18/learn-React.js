
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar(){
  const [mobileView,setmobileView]=useState(false)
    return(
        <>
      <nav className="w-full bg-purple-900 text-white px-10 py-4 flex items-center justify-between overflow-hidden">

      {/* Logo */}
      <div className="text-2xl font-bold">
        LearnHub
      </div>

      {/* Links */}
      <ul className="flex gap-8 font-semibold max-[720px]:hidden">
        <li className="hover:text-purple-300 cursor-pointer">Home</li>
        <li className="hover:text-purple-300 cursor-pointer">Courses</li>
        <li className="hover:text-purple-300 cursor-pointer">Tech</li>
        <li className="hover:text-purple-300 cursor-pointer">About</li>
        <li className="hover:text-purple-300 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button className="max-[720px]:hidden bg-white text-purple-900 px-6 py-2 rounded-lg font-bold hover:scale-105 transition">
        Login
      </button>
      <button onClick={()=>{
        setmobileView(!mobileView)
      }}>
        <TiThMenuOutline  className="text-3xl min-[720px]:hidden" />
      </button>




{/* Mobile view */}


 <ul className={`pt-8 absolute bottom-0 left-0 flex flex-col  w-[25rem] transition-all duration-500 ${mobileView? 'translate-x-0':'-translate-x-[100%]'} items-center gap-6  h-screen bg-purple-800/70 font-semibold`}>
  <button  onClick={()=>{
    setmobileView(false)
  }} className="bg-red-600 px-3 py-1">❌</button>
        <a className="hover:bg-purple-300  cursor-pointer w-full text-center py-3">Home</a>
     <a className="hover:bg-purple-300  cursor-pointer w-full text-center py-3">Courses</a>
     <a className="hover:bg-purple-300  cursor-pointer w-full text-center py-3">Contact us</a>
     <a className="hover:bg-purple-300  cursor-pointer w-full text-center py-3">About us</a>
     {/* <a className="hover:bg-purple-300  cursor-pointer w-full text-center py-3">Home</a> */}
         <button className="hover:bg-purple-300  bg-white text-purple-900 px-6 py-2 rounded-lg font-bold hover:scale-105 transition">
        Login
      </button>
      </ul>

 
    </nav>
        



        </>
    )
}