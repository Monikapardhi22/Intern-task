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
    <div className='text-center sm:w-[100%]'>
      <div>

        <div className='flex md:flex-col sm:flex-col lg:flex-col justify-center items-center'>
            <img src={rose} className='w-lg'/>
            <h1 className='text-5xl  text-black font-bold'>
            Welcome, {user?.name}
        </h1>
        </div>
        <button
          onClick={handleLogout}
          className=" bg-purple-300 px-6 py-3 text-lg rounded-lg text-center hover:bg-red-400 transition mt-9"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
