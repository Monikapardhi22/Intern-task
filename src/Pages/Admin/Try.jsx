import React, { useState, useRef, useEffect } from "react";
import excel from "../../assets/excel.png"
import Notes from "../SaleNote.jsx/Notes";
import Note from "../../assets/notes.webp"


export default function Try() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [showNotes, setShowNotes] = useState(false);

    const dropdownRef = useRef(null);

    //
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-full relative" ref={dropdownRef}>
            {/* Dropdown header */}
            <div
                onClick={() => setOpen(!open)}
                className="border p-2.5 rounded-md shadow cursor-pointer bg-white text-2xl font-semibold"
            >
                Transaction
            </div>

            {/* Dropdown body */}
            {open && (
                <div className=" w-full mt-1 bg-white border rounded-md shadow z-10">
                    {/* Search input */}
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-1/2 p-2 m-2 border rounded-md focus:outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />



                        <img src={excel} className="h-[30px]  pr-6" />
                    </div>

                    {/* Options */}
                    <ul className=" overflow-x-auto w-full">

                        <table className="w-full">
                            <thead className="border-[1px] bg-blue-400">
                                <tr className="p-2 sm:p-5 ">
                                    <th className="p-5">
                                        Sr. No.
                                    </th>
                                    <th className="p-5">
                                        Transaction Id
                                    </th>
                                    <th className="p-5">
                                        Amount
                                    </th>
                                    <th className="p-5">
                                        Refund
                                    </th>
                                    <th className="p-5">
                                        Status
                                    </th>
                                    <th className="p-5">
                                        R Amount
                                    </th>
                                    <th className="p-5">
                                        Paid At
                                    </th>
                                    <th className="p-5">
                                        Note
                                    </th>
                                    <th className="p-5">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400 text-[15px]">
                                <tr>
                                    <td className="p-5">
                                        1
                                    </td>
                                    <td className="p-5">
                                        wallet_f5q6ds5kv6
                                    </td>
                                    <td className="p-5">
                                        1
                                    </td>
                                    <td className="p-5">
                                        none
                                    </td>
                                    <td className="p-5">
                                        Captured
                                    </td>
                                    <td className="p-5">

                                    </td>
                                    <td className="p-5">
                                        28 August<br /> 2025
                                    </td>
                                    <td className="p-5">
                                        --
                                    </td>
                                    <td className="p-5">
                                        {/* action */}
                                        <img
                                            src={Note}
                                            alt="open notes"
                                            className="h-[35px] cursor-pointer hover:scale-110 transition "
                                            onClick={() => setShowNotes(true)}
                                        />

                                        {/* Notes component only when clicked */}
                                        {showNotes && (
                                            <div className="mt-2">
                                                <Notes />
                                            </div>
                                        )}


                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-5">
                                        2
                                    </td>
                                    <td className="p-5">
                                        wallet_x0vuwjm9fi
                                    </td>
                                    <td className="p-5">
                                        1
                                    </td>
                                    <td className="p-5">
                                        none
                                    </td>
                                    <td className="p-5">
                                        Captured
                                    </td>
                                    <td className="p-5">

                                    </td>
                                    <td className="p-5">
                                        28 August<br /> 2025
                                    </td>
                                    <td className="p-5">
                                        --
                                    </td>
                                    <td className="p-5">
                                        {/* action */}
                                         <img
                                            src={Note}
                                            alt="open notes"
                                            className="h-[35px] cursor-pointer hover:scale-110 transition "
                                            onClick={() => setShowNotes(true)}
                                        />

                                        {/* Notes component only when clicked */}
                                        {showNotes && (
                                            <div className="mt-2">
                                                <Notes />
                                            </div>
                                        )}


                                    </td>
                                </tr>
                            </tbody>
                             <div className="gap-7 flex justify-center items-center p-3.5">

                        <div className="w-[100px]">
                            Rows per Page :</div> 
                        <select defaultValue={20} >
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>

                        <div className="w-[120px]">
                            1-2 of 2 
                        </div>

                        <div>
                            <i class="fa-solid fa-sort-up"></i>
                        </div>

                        <div>
                            <i class="fa-solid fa-sort-down"></i>
                        </div>



                        </div>
                        </table>
                         

                    </ul>

                   
                </div>
            )}

            
        </div>
    );
}
