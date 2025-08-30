import React from 'react'
import Admin from '../Admin'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Video from "../../assets/Black White Bold Simple Initials Name Logo.mp4"
import logout from "../../assets/logout.jpg";
import product from '../../assets/product.png'
import client from "../../assets/clinet.png"
import order from "../../assets/order.png"
import machine from "../../assets/machine.webp"
// import look from "../../assets/looking.gif"


export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [showLink, setShowLink] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };
    return (
        <div>

            <nav className="px-2 w-full bg-black overflow-hidden">
                <div className="lg:flex lg:items-center lg:justify-between lg:flex-row sm:flex sm:flex-col">
                    <div className="bg-black rounded-lg lg:shadow lg:h-screen lg:overflow-x-hidden lg:overflow-y-auto sm:p-7 py-7 px-2 ">

                        <div className="overflow-hidden">
                            <Link to="/">
                                {/* <img src={logo} alt="Logo" className="h-[180px] w-[200px] sm:hidden lg:block lg:h-[200px] lg:w-[200px] hidden" /> */}
                                  <video 
                                        src={Video} 
                                        controls 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        className=" sm:w-[200px] sm:h-[300px] lg:w-[200px] sm:ml-52 lg:h-[230px] lg:m-0 lg:block sm:hidden  hidden h-screen
                                         rounded-xl shadow-lg"
                                      />
                            </Link>


                            <ul className="hidden lg:flex lg:flex-col gap-8 text-lg font-medium text-amber-50 lg:mt-[30px] ">
                                <li>
                                    <Link to="/sale" className="transition-colors duration-300 ease-in  hover:rounded-lg hover:text-white  lg:hover:w-full lg:px-10  lg:py-3.5 hover:">
                                        <i class="fa-solid fa-chart-line"></i>Sale
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dash" className=" transition-colors duration-300 ease-in  hover:text-white  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5 ">
                                        <i class="fa-solid fa-grip"></i>Dashboard
                                    </Link>
                                </li>
                                <li className="cursor-pointer">
                                    {/* Configuration Button */}
                                    <div
                                        onClick={() => setShowLink(!showLink)}
                                        className="flex items-center gap-2 transition-colors duration-300 ease-in hover:text-white lg:px-10 lg:py-2"
                                    >
                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                        <span>Configuration</span>
                                    </div>

                                    {/* Dropdown Links */}
                                    {showLink && (
                                        <ul className=" text-amber-50 mt-2 lg:px-12 space-y-2">
                                            <li className=''>
                                                <Link
                                                    to="/Server"
                                                    className="block transition-colors duration-300 ease-in hover:text-white hover:rounded-lg"
                                                >
                                                    ⋆Service
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/machine"
                                                    className="block transition-colors duration-300 ease-in hover:text-white hover:rounded-lg"
                                                >
                                                    ⋆Machine
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/log"
                                                    className="block transition-colors duration-300 ease-in hover:text-white hover:rounded-lg"
                                                >
                                                    ⋆Logs
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                
                                <li>
                                    <Link to="/mach" className="  transition-colors duration-300 ease-in  hover:text-white  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                       <i class="fa-solid fa-fax"></i> Machine Inventory
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cat" className="  transition-colors duration-300 ease-in  hover:text-white  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                        <i class="fa-solid fa-icons"></i>Category
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <button
                            className="block text-4xl lg:hidden text-white lg:w-0 lg:h-0"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>

                        <div className='  lg:flex lg:justify-center lg:items-center lg:flex-wrap  lg:w-[1000px] '>

                            <div className='lg:flex lg:flex-row lg:justify-center lg:items-center flex flex-col items-center justify-center'>

                                <div className='flex justify-center items-center  lg:mr-16 border-white shadow-lg w-[200px] lg:w-[400px] rounded-2xl sm:m-5 hover:bg-blue-300 hover:border-blue-400 hover:shadow-lg p-0.5 sm:ml-40 overflow-hidden lg:m-0 bg-amber-50 mt-24'>
                                    <div className='font-bold text-2xl '>
                                        All Products
                                        <div className='mt-3.5'>
                                            17
                                        </div>
                                    </div>
                                    <div>
                                        <img src={product} className='sm:w-[120px] sm:h-[120px] cursor-pointer' />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center  border-amber-50 shadow-lg w-[200px] lg:w-[400px] rounded-2xl m-5 hover:bg-blue-300 hover:border-blue-400 hover:shadow-lg p-0.5 sm:ml-40  lg:m-0 bg-amber-50'>
                                    <div className='font-bold text-2xl'>
                                        All Clients
                                        <div className='mt-3.5'>
                                            3
                                        </div>
                                    </div>
                                    <div>
                                        <img src={client} className='sm:w-[120px] sm:h-[120px]  cursor-pointer ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center'>


                                <div className='flex justify-center items-center sm:py-4 border-amber-50 shadow-lg w-[200px] lg:w-[400px] lg:mt-3 rounded-2xl m-5  hover:bg-blue-300 hover:border-blue-400 hover:shadow-lg p-0.5 sm:ml-40 lg:m-0 bg-amber-50'>
                                    <div className='font-bold text-2xl'>
                                        All Orders
                                        <div className='mt-3.5'>
                                            1200
                                        </div>
                                    </div>
                                    <div>
                                        <img src={order} className='sm:w-[100px] sm:h-[100px] ml-3 cursor-pointer sm:ml-5 w-[70px] h-[90px]' />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center sm:py-4 lg:ml-16 border-amber-50 shadow-lg w-[200px] lg:w-[400px] lg:mt-3 rounded-2xl m-5 mb-28  hover:bg-blue-300 hover:border-blue-400 hover:shadow-lg p-0.5 sm:ml-40 lg:m-0 bg-amber-50'>
                                    <div className='font-bold text-2xl '>
                                        All Machine
                                        <div className='mt-3.5'>
                                            1000
                                        </div>
                                    </div>
                                    <div>
                                        <img src={machine} className='sm:w-[100px] sm:h-[100px] cursor-pointer sm:ml-5 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div></div>
                        <button
                            onClick={handleLogout}
                            className="hidden lg:block cursor-pointer"
                        >

                            <img
                                src={logout}
                                alt="Logout"
                                className="lg:h-14 lg:w-14 sm:h-10 sm:w-10 rounded-full object-cover lg:mb-[580px] "
                            />
                        </button>
                    </div>
                </div>


                {open && (

                    <div className="absolute top-20 left-5 sm:mb-3 lg:hidden lg:mt-3 bg-white rounded-lg shadow p-4 sm:w-[170px] z-10 sm:h-[580px]">
                        <ul className="flex flex-col gap-4 text-base font-semibold text-gray-600 ">
                            <li>
                                <Link to="/sale" onClick={() => setOpen(false) } className='hover:text-black '>
                                    <i class="fa-solid fa-chart-line"></i>Sale
                                </Link>
                            </li>
                            <li>
                                <Link to="/dash" onClick={() => setOpen(false)} className='hover:text-black '>
                                    <i class="fa-solid fa-grip"></i>Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/server" onClick={() => setOpen(false)} className='hover:text-black '>
                                    ⋆Server
                                </Link>
                            </li>
                            <li>
                                <Link to="/machine" onClick={() => setOpen(false)} className='hover:text-black '>
                                    ⋆Machine
                                </Link>
                            </li>
                            <li>
                                <Link to="/log" onClick={() => setOpen(false)} className='hover:text-black '>
                                    ⋆Logs
                                </Link>
                            </li>
                            <li>
                                <Link to="/cat" onClick={() => setOpen(false)} className='hover:text-black '>
                                    <i class="fa-solid fa-icons"></i>Category
                                </Link>
                            </li>
                            <li>
                                <Link to="/mach" onClick={() => setOpen(false)} className='hover:text-black '>
                                   <i class="fa-solid fa-fax"></i> Machine Inventory
                                </Link>
                            </li>

                            <li>

                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-red-600 "
                                >
                                    <img
                                        src={logout}
                                        alt="Logout"
                                        className="h-8 w-8 rounded-full object-cover hover:bg-amber-100 hover:p-1 hover:rounded-2xl "
                                    />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

        </div>
    )
}
