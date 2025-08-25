import React from 'react'
import img from '../assets/moon.jpg'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not same");
      return;
    }
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    navigate("/home");
  };
    return (
        <div className=' h-screen w-full  bg-cover bg-center   ' style={{ backgroundImage: `url(${img})` }}>
            <div className=' '>
                <div className='text-7xl text-white font-medium text-center md:text-center lg:mr-[80px] sm:text-center sm:p-10 p-10 sm:mr-1.5 '>
                    Registration
                </div>
                <form
                onSubmit={handleRegister}
                    method="post"
                    className="
    flex flex-col border-2 border-white justify-center items-center  
    rounded-xl bg-blue-50  p-10 md:w-[90%] lg:w-[90%] sm:w-[90%] sm:p-6 max-w-md mx-auto
    sm:relative sm:mt-[0px] lg:mr-[500px] lg:ml-[500px] 
    fixed inset-0 sm:inset-auto shadow-lg shadow-blue-500 
  "
                >
                    <div className="flex flex-col w-full">
                        <label className="text-xl font-sans mb-[10px] capitalize ">Name</label>
                        <input  onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="border-[1px] border-black rounded-md px-2 py-1 capitalize"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-xl font-sans mb-[10px]">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="border-[1px] border-black rounded-md px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col w-full ">
                        <label className="text-xl font-sans mb-[10px]">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="border-[1px] border-black rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label className="text-xl font-sans mb-[10px]"> Confirm Password</label>
                        <input onChange={(e) => setConfirm(e.target.value)}
                            type="password"
                            className="border-[1px] border-black rounded-md px-2 py-1"
                        />
                    </div>
                      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <button className='sm:w-[180px] md:w-[180px] p-[7px] bg-blue-500 mt-3 rounded-md text-xl hover:bg-white hover:text-blue-500'>
                        Register
                    </button>
                    <div className='flex flex-row m-3'>
                        <div>
                            Already have an account?
                        </div>
                        <Link to='/login' className='text-blue-500 pr-2.5 hover:text-blue-700'>Login</Link>
                    </div>
                </form>





            </div>
        </div>
    )
}
