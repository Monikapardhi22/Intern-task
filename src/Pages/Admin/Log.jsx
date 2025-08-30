import React from 'react'
import Admin from '../Admin'
import { useState } from "react";
// import vending from "../../assets/vedening1.png"
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Video from "../../assets/Black White Bold Simple Initials Name Logo.mp4"
import logout from "../../assets/logout.jpg";



export default function Log() {
    const [open, setOpen] = useState(false);
    const [showLink, setShowLink] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };
    return (
        <div>

            <nav className="px-2 w-screen  sm:h-full h-screen bg-white   flex justify-between sm:items-center ">
                <div className="lg:flex lg: lg: lg:flex-row sm:flex sm:flex-col ">
                    <div className="bg-white rounded-lg shadow-white lg: lg:overflow-x-hidden lg:overflow-y-auto sm:p-7 p-1 m-2  text-black">

                        <div className="">
                            <Link to="/">
                                <video
                                    src={Video}
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-[100px]  sm:w-[200px] sm:h-[200px] rounded-[50%] lg:block lg:w-[200px] lg:h-[200px] sm:ml-72  lg:rounded-[50%] lg:ml-8 lg:mr-4 hidden   shadow-lg"
                                />
                                {/* <img src={logo} alt="Logo" className="h-[270px] w-[260px] sm:hidden lg:block lg:h-[200px] lg:w-[200px] hidden" /> */}
                            </Link>


                            <ul className="hidden lg:flex lg:flex-col gap-8 text-lg font-medium text-gray-700 lg:mt-[30px] ">
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


                                    {showLink && (
                                        <ul className=" text-gray-200 mt-2 lg:px-12 space-y-2">
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
                                    <Link to="/mach" className="  transition-colors duration-300 ease-in  hover:text-black  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                        <i class="fa-solid fa-fax"></i>Machine Inventory
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cat" className="  transition-colors duration-300 ease-in  hover:text-black  lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                        <i class="fa-solid fa-icons"></i> Category
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <button
                            className="block text-4xl text-black lg:hidden lg:w-0 lg:h-0 m-4   mb-4 sm:mb-0"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>

                    {/* content for sale */}

                    <div className='ml-14 mr-14 mb-14 lg:mt-20 sm:w-[750px]'>
                        <div className='  sm:block text-4xl  text-black mt-20 font-semibold mb-5  sm:mt-8 sm:m-7'>
                            Logs
                        </div>
                        <div className='bg-transparent shadow-lg p-2 sm:p-7 rounded-md  '>
                            <div className='flex justify-center items-center'>
                                <div className='sm:m-3 flex flex-col'>
                                    <input type='text' placeholder='Machine Code' className='border-b-[1px] border-gray-700  shadow-lg bg-white text-black w-[110px] ml-2.5 sm:w-[200px] sm:text-[18px] placeholder:text-gray-500   sm:p-4 p-1 rounded-md  focus:border-blue-400 focus:outline-none ' />
                                    <button className='text-xl border-[1px]  border-gray-600 rounded-md text-blue-400 sm:p-2 sm:mt-3 ml-4 mr-9 sm:w-1/2   focus:bg-blue-300 focus:text-black focus:border-blue-300 focus:transition-colors focus:duration-300 focus:ease-in-out cursor-pointer mt-1'>Show</button>
                                </div>
                                <div>
                                    {/* <img src={vending} className='sm:h-full sm:w-full h-[200px] w-[100px]' /> */}
                                </div>
                            </div>
                            <div className='sm:m-3 mt-6 flex m-3 sm:flex-row text-black  flex-col sm:justify-center sm:items-center justify-center items-center'>
                                Date:  <input type='date' placeholder='Date' className='border-b-2 border-gray-300 font-light text-black rounded-md p-1 m-1 placeholder:text-white' />
                                Time:<input
                                    type="time"
                                    className="text-[18px] text-white sm:p-1 p-1 rounded-md border-b-2 border-gray-200 focus:border-blue-400 focus:outline-none sm:ml-8 m-1  "
                                />
                                <button className='text-lg border-b-[1px] border-gray-300 rounded-md text-white  sm:ml-24 p-1 bg-blue-500 px-4 focus:bg-blue-900 focus:text-white focus:border-blue-300 focus:transition-colors focus:duration-300 focus:ease-in-out cursor-pointer sm:m-0 mt-1 ml-2.5'>Filter</button>

                            </div>

                        </div>
                        <div className='w-full bg-transparent shadow text-[19px] text-center text-white mt-2.5 rounded-md'>
                            <div className='p-2.5'> <select className='bg-transparent text-blue-400'>
                                <option value="">Click Here</option>
                                <option value=" Available">No History Available !!</option>
                            </select></div>

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
                                className="lg:h-[80px] lg:w-[80px] sm:h-10 sm:w-10 sm:mt-3.5 rounded-full object-cover lg:mb-[580px]  ml-56 "
                            />
                        </button>
                    </div>
                </div>


                {open && (

                    <div className="absolute top-20 left-5 sm:mb-3 lg:hidden lg:mt-3   rounded-lg bg-white shadow p-4 sm:w-[170px] z-10 sm:h-[580px]">
                        <ul className="flex flex-col gap-4 text-base font-semibold text-black">
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
                                <Link to="/cat" onClick={() => setOpen(false)}>
                                    <i class="fa-solid fa-icons"></i>Category
                                </Link>
                            </li>
                            <li>
                                <Link to="/mach" onClick={() => setOpen(false)}>
                                    <i class="fa-solid fa-fax"></i>Machine Inventory
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
