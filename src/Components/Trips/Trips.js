import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { tripsData } from '../../Components/Data.js';
import { useNavigate } from 'react-router-dom';
import './Trip.css'
export default function Trips({ setActivePage }) {
    const navigate = useNavigate();
    const handleNavigation = (page, route) => {
        setActivePage(page)
        navigate(route)
    }
    return (
        <>
            <div className='p-7'>
                <div className='text-white flex justify-between p-4'>
                    <div className='text-3xl font-bold'>Trips</div>
                    <div className='flex gap-2'>
                        <button onClick={() => handleNavigation('tripform', '/home/tripform')} className='text-[12px] bg-[#24DBC6] h-[22px] px-2 rounded-md text-black font-bold mt-2'>+New Trip</button>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><FaFilter /></button>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><IoFilter /></button>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><HiOutlineDotsHorizontal /></button>
                    </div>
                </div >
                <hr className='border-t-1 border-[#363636]' />

                <div className='grid grid-cols-12'>
                    <div className='col-span-12 overflow-y-auto max-h-[700px] scrollbar-thin'>
                        <table className='w-full text-left'>
                            <thead className='text-[#9D9D9D] h-[50px]'>
                                <tr>
                                    <th className='text-center'>
                                        <input id="custom-checkbox" type="checkbox" className="appearance-none w-5 h-5 border-2 border-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative  checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']" />
                                    </th>
                                    <th>DETAILS</th>
                                    <th>MOVIE</th>
                                    <th>AMOUNT</th>
                                    <th>REPORT</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody className='text-white'>
                                {tripsData.map((trip, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-[#1B1B1B] h-[90px]" : "bg-[#28282A] h-[90px]"}`}>
                                        <td className='text-center'>
                                            <input id="custom-checkbox" type="checkbox" className="appearance-none w-5 h-5 border-2 border-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative  checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']" />
                                        </td>
                                        <td>
                                            <div className='flex items-center text-white gap-2'>
                                                <div className='bg-[#222354] rounded-full p-2'>
                                                    {trip.details && trip.details[0]?.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[#A1A1A1] text-[12px] font-bold">
                                                        {trip.details && trip.details[0]?.date}
                                                    </p>
                                                    <p className="text-sm font-bold">
                                                        {trip.details && trip.details[0]?.destination}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-bold text-sm'>{trip.name}</td>
                                        <td className='font-bold text-sm'>{trip.budget}</td>
                                        <td className='font-bold text-sm'>{trip.report}</td>
                                        <td>
                                            <button className='bg-[#891D5D] text-[11px] text-white px-2 py-1 rounded-3xl  font-bold'>
                                                {trip.status}
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}
