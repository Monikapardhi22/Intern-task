import React, { useState } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Admin from "./Pages/Admin";
import  clover from './assets/clover.png'
import logo from './assets/logo.png'
import Dashboard from "./Pages/Admin/Dashboard";
import Sale from "./Pages/Admin/Sale"

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
    <div>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

       
        <Route
          path="/login"
          element={
            <div className="lg:flex lg:flex-row  sm:flex sm:flex-col h-screen w-full sm:h-screen overflow-hidden sm:overflow-hidden">
              <div className="lg:ml-6">
                <div className=" lg:border-[1px] lg:border-gray-300 sm:border-0  border-solid lg:m-0  flex flex-col  h-full sm:flex sm:mr-64  rounded-2xl m-8 lg:p-6 bg-white border border-gray-300 shadow-md md:shadow-none sm:shadow-none  md:border-0 md:border-gray-300  ">
                <div>
                  <img src={logo} className="  sm:w-[100px] sm:h-[100px] lg:w-[200px] sm:ml-52 lg:h-[180px] lg:m-0 "/>

                </div>
                <div className="font-medium lg:text-4xl lg:text-gray-800 mb-6 sm:hidden md:hidden lg:block lg:mb-8 md:mr-5 lg:mt-8 lg:font-bold">Hi, Welcome Back</div>
                <div>
                  <img src={clover} className="mb-5 sm:hidden md:hidden lg:block  lg:mb-7"/>
                </div>
              </div>
              </div>
              
            <div className="  flex flex-col items-center justify-center bg-white lg:ml-72">
              <div>
                  <h2 className="lg:text-3xl sm:text-2xl  text-black text-center font-semibold mb-6 drop-shadow-lg">
                  <a href="#" >Sign in to Clover Carte</a>
                </h2>
                <h2 className="text-lg text-gray-400  mb-6 sm:text-lg  sm:mt-0">
                 Enter your details below.
                </h2>

                </div> 
              <div
                className="flex flex-col  justify-center items-center  
                  rounded-xl  p-6 sm:p-8 w-[90%] max-w-md
                  "
              >
                
                {/* Email */}
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" rounded-md   py-3.5 p-3 focus:border-blue-500  border border-gray-300 text-black placeholder-gray-400 placeholder:text-lg w-full mb-9   lg:w-[380px] hover:border-blue-500 outline-none "
                />
{error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" rounded-md  py-3.5 p-3 border border-gray-300 text-black placeholder-gray-400 placeholder:text-lg  w-full lg:w-[380px] hover:border-blue-500 focus:border-blue-500  outline-none"
                />

                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button
                  type="button"
                  onClick={handleLogin}
                  className="sm:w-[380px] lg:w-[380px] md:w-[260px] shadow-lg px-2.5 py-2.5 p-6 bg-blue-300 mt-5 rounded-md text-[17px]   text-shadow-lg font-semibold text-white hover:bg-blue-700 hover:text-white transition "
                >
                  Login
                </button>

                <p className="flex flex-row m-4 text-black text-lg font-medium">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-400 pl-2 text-lg font-medium hover:text-blue-800"
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
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/sale" element={<Sale/>}/>
      </Routes>
    </div>
  );
}
