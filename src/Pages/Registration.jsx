import React, { useState } from 'react';
import Video from "../assets/Black White Bold Simple Initials Name Logo.mp4"
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    let valid = true;
    setError("");
    setPasswordError("");
    setConfirmError("");

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!confirm) {
      setConfirmError("Confirm Password is required");
      valid = false;
    } else if (password !== confirm) {
      setConfirmError("Passwords do not match");
      valid = false;
    }

    if (!valid) return;

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    navigate("/home");
  };

  return (
    <div 
      className="h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center  flex-col "
    >
       <video
                             src={Video}
                            //  controls
                             autoPlay
                             loop
                             muted
                             playsInline
                             className="w-[100px]  sm:w-[200px] sm:h-[200px] rounded-[50%]  lg:w-[200px] lg:h-[200px]  lg:rounded-[50%] lg:ml-2   shadow-lg"
                           />
      <div className="text-2xl text-black text-center font-semibold mt-2.5 drop-shadow-lg">
          Registration
        </div>
      <form
        onSubmit={handleRegister}
        className="flex flex-col   justify-center items-center  
            p-6 sm:p-8 w-[90%] max-w-md
          shadow-black/30 bg-white rounded-lg mt-1.5" 
      >
        

        
        <div className="flex flex-col w-full">
          {/* <label className="text-lg font-sans mb- text-white">Name</label> */}
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-md focus:border-blue-500   py-3.5 p-3  capitalize mb-4 border-gray-700 border text-black placeholder-gray-400 placeholder:text-lg w-full hover:border-blue-500 outline-none  "
            placeholder="Enter your name"
          />
        </div>

       
        <div className="flex flex-col w-full mt-1 mb-1.5  ">
          {/* <label className="text-lg font-sans mb-1 text-white">Email</label> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="rounded-md  focus:border-blue-500   py-3.5 p-3  border-gray-700 border text-black placeholder-gray-400 placeholder:text-lg w-full mb-3 hover:border-blue-500 outline-none "
            placeholder="Enter your email"
          />
        </div>


        <div className="flex flex-col w-full mt-1  mb-2">
          {/* <label className="text-lg font-sans mb- text-white">Password</label> */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md focus:border-blue-500   py-3.5 p-3  border-gray-700 border text-black placeholder-gray-400 placeholder:text-lg w-full mb-1 hover:border-blue-500 outline-none "
            placeholder="Enter password"
          />
          {passwordError && <p className="text-red-300 text-sm">{passwordError}</p>}
        </div>

  
        <div className="flex flex-col w-full mt-1 mb-2">
          {/* <label className="text-lg font-sans mb-2 text-white">Confirm Password</label> */}
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            className="rounded-md focus:border-blue-500   py-3.5 p-3  border-gray-700 border text-black placeholder-gray-400 placeholder:text-lg w-full hover:border-blue-500 outline-none  "
            placeholder="Re-enter password"
          />
          {confirmError && <p className="text-red-300 text-sm">{confirmError}</p>}
        </div>

      
        {error && <p className="text-red-300 text-sm mb-3">{error}</p>}

     
        <button
          className="sm:w-[380px] w-[250px]  md:w-[360px] shadow-lg px-2.5 py-2.5 p-6 bg-blue-400 mt-5 rounded-md text-[17px]   text-shadow-lg font-semibold text-gray-100 hover:bg-blue-700 hover:border-blue-500 outline-none  hover:text-white transition"
        >
          Register
        </button>

       
        <div className="flex flex-row m-4 text-gray-800 text-lg font-medium">
          <span>Already have an account?</span>
          <Link to="/login" className="text-blue-400 pl-2 text-lg font-medium hover:text-blue-800">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
