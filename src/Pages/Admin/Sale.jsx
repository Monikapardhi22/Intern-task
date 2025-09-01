import React from 'react'
import Admin from '../Admin'
import { useState } from "react";
import sales from '../../assets/saless.png'
import { motion } from 'motion/react';
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Video from "../../assets/Black White Bold Simple Initials Name Logo.mp4"
import logout from "../../assets/logout.jpg";
import layer from "../../assets/layers.png"
import razo from "../../assets/razorpe.png"
import chart from "../../assets/chart.jpg"
import Try from './Try';


export default function Sale() {
    const [open, setOpen] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };
    return (
        <div>

            <nav className="px-2 w-full  bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
                <div className="lg:flex lg: lg: lg:flex-row sm:flex sm:flex-col ">
                    <div className=" bg-gradient-to-br from-blue-50 via-white to-blue-100 text-black rounded-lg lg:shadow lg: lg:overflow-x-hidden lg:overflow-y-auto p-7  ">

                        <div className="">
                            <Link to="/">
                                <video
                                    src={Video}
                                    // controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-[100px]  sm:w-[200px] sm:h-[200px] rounded-[50%] lg:block lg:w-[200px] lg:h-[200px] sm:ml-72  lg:rounded-[50%] lg:ml-8 lg:mr-4 hidden   shadow-lg"
                                />
                                {/* <img src={logo} alt="Logo" className="h-[180px] w-[200px] sm:hidden lg:block lg:h-[200px] lg:w-[200px] hidden" /> */}
                            </Link>


                            <ul className="hidden lg:flex lg:flex-col gap-8 text-lg font-medium text-gray-700 lg:mt-[30px] ">
                                <li>
                                    <Link to="/sale" className="transition-colors duration-300 ease-in  hover:rounded-lg hover:text-black  lg:hover:w-full lg:px-10  lg:py-3.5 hover:">
                                        <i className="fa-solid fa-chart-line"></i>Sale
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dash" className=" transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5 ">
                                        <i className="fa-solid fa-grip"></i>Dashboard
                                    </Link>
                                </li>
                                <li className="cursor-pointer">
                                    {/* Configuration Button */}
                                    <div
                                        onClick={() => setShowLink(!showLink)}
                                        className="flex items-center gap-2 transition-colors duration-300 ease-in hover:text-black  lg:px-10 lg:py-2"
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
                                                    className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                                                >
                                                    <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Service
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/machine"
                                                    className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                                                >
                                                    <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Machine
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/log"
                                                    className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                                                >
                                                    <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Logs
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link to="/mach" className="  transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                        <i className="fa-solid fa-icons"></i>Machine Inventory
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cat" className="  transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                                        <i className="fa-solid fa-icons"></i> Category
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <button
                            className="block text-4xl lg:hidden lg:w-0 lg:h-0 text-black "
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>
                    {/* content for sale */}
                    <div className='   lg:w-[1100px] '>
                        <div className=' sm:ml-56 lg:ml-0 sm:mt-9 lg:mt-0 sm:overflow-hidden lg:overflow-hidden'>
                            <div className=''>
                                <div> </div>
                                <h1 className='text-xl  font-semibold lg:text-3xl m-2.5'>
                                    Sales
                                </h1>

                            </div>
                            <div className='border-b-2  border-gray-100 text-white shadow-lg rounded-2xl sm:flex sm:items-center sm:justify-around flex justify-center items-center  '>
                                <div className='m-5 mr-12' >
                                    <select className='border text-black border-gray-700 hover:border-2 hover:border-blue-600 p-3 focus:border-blue-600 rounded-lg sm:w-[300px] py-3 '  >
                                        <option value="" className='disabled hidden font-bold text-5xl'>
                                        Choose Machine
                                        </option>
                                        <option value="*" className='text-lg' >All</option>
                                        <option value="cloud" className='text-lg'>Cloud</option>
                                        <option value="STPTS" className='text-lg'>STPTS</option>
                                        <option value="VendT3" className='text-lg'>VendT3</option>
                                        <option value="Cosmetic" className='text-lg'>Cosmetic</option>

                                    </select>

                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 3 }}
                                    className='text-3xl font-medium text-blue-600'
                                >
                                    <img src={sales} className='h-[200px] w-[200px]   ' />
                                </motion.div>
                            </div>
                            <div className='border-b-2 border-gray-300 shadow-md rounded-md mt-4 sm:flex sm:justify-around sm:items-center flex justify-between items-center '>
                                <div>
                                    Date :<input
                                        type="date"
                                        name='date' placeholder='Date'
                                        className="border text-black border-gray-300 sm:p-2 sm:px-9 m-5 p-2 focus:border-blue-500 focus:border-b-2  hover:border-blue-600 rounded-lg"
                                    />

                                </div>
                                <div className='border border-gray-300 text-black sm:p-2 sm:px-9 p-2 sm:m-5 focus:border-blue-500 hover:border-blue-600 rounded-lg'>
                                    <select


                                    >
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                    </select>


                                </div>

                            </div>

                            <div className='border-b-2 border-gray-100 shadow-md rounded-md mt-4 sm:flex sm:justify-around sm:items-center flex flex-col '>
                                <div className='flex sm:flex  lg:flex sm:flex-wrap sm:flex-row flex-col justify-center items-center'>
                                    <div className=' '>
                                        <motion.div
                                            className="w-56 mt-2.5 sm:h-[200px] h-[150px] cursor-pointer [perspective:700px]"
                                            onClick={() => setFlipped(!flipped)}
                                        >
                                            <motion.div
                                                className="relative w-[200px] h-[140px] rounded-xl shadow-xl"
                                                animate={{ rotateY: flipped ? 180 : 0 }}
                                                transition={{ duration: 0.6 }}
                                                style={{ transformStyle: "preserve-3d" }}
                                            >

                                                <div className="absolute  flex  pt-7 items-center overflow-hidden justify-center bg-gradient-to-b from-blue-200 to-white  pl-3.5 text-black text-2xl font-bold rounded-xl ">
                                                    <img src={layer} className='w-14 mr-5 p-1.5' /> Sale of Cloud
                                                </div>


                                                <div
                                                    className="absolute pt-4 w-full h-full flex items-center overflow-hidden justify-center  text-black text-2xl  bg-gradient-to-b from-white to-blue-200  font-bold rounded-xl backface-hidden"
                                                    style={{ transform: "rotateY(180deg)" }}
                                                > <div className='flex flex-row'>
                                                        <img src={layer} className='w-14 mr-2 p-1.5' />
                                                        Price -<br />$1200
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>


                                    </div>
                                    <div>
                                        <motion.div
                                            className="w-56 sm:h-[200px] h-[150px] cursor-pointer [perspective:1000px]"
                                            onClick={() => setFlipped(!flipped)}
                                        >
                                            <motion.div
                                                className="relative w-[200px] h-[140px] rounded-xl shadow-xl"
                                                animate={{ rotateY: flipped ? 180 : 0 }}
                                                transition={{ duration: 0.6 }}
                                                style={{ transformStyle: "preserve-3d" }}
                                            >

                                                <div className="absolute  flex  pt-7 items-center overflow-hidden justify-center bg-gradient-to-b from-blue-200 to-white  pl-3.5 text-black text-2xl font-bold rounded-xl ">
                                                    <img src={layer} className='w-14 mr-10 p-1.5' /><div className='mr-6 p-1.5'>
                                                        STPTS
                                                    </div>
                                                </div>


                                                <div
                                                    className="absolute pt-4 w-full h-full flex items-center overflow-hidden justify-center  text-black text-2xl  bg-gradient-to-b from-white to-blue-200  font-bold rounded-xl backface-hidden"
                                                    style={{ transform: "rotateY(180deg)" }}
                                                > <div className='flex flex-row'>
                                                        <img src={layer} className='w-14 mr-2 p-1.5 ' />
                                                        Price -<br />$2400
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <div className=' '>
                                        <motion.div
                                            className="w-56 sm:h-[200px] h-[150px] cursor-pointer [perspective:700px]"
                                            onClick={() => setFlipped(!flipped)}
                                        >
                                            <motion.div
                                                className="relative w-[200px] h-[140px] rounded-xl shadow-xl"
                                                animate={{ rotateY: flipped ? 180 : 0 }}
                                                transition={{ duration: 0.6 }}
                                                style={{ transformStyle: "preserve-3d" }}
                                            >

                                                <div className="absolute  flex  pt-7 items-center overflow-hidden justify-center bg-gradient-to-b from-blue-200 to-white  pl-3.5 text-black text-2xl font-bold rounded-xl ">
                                                    <img src={layer} className='w-14 mr-5 p-1.5' /><div className='mr-6'>
                                                        VendT3
                                                    </div>
                                                </div>


                                                <div
                                                    className="absolute pt-4 w-full h-full flex items-center overflow-hidden justify-center  text-black text-2xl  bg-gradient-to-b from-white to-blue-200  font-bold rounded-xl backface-hidden"
                                                    style={{ transform: "rotateY(180deg)" }}
                                                > <div className='flex flex-row'>
                                                        <img src={layer} className='w-14 mr-2 p-1.5' />
                                                        Price -<br />$1900
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>


                                    </div>
                                    <div className=' '>
                                        <motion.div
                                            className="w-56 sm:h-[200px] h-[150px] cursor-pointer [perspective:700px]"
                                            onClick={() => setFlipped(!flipped)}
                                        >
                                            <motion.div
                                                className="relative w-[200px] h-[140px] rounded-xl shadow-xl"
                                                animate={{ rotateY: flipped ? 180 : 0 }}
                                                transition={{ duration: 0.6 }}
                                                style={{ transformStyle: "preserve-3d" }}
                                            >

                                                <div className="absolute  flex  pt-7 items-center overflow-hidden justify-center bg-gradient-to-b from-blue-200 to-white  pl-3.5 text-black text-2xl font-bold rounded-xl ">
                                                    <img src={layer} className='w-14 mr-3.5 p-1.5' />
                                                    <div className='mr-4'>
                                                        Cosmetic
                                                    </div>
                                                </div>


                                                <div
                                                    className="absolute pt-4 w-full h-full flex items-center overflow-hidden justify-center  text-black text-2xl  bg-gradient-to-b from-white to-blue-200  font-bold rounded-xl backface-hidden"
                                                    style={{ transform: "rotateY(180deg)" }}
                                                > <div className='flex flex-row'>
                                                        <img src={layer} className='w-14 mr-2 ' />
                                                        Price -<br />$1200
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>


                                    </div>

                                </div>

                            </div>
                            <div className='m-5'>
                                <div className='text-2xl font-semibold text-black'>
                                    Business Analysis
                                </div>
                                <div className='flex  sm:flex sm:flex-wrap mt-3.5  lg:ml-5  flex-col '>
                                    <div className='border-[1.2px] border-gray-400 p-2.5 rounded-md mb-2.5 mt-2.5 mr-2.5'>
                                        <div className='text-[16px]  text-gray-600'>
                                            Transaction amount/number of transactions

                                        </div>
                                        <div className='text-[18px] text-black flex items-center font-bold text-right p-1.5'>
                                            ₹0.00|0<div className='text-[11px] font-light'>
                                                Trx
                                            </div>
                                        </div>


                                    </div>
                                    <div className='border-[1.2px] border-gray-400 p-2.5 rounded-md mb-2.5 mt-2.5 mr-2.5'>
                                        <div className='text-[16px] text-gray-600'>
                                            Refund amount/number of refunds

                                        </div>
                                        <div className='text-[18px] flex items-center font-bold text-right p-1.5 text-black'>
                                            ₹0.00|0<div className='text-[11px] font-light'>
                                                Trx
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-[1.2px] border-gray-400 p-2.5 rounded-md mb-2.5 mt-2.5 mr-2.5'>
                                        <div className='text-[16px] text-gray-600'>
                                            Refund rate

                                        </div>
                                        <div className='text-[18px] text-black flex items-center font-bold text-right p-1.5'>
                                            0.00%
                                        </div>
                                    </div>
                                    <div className='border-[1.2px] border-gray-400 p-2.5 rounded-md mb-2.5 mt-2.5 mr-2.5'>
                                        <div className='text-[16px] text-gray-600'>
                                            Transaction value/number of transactions

                                        </div>
                                        <div className='text-[18px] flex text-black items-center font-bold text-right p-1.5'>
                                            ₹0.00|0<div className='text-[11px] font-light'>
                                                Trx
                                            </div>
                                        </div>
                                    </div>





                                </div>
                                <div>
                                    <img src={chart} />
                                </div>
                                <div className=' bg-gradient-to-br from-blue-50 via-white to-blue-100 border rounded-md mt-4 text-black flex  flex-col justify-around items-center shadow-lg border-white '>
                                    <div className='text-2xl font-semibold'>
                                        Top Payment Method
                                    </div>
                                    <div className=' ' >
                                        <table className='sm:w-full p-3.5 lg:w-[1000px] w-full mt-3   ' >
                                            <thead className='bg-blue-100 text-[16px] w-full rounded-md  text-lg border-0  font-semibold h-[40px] mb-3 m-1.5'>
                                                <tr>
                                                    <th>Name </th>
                                                    <th>Amount</th>
                                                    <th>Transactions</th>
                                                </tr>
                                            </thead>
                                            <tbody className='sm:w-full p-3 lg:w-full text-center  '>
                                                <tr>
                                                    <td className='sm:flex  sm:justify-center sm:items-center flex justify-center items-center'>
                                                        <img src={razo} className='w-[50px] h-[40px]' />Razorpay
                                                    </td>
                                                    <td className='sm:pl-64'>0</td>
                                                    <td className='sm:pl-28 '
                                                    >0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='mt-6 h-full mb-6'>
                                    {/* <select className='w-full border  p-2.5 shadow bg-white rounded-md focus:border-blue-300'>
                                                <option value=""> <h1 className='text-2xl font-semibold'>
                                                    Transition
                                                </h1>

                                                
                                                
                                                </option>
                                                <option value={<input type='search' placeholder='search'/>}><input type='search' placeholder='search'/></option>
                                               
                                               </select> */}
                                    <Try />
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
                                className="lg:h-[80px] lg:w-[80px] sm:h-10 sm:w-10 rounded-full object-cover lg:mb-[580px] "
                            />
                        </button>
                    </div>
                </div>


                {open && (

                    <div className="absolute top-20 left-5 sm:mb-3 lg:hidden lg:mt-3 bg-white rounded-lg shadow p-4 sm:w-[170px] z-10 sm:h-[580px]">
                        <ul className="flex flex-col gap-4 text-base font-semibold text-gray-700 ">
                            <li>
                                <Link to="/sale" onClick={() => setOpen(false)}>
                                    <i className="fa-solid fa-chart-line"></i>Sale
                                </Link>
                            </li>
                            <li>
                                <Link to="/dash" onClick={() => setOpen(false)}>
                                    <i className="fa-solid fa-grip"></i>Dashboard
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
                                    <ul className=" text-gray-600 mt-2 lg:px-12 space-y-2">
                                        <li className=''>
                                            <Link
                                                to="/Server"
                                                className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/machine"
                                                className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Machine
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/log"
                                                className="block transition-colors duration-300 ease-in hover:text-black hover:rounded-lg"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-circle-right"></i>Logs
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>


                            <li>
                                <Link to="/cat" onClick={() => setOpen(false)} className='hover:text-black '>
                                    <i className="fa-solid fa-icons"></i>Category
                                </Link>
                            </li>
                            <li>
                                <Link to="/mach" onClick={() => setOpen(false)} className='hover:text-black '>
                                    <i className="fa-solid fa-fax"></i> Machine Inventory
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
