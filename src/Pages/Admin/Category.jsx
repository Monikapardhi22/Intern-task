import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

import Admin from '../Admin'
// import {  } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import Video from "../../assets/Black White Bold Simple Initials Name Logo.mp4"

// import layer from "../../assets/layers.png"
import logout from "../../assets/logout.jpg";

// import singlelayer from "../../assets/singlelayer.png"

export default function Category() {
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
    fetch("/public/sample_d1.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const excelData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
        setData(excelData);

        if (excelData.length > 0) {
          setColumns(Object.keys(excelData[0]));
        }
      });
  }, []);

  return (
    <div>

      <nav className="px-2  bg-white h-screen w-screen">
        <div className="lg:flex lg:items-center lg:justify-between lg:flex-row sm:flex sm:flex-col">
          <div className="bg-white rounded-lg lg:shadow lg:h-screen lg:overflow-x-hidden lg:overflow-y-auto p-7 text-black">

            <div className="overflow-hidden ">
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
                  <Link to="/sale" className="transition-colors duration-300 ease-in  hover:rounded-lg hover:text-black   lg:hover:w-full lg:px-10  lg:py-3.5 hover:">
                    <i class="fa-solid fa-chart-line"></i>Sale
                  </Link>
                </li>
                <li>
                  <Link to="/dash" className=" transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5 ">
                    <i class="fa-solid fa-grip"></i>Dashboard
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
                      <li className=''>
                        <Link
                          to="/Server"
                          className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                        >
                          ⋆Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/machine"
                          className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                        >
                          ⋆Machine
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/log"
                          className="block transition-colors duration-300 ease-in hover:text-black  hover:rounded-lg"
                        >
                          ⋆Logs
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/mach" className="  transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                    <i class="fa-solid fa-fax"></i>Machine Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/cat" className="  transition-colors duration-300 ease-in  hover:text-black   lg:hover:w-full hover:rounded-lg lg:px-10 lg:py-3.5">
                    <i class="fa-solid fa-icons"></i>Category
                  </Link>
                </li>


              </ul>
            </div>


            <button
              className="block text-2xl lg:hidden lg:w-0 lg:h-0 text-black"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
          <div >
            <div className='text-2xl text-black font-semibold text-left p-3.5 '>
              Category
            </div>
            <div className='p-1.5 bg-white text-black shadow  sm:p-12'>
              <div className='flex justify-between items-center sm:flex '>
                <input type='search' className=' p-1 border-b-[1px] w-1/2 border-gray-400 placeholder:p-1 focus:border-2 focus:border-blue-400 rounded-2xl' placeholder='Search' />
                <div className='border-0 p-1 text-lg bg-blue-400 sm:w-1/5 w-1/4 text-center rounded-md sm:m-2.5 text-black overflow-hidden'>
                  + New Category
                </div>
              </div>


              <div className="p-6">
                {data.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="table-auto border-collapse  w-full">
                      <thead className="bg-white text-black">
                        <tr>

                          {columns.map((col, index) => (
                            <th key={index} className=" px-4 py-2 sm:text-2xl">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row, i) => (
                          <tr key={i}>

                            {columns.map((col, j) => (
                              <td key={j} className=" px-4 py-2 text-center   sm:px-16">
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


          <div>

            <div>
            </div>
            <button
              onClick={handleLogout}
              className="hidden lg:block cursor-pointer"
            >

              <img
                src={logout}
                alt="Logout"
                className="lg:h-14 lg:w-14 sm:h-10 sm:w-10 rounded-full object-cover lg:mb-[580px]   "
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


