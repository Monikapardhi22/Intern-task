import React from 'react'
import img from '../assets/moon.jpg'
import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      setError("Invalid Email or Password!");
    }
  };

    return (
        <div className=' h-screen w-full  bg-cover bg-center  ' style={{ backgroundImage: `url(${img})` }}>
            <div className=' '>
                <div className='text-7xl text-white font-medium text-center md:text-center lg:mr-[80px] sm:text-center sm:p-20 p-20 md:mr-2.5'>
                    Login
                </div>
               
                <form
                    onSubmit={handleLogin}
                    method="post"
                    className="
    flex flex-col border-2 border-white justify-center items-center  
    rounded-xl bg-blue-50 p-6 sm:p-10 w-[90%] max-w-md mx-auto
    sm:relative sm:mt-[30px] lg:mr-[500px] lg:ml-[500px]
    fixed inset-0 sm:inset-auto shadow-lg shadow-blue-500 
  "
                >
                    <div className="flex flex-col w-full">
                        <label className="text-xl font-sans mb-[10px]">Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-[1px] border-black rounded-md px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col w-full mt-4">
                        <label className="text-xl font-sans mb-[10px]">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-[1px] border-black rounded-md px-2 py-1"
                        />
                    </div>
                     {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <button className='sm:w-[180px] md:w-[180px] p-[7px] bg-blue-500 mt-3 rounded-md text-xl hover:bg-white hover:text-blue-500'>
                        Login
                    </button>
                    <div className='flex flex-row m-3'>
                        <div>
                            Already have an account?
                        </div>
                        <Link to='/register' className='text-blue-500 pr-2.5 hover:text-blue-700'>Register</Link>
                    </div>
                </form>

                <div>
                    <div>
                        Don’t have an account?
                    </div>
                    <Link to='/register' >Register</Link>
                </div>




            </div>
        </div>
    )
}
