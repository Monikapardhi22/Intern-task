import React from 'react'
import Admin from '../Admin'
import { useState } from "react";
// import sales from '../../assets/saless.png'
// import { motion } from 'motion/react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.jpg";
// import layer from "../../assets/layers.png"
// import razo from "../../assets/razorpe.png"
// import chart from "../../assets/chart.jpg"
// import Try from './Try';
import gif from "../../assets/gif.gif"


export default function Machine() {
    const [open, setOpen] = useState(false);
    const [showLink, setShowLink] = useState(false);
    // const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };
    return (
        <div>

            <nav className="px-2 w-full bg-white flex justify-between items-center ">
                <div className="lg:flex lg: lg: lg:flex-row sm:flex sm:flex-col ">
                    <div className="bg-white rounded-lg lg:shadow lg: lg:overflow-x-hidden lg:overflow-y-auto p-7 ">

                        <div className="">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="h-[180px] w-[200px] sm:hidden lg:block lg:h-[200px] lg:w-[200px] hidden" />
                            </Link>


                            <ul className="hidden lg:flex lg:flex-col gap-8 text-lg font-medium text-gray-400 lg:mt-[30px] ">
                                <li>
                                    <Link to="/sale" className="transition-colors duration-300 ease-in  hover:rounded-lg hover:text-black  lg:hover:w-full lg:px-10  lg:py-3.5 hover:">
                                        <i class="fa-solid fa-chart-line"></i>Sale
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dash" className=" transition-colors duration-300 ease-in  hover:text-black  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5 ">
                                        <i class="fa-solid fa-grip"></i>Dashboard
                                    </Link>
                                </li>

                                <li className="cursor-pointer">
                                 {/* Configuration Button */}
                                 <div
                                   onClick={() => setShowLink(!showLink)}
                                   className="flex items-center gap-2 transition-colors duration-300 ease-in hover:text-black lg:px-10 lg:py-2"
                                 >
                                   <i className="fa-solid fa-screwdriver-wrench"></i>
                                   <span>Configuration</span>
                                 </div>
                               
                                 {/* Dropdown Links */}
                                 {showLink && (
                                   <ul className=" text-gray-700 mt-2 lg:px-12 space-y-2">
                                     <li>
                                       <Link
                                         to="/Server"
                                         className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                       >
                                        ⋆Service
                                       </Link>
                                     </li>
                                     <li>
                                       <Link
                                         to="/machine"
                                         className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                       >
                                         ⋆Machine
                                       </Link>
                                     </li>
                                     <li>
                                       <Link
                                         to="/log"
                                         className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                       >
                                         ⋆Logs
                                       </Link>
                                     </li>
                                   </ul>
                                 )}
                               </li>
                                <li>
                                    <Link to="/contact" className="  transition-colors duration-300 ease-in  hover:text-black  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">

                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <button
                            className="block text-2xl lg:hidden lg:w-0 lg:h-0"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>
                    {/* content for sale */}

                    <div className='m-14'>
                        <img src={gif} className='rounded-md' />
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
                                className="lg:h-[80px] lg:w-[80px] sm:h-10 sm:w-10 rounded-full object-cover lg:mb-[580px]  ml-56 "
                            />
                        </button>
                    </div>
                </div>


                {open && (

                    <div className="absolute top-20 left-5 sm:mb-3 lg:hidden lg:mt-3 bg-white rounded-lg shadow p-4 sm:w-[170px] z-10 sm:h-[580px]">
                        <ul className="flex flex-col gap-4 text-base font-semibold text-gray-700 ">
                            <li>
                                <Link to="/sale" onClick={() => setOpen(false)}>
                                    <i class="fa-solid fa-chart-line"></i>Sale
                                </Link>
                            </li>
                            <li>
                                <Link to="/dash" onClick={() => setOpen(false)}>
                                    <i class="fa-solid fa-grip"></i>Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/server" onClick={() => setOpen(false)}>
                                    ⋆Server
                                </Link>
                            </li>
                            <li>
                                <Link to="/machine" onClick={() => setOpen(false)}>
                                    ⋆Machine
                                </Link>
                            </li>
                            <li>
                                                            <Link to="/log" onClick={() => setOpen(false)}>
⋆Logs
                                                            </Link>
                                                        </li>


                            <li>
                                <Link to="/contact" onClick={() => setOpen(false)}>

                                </Link>
                            </li>
                            <li>

                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-red-600"
                                >
                                    <img
                                        src={logout}
                                        alt="Logout"
                                        className="h-8 w-8 rounded-full object-cover"
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
