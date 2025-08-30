import React from 'react'
import rose from '../assets/rose.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
     const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    
  };

  return (
    <div className='text-center sm:w-[100%] h-screen w-full flex items-center justify-center sm:flex sm:flex-col'>
      <div className='sm:flex sm:flex-col sm:justify-center sm:items-center '>

        <div className='flex md:flex-col sm:flex-col lg:flex-col justify-center items-center'>
            <img src={rose} className='w-7'/>
            
        </div>
        <h1 className='text-4xl  text-white font-bold'>
            Welcome, <div className='capitalize'>
              {user?.name}
            </div>
        </h1>
        <button
          onClick={handleLogout}
          className=" bg-blue-400 border-2 cursor-pointer border-blue-400 p-2  w-[180px] text-lg rounded-lg text-center hover:bg-blue-200 hover:border-blue-700 hover:border-2 transition mt-9"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
