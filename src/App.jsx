import React, { useState } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Admin from "./Pages/Admin";
import clover from './assets/down.png'
// import logo from './assets/logo.png'
import Video from "./assets/Black White Bold Simple Initials Name Logo.mp4"
import Dashboard from "./Pages/Admin/Dashboard";
import Sale from "./Pages/Admin/Sale"
import Server from "./Pages/Admin/Server"
import Machine from "./Pages/Admin/Machine";
import Log from "./Pages/Admin/Log"
import user from "./assets/user.webp"
import MachineInventory from "./Pages/Admin/Machine Inventory";
import Category from "./Pages/Admin/Category";

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    if (!password) {
      setPasswordError("Password is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigate("/admin");
    } else {
      setError("Invalid Email or Password!");
    }
  };

  return (
    <div className="bg-black">
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />


        <Route
          path="/login"
          element={
            <div className="lg:flex lg:flex-row  sm:flex sm:flex-col h-screen w-full sm:h-screen lg:overflow-hidden bg-white">
              <div className="lg:ml-6">
                <div className=" lg:flex lg:flex-col lg:border lg:border-gray-300 
                lg:rounded-2xl lg:m-0 lg:p-6 lg:bg-white lg:shadow-lg  
                h-ful ">
                  <div className="">
                    {/* <img src={logo} className="  sm:w-[100px] sm:h-[100px] lg:w-[200px] sm:ml-52 lg:h-[180px] lg:m-0 "/> */}
                    <video
                      src={Video}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[100px]  sm:w-[200px] sm:h-[200px] rounded-[50%]  lg:w-[200px] lg:h-[200px] sm:ml-72 lg:rounded-[50%] lg:ml-24   shadow-lg"
                    />
                  </div>
                  <div className="font-medium lg:text-4xl lg:text-black mb-6 sm:hidden md:hidden lg:block lg:mb-8 md:mr-5 lg:ml-12 lg:mt-8 lg:font-bold">Hi, Welcome Back</div>
                  <div>
                    <img src={clover} className="hidden   w-[400px] rounded-3xl h-[300px] mb-5 sm:hidden  md:hidden lg:block  lg:mb-7" />
                  </div>
                </div>
              </div>

              <div className=" mt-3.5 flex flex-col sm:text-center sm:mt-24 items-center justify-center bg-white lg:ml-72 lg:mt-0">
                <div>
                  <h2 className="lg:text-3xl sm:text-2xl  text-black text-center  font-semibold mb-6 drop-shadow-lg ">
                    <a href="#" >Sign in to Clover Carte</a>
                  </h2>
                  <h2 className="text-lg flex text-gray-400  mb-6 sm:text-lg sm:ml-2  sm:mt-0">
                    Enter your details below.    <img src={user} className="h-[20px] w-[20px]  mt-1 cursor-pointer" />
                  </h2>


                </div>
                <div
                  className="flex flex-col  justify-center items-center  
                  rounded-xl  p-6 sm:p-8 w-[90%] 
                  "
                >

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" rounded-4xl   py-3.5 p-3 focus:border-blue-500  border-gray-500 border-b text-black placeholder-gray-400 placeholder:text-lg w-full mb-9   lg:w-[380px] hover:border-blue-500 outline-none focus:text-black"
                  />
                  {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                  {/* Password */}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" rounded-4xl  py-3.5 p-3 border-gray-500 border-b text-black placeholder-gray-400 placeholder:text-lg  w-full lg:w-[380px] focus:text-black hover:border-blue-500 focus:border-blue-500  outline-none"
                  />

                  {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                  )}
                  {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                  <button
                    type="button"
                    onClick={handleLogin}
                    className="sm:w-[380px] lg:w-[380px] md:w-[260px] shadow-lg px-2.5 py-2.5 p-6 bg-blue-400 mt-5 rounded-4xl text-[17px]   text-shadow-lg font-semibold text-white hover:bg-blue-700 hover:text-white transition "
                  >
                    Login
                  </button>

                  <p className=" m-4 text-gray-700 text-lg font-medium max-w-[380px] sm:flex sm:flex-row lg:flex lg:flex-row  flex flex-row">
                    Don’t have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-400 pl-2 text-lg font-medium hover:text-blue-800  "
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          }
        />


        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/server" element={<Server />} />
        <Route path="/machine" element={<Machine />} />
        <Route path="/log" element={<Log />} />
        <Route path="/cat" element={<Category />} />
        <Route path="/mach" element={<MachineInventory />} />
      </Routes>
    </div>
  );
}
