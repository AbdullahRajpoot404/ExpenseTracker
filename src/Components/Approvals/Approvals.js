import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ApprovalsData } from '../../Components/Data.js';

import { AprovalPopUp } from '../../Components/SweetAlerts/SweetAlerts.js';
export default function Approvals() {
    return (
        <>
            <div className='p-7'>
                <div className='text-white flex justify-between p-4'>
                    <div className='text-3xl font-bold'>Approvals</div>
                    <div className='flex gap-2'>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><FaFilter /></button>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><IoFilter /></button>
                        <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><HiOutlineDotsHorizontal /></button>
                    </div>
                </div >
                <hr className='border-t-1 border-[#363636]' />

                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <table className='w-full text-left'>
                            <thead className='text-[#9D9D9D] h-[50px]'>
                                <tr>
                                    <th className="pl-6">OWNER</th>
                                    <th>CATEGORY</th>
                                    <th>AMOUNT</th>
                                    <th>FREQUENCY</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='text-white'>
                                {ApprovalsData.map((approvals, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-[#1B1B1B] h-[90px]" : "bg-[#28282A] h-[90px]"}`}>

                                        <td>
                                            <div className='flex items-center text-white gap-2'>
                                                <div className=' rounded-full p-2 ml-5 '>
                                                    {approvals.details && approvals.details[0]?.icon && (
                                                        <img
                                                            src={approvals.details[0].icon}
                                                            alt="Icon"
                                                            className="w-8 h-8 object-cover rounded-full"
                                                        />
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[#A1A1A1] text-[12px] font-bold">
                                                        {approvals.details && approvals.details[0]?.date}
                                                    </p>
                                                    <p className="text-sm font-bold">
                                                        {approvals.details && approvals.details[0]?.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <button className='bg-[#891D5D] w-[100px] text-[11px] text-white px-2 py-1 rounded-3xl  font-bold'>
                                                {approvals.catagory}
                                            </button></td>
                                        <td className='font-bold text-sm'>{approvals.amount}</td>
                                        <td className='font-bold text-sm'>{approvals.frequency}</td>
                                        <td>
                                            <div className='flex gap-4'>
                                                <MdOutlineRemoveRedEye
                                                    onClick={AprovalPopUp}
                                                    className='cursor-pointer' />
                                                <FaCheck className='text-[#24DBC6] cursor-pointer' />
                                                <RxCross1 className='text-[#A41E31] cursor-pointer' />
                                            </div>
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
