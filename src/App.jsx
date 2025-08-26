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
            <div className="h-screen w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center">
              <div
                className="flex flex-col border border-white/40 justify-center items-center  
                  rounded-xl bg-white/20 backdrop-blur-md p-6 sm:p-8 w-[90%] max-w-md
                  shadow-lg shadow-black/30"
              >
                <h2 className="text-4xl text-white font-bold text-center mb-6 drop-shadow-lg">
                  Login
                </h2>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600 mb-4 w-full"
                />

                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600 w-full"
                />

                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button
                  type="button"
                  onClick={handleLogin}
                  className="sm:w-[180px] md:w-[180px] p-2 bg-blue-500 mt-5 rounded-md text-lg font-semibold text-white hover:bg-white hover:text-blue-500 transition"
                >
                  Login
                </button>

                <p className="flex flex-row m-3 text-white">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-yellow-300 pl-2 hover:text-yellow-500"
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
