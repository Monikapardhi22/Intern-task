import React, { useState } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";

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
      navigate("/home");
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
            <div className="h-screen w-full bg-gradient-to-r flex flex-col items-center justify-center">
              <div>
                  <h2 className="text-2xl text-black text-center font-semibold mb-6 drop-shadow-lg">
                  <a href="#" >Sign in </a>
                </h2>
                <h2 className="text-lg text-gray-400  mb-6 ">
                 Enter your details below
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
                  className=" rounded-md   py-3.5 p-3  border border-gray-300 text-black placeholder-gray-400 placeholder:text-lg w-full mb-9 "
                />
{error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" rounded-md  py-3.5 p-3 border border-gray-300 text-black placeholder-gray-400 placeholder:text-lg  w-full"
                />

                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button
                  type="button"
                  onClick={handleLogin}
                  className="sm:w-[380px] md:w-[360px] shadow-lg px-2.5 py-2.5 p-6 bg-blue-300 mt-5 rounded-md text-[17px]   text-shadow-lg font-semibold text-white hover:bg-blue-700 hover:text-white transition"
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
          }
        />

       
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}
