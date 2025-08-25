import React, { useState } from 'react';
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
      className="h-screen w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center"
    >
      <form
        onSubmit={handleRegister}
        className="flex flex-col border border-white/40 justify-center items-center  
          rounded-xl bg-white/20 backdrop-blur-md p-6 sm:p-8 w-[90%] max-w-md
          shadow-lg shadow-black/30"
      >
        <div className="text-4xl text-white font-bold text-center mb-6 drop-shadow-lg">
          Registration
        </div>

        {/* Name */}
        <div className="flex flex-col w-full">
          <label className="text-lg font-sans mb-2 text-white">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600 capitalize"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full mt-3">
          <label className="text-lg font-sans mb-2 text-white">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full mt-3">
          <label className="text-lg font-sans mb-2 text-white">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600"
            placeholder="Enter password"
          />
          {passwordError && <p className="text-red-300 text-sm">{passwordError}</p>}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col w-full mt-3">
          <label className="text-lg font-sans mb-2 text-white">Confirm Password</label>
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            className="border border-white/50 rounded-md px-3 py-2 bg-white/30 text-black placeholder-gray-600"
            placeholder="Re-enter password"
          />
          {confirmError && <p className="text-red-300 text-sm">{confirmError}</p>}
        </div>

        {/* General Error */}
        {error && <p className="text-red-300 text-sm mb-3">{error}</p>}

        {/* Submit Button */}
        <button
          className="sm:w-[180px] md:w-[180px] p-2 bg-blue-500 mt-5 rounded-md text-lg font-semibold text-white hover:bg-white hover:text-blue-500 transition"
        >
          Register
        </button>

        {/* Already Registered */}
        <div className="flex flex-row m-3 text-white">
          <span>Already have an account?</span>
          <Link to="/login" className="text-yellow-300 pl-2 hover:text-yellow-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
