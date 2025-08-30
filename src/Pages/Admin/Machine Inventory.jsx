import React, { useState, useEffect } from 'react'
import Admin from '../Admin'
// import {  } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Video from "../../assets/Black White Bold Simple Initials Name Logo.mp4"
import layer from "../../assets/layers.png"
import logout from "../../assets/logout.jpg";
import * as XLSX from "xlsx";
import singlelayer from "../../assets/singlelayer.png"
import gif1 from "../../assets/Developer1.gif"
export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showLink, setShowLink] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Public folder se Excel file load karo
    fetch("/sample_d1.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const excelData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
        setData(excelData);
        setColumns(Object.keys(excelData[0]));
      });
  }, []);
  return (
    <div>

      <nav className="px-2 w-full bg-white overflow-y-hidden overflow-x-auto">
        <div className="lg:flex lg:items-center lg:justify-between lg:flex-row sm:flex sm:flex-col">
          <div className="bg-white text-black rounded-lg lg:shadow lg:h-screen lg:overflow-x-hidden lg:overflow-y-auto p-7">

            <div className="overflow-hidden">
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
                {/* <img src={logo} alt="Logo" className="h-[180px] w-[200px] sm:hidden lg:block lg:h-[200px] lg:w-[200px] hidden" /> */}
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

                  {/* Dropdown Links */}
                  {showLink && (
                    <ul className=" text-gray-700 mt-2 lg:px-12 space-y-2">
                      <li className=''>
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
                    <i class="fa-solid fa-fax"></i> Machine Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/cat" className="  transition-colors duration-300 ease-in  hover:text-black lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                    <i class="fa-solid fa-icons"></i>Category
                  </Link>
                </li>
              </ul>
            </div>


            <button
              className="block text-4xl lg:hidden lg:w-0 lg:h-0 text-black"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
          <div className='sm:mt-[100px] '>
            <div className='text-2xl  font-semibold text-left p-3.5 text-black'>
              Machine Inventory
            </div>
            <div className='p-3 bg-white shadow sm:px-16'>
              <div className='flex justify-between items-center '>
                <input type='search' className=' p-1 border-b-[1px]  w-1/2 border-gray-400 placeholder:p-1 placeholder:text-gray-400 rounded-md' placeholder='Search' />
                <div className='border-0 p-1 text-lg text-white bg-blue-400 sm:w-1/5 w-1/3 text-center rounded-md sm:m-2.5'>
                  +New Inventory
                </div>
              </div>

              <div className='flex  justify-center items-center flex-col sm:flex lg:flex lg:flex-row  sm:justify-center sm:items-center'>
                <img src={gif1} height="200px" width="300px" className='rounded-md mt-3' />
                <div className='border-[1px] border-blue-500 sm:p-7  w-1/4 h-[100px] bg-violet-50 text-xl sm:w-1/7  text-blue-400 font-semibold rounded-xl  flex flex-col justify-center items-center'>
                  Rented <div className='flex justify-center items-center mt-3.5 text-2xl'>
                    0   <img src={layer} className='h-[30px] ml-2' />
                  </div>
                </div>
                <div className='border-[1px] border-blue-500 w-1/4 sm:p-7  h-[100px] bg-violet-50 text-xl sm:w-1/7  text-blue-400 font-semibold rounded-xl  flex flex-col justify-center items-center'>
                  Sold <div className='flex justify-center items-center mt-3.5 text-2xl'>
                    0   <img src={singlelayer} className='h-[30px] ml-2' />
                  </div>
                </div>
                <div className='border-[1px] border-blue-500  sm:p-7 w-1/4 h-[100px] bg-violet-50 text-xl sm:w-1/7  text-blue-400 font-semibold rounded-xl  flex flex-col justify-center items-center'>
                  Applied <div className='flex justify-center items-center mt-3.5 text-2xl'>
                    1  <img src={layer} className='h-[30px] ml-2' />
                  </div>
                </div>
                <div className='border-[1px] border-blue-500 w-1/4  sm:p-7 h-[100px] bg-violet-50 text-xl sm:w-1/7  text-blue-400 font-semibold rounded-xl  flex flex-col justify-center items-center'>
                  Franchise <div className='flex justify-center items-center mt-3.5 text-2xl'>
                    0   <img src={singlelayer} className='h-[30px] ml-2' />
                  </div>
                </div>
                <div className='border-[1px] border-blue-500  w-1/4 sm:p-7 h-[100px] bg-violet-50 text-xl sm:w-1/7  text-blue-400 font-semibold rounded-xl  flex flex-col justify-center items-center'>
                  Total <div className='flex justify-center items-center mt-3.5 text-2xl'>
                    1  <img src={layer} className='h-[30px] ml-2' />
                  </div>
                </div>
              </div>

              <div>
                <div className="p-2">
                  {/* <h2 className="text-2xl font-bold mb-4">📊 Excel Data (Auto Load)</h2> */}

                  {data.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="table-auto border-collapse  w-full">
                        <thead className="bg-white">
                          <tr>
                            {/* <th className="border border-gray-400 px-4 py-2">Sr.No</th> */}
                            {columns.map((col, index) => (
                              <th key={index} className=" sm:text-2xl px-1 py-2 text-black bg-white">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, i) => (
                            <tr key={i}>
                              {/* <td className="border border-gray-400 px-4 py-2">{i + 1}</td> */}
                              {columns.map((col, j) => (
                                <td key={j} className=" px-1 py-2 sm:ml-20 sm:text-center text-black">
                                  {row[col]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
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
