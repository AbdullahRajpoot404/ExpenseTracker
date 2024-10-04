import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { RiBillFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { teamSpending, dayToDayExpense } from '../Components/Data.js'
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

export default function Dashboard() {

    const cards = [
        { title: "New expense", icon: <PiShoppingBagOpenFill />, bgColor: "bg-[#6E2651]", color: "text-[#EE1898]" },
        { title: "Add receipt", icon: <RiBillFill />, bgColor: "bg-[#222354]", color: "text-[#BF9CF7]" },
        { title: "Create report", icon: <BiSolidReport />, bgColor: "bg-[#154241]", color: "text-[#24DBC6]" },
        { title: "Create trip", icon: <IoMdAirplane />, bgColor: "bg-[#672A3B]", color: "text-[#D8001F]" },
    ];
    return (
        <div className='text-white bg-black h-[103%] p-5 rounded-xl '>
            <div className='p-7 '>
                <div className='grid grid-cols-12 gap-3 '>
                    <div className='col-span-12 md:col-span-5 border-2 border-[#363636] rounded-md bg-[#1B1B1B] ' >
                        <h3 className='font-bold text-md p-2 ml-4'>Pending Task</h3>
                        <hr className="border-t-1 border-[#363636]" />
                        <div className='overflow-x-auto'>


                            <table className="table-auto w-full text-md ">
                                <tbody>
                                    <tr className="flex justify-between items-center mt-3">
                                        <td className="flex items-center space-x-2 ml-4 gap-3">
                                            <span className="text-purple-500 text-lg "><FaRegClock /></span>
                                            <span className='font-semibold  text-[#909090]'>New Trip Registered</span>
                                        </td>
                                        <td className="text-right mr-3 font-semibold text-[#909090]">1</td>
                                    </tr>

                                    <tr className="flex justify-between items-center mt-2 text-lg">
                                        <td className="flex items-center space-x-2 ml-4 gap-3">
                                            <span className="text-purple-500 text-lg "><IoMdAirplane /></span>
                                            <span className='font-semibold  text-[#909090]'>Unreported Expenses</span>
                                        </td>
                                        <td className="text-right mr-3 font-semibold text-[#909090]">4</td>
                                    </tr>


                                    <tr className="flex justify-between items-center mt-2 text-lg">
                                        <td className="flex items-center space-x-2 ml-4 gap-3">
                                            <span className="text-purple-500 text-lg "><MdOutlineShoppingCartCheckout /></span>
                                            <span className='font-semibold  text-[#909090]'>Upcoming Expenses</span>
                                        </td>
                                        <td className="text-right mr-3 font-semibold text-[#909090]">5</td>
                                    </tr>

                                    <tr className="flex justify-between items-center mt-2 text-lg">
                                        <td className="flex items-center space-x-2 ml-4 gap-3">
                                            <span className="text-purple-500 text-lg "><AiOutlineDollarCircle /></span>
                                            <span className='font-semibold  text-[#909090]'>Pending Approvals</span>
                                        </td>
                                        <td className="text-right mr-3 font-semibold text-[#909090]">5</td>
                                    </tr>


                                    <tr className="flex justify-between items-center mt-2 mb-3 text-lg">
                                        <td className="flex items-center space-x-2 ml-4 gap-3">
                                            <span className="text-purple-500 text-lg "><BsCashStack /></span>
                                            <span className='font-semibold  text-[#909090]'>Unreported Advances</span>
                                        </td>
                                        <td className="text-right mr-3 font-semibold text-[#909090]">$0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 border-2 border-[#363636] rounded-md bg-[#1B1B1B]">
                        <h3 className="font-bold text-md p-2 ml-4">Pending Task</h3>
                        <hr className="border-t-1 border-[#363636]" />
                        <div className="px-4 overflow-x-auto">
                            <table className="w-full table-auto mt-3">
                                <thead>
                                    <tr className="text-[#9D9C9D] font-bold text-sm">
                                        <th className="text-left">Subject</th>
                                        <th className="text-left">Employee</th>
                                        <th className="text-center">Team</th>
                                        <th className="text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[#9D9C9D]">
                                        <td className="font-semibold pt-1">Office Supplies</td>
                                        <td className="font-semibold pt-1">John Smith</td>
                                        <td className="text-center pt-1">
                                            <span className="bg-purple-300 text-purple-700 px-2 rounded-full text-sm">Marketing</span>
                                        </td>
                                        <td className="text-right font-semibold pt-1">€150.00</td>
                                    </tr>

                                    <tr className="text-[#9D9C9D]">
                                        <td className="font-semibold pt-1">Office Supplies</td>
                                        <td className="font-semibold pt-1">John Smith</td>
                                        <td className="text-center pt-1">
                                            <span className="bg-purple-300 text-purple-700 px-2 rounded-full text-sm">Marketing</span>
                                        </td>
                                        <td className="text-right font-semibold pt-1">€150.00</td>
                                    </tr>

                                    <tr className="text-[#9D9C9D]">
                                        <td className="font-semibold pt-1">Office Supplies</td>
                                        <td className="font-semibold pt-1">John Smith</td>
                                        <td className="text-center pt-1">
                                            <span className="bg-purple-300 text-purple-700 px-2 rounded-full text-sm">Marketing</span>
                                        </td>
                                        <td className="text-right font-semibold pt-1 ">€150.00</td>
                                    </tr>

                                    <tr className="text-[#9D9C9D]">
                                        <td className="font-semibold pt-1">Office Supplies</td>
                                        <td className="font-semibold pt-1">John Smith</td>
                                        <td className="text-center pt-1">
                                            <span className="bg-purple-300 text-purple-700 px-2 rounded-full text-sm">Marketing</span>
                                        </td>
                                        <td className="text-right font-semibold pt-1">€150.00</td>
                                    </tr>

                                    <tr className="text-[#9D9C9D]">
                                        <td className="font-semibold pt-1">Office Supplies</td>
                                        <td className="font-semibold pt-1">John Smith</td>
                                        <td className="text-center pt-1">
                                            <span className="bg-purple-300 text-purple-700 px-2 rounded-full text-sm">Marketing</span>
                                        </td>
                                        <td className="text-right font-semibold pt-1">€150.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            {/* ------------------------------Row 2---------------------------- */}
            <div className='ml-6 mr-6'>
                <div className=" text-white  rounded-lg shadow-lg w-full border-2 border-[#363636] bg-[#1B1B1B]">
                    <h2 className="text-md font-bold p-2 ml-3 ">Quick Access</h2>
                    <hr className="border-t-1 border-[#363636]" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="flex items-center justify-center p-4">
                                <div className='bg-[#363636] rounded-md p-5 flex items-center space-x-4'>
                                    <div className={`text-white ${card.bgColor} rounded-full p-2 ${card.color}`}>
                                        {card.icon}
                                    </div>
                                    <span className="text-white font-semibold">+{card.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --------------------------------------Charts-1------------------------------------- */}
            <div className='ml-6 mr-6 mt-7'>
                <div className="text-white rounded-lg shadow-lg w-full border-2 border-[#363636] bg-[#1B1B1B]">
                    <h2 className="text-md font-bold p-2 ml-3">Quick Access</h2>
                    <hr className="border-t-1 border-[#363636]" />
                    <div className='grid grid-cols-12 '>
                        {/* First Chart */}
                        <div className='col-span-12 md:col-span-6  p-3 border-r-2 border-[#363636]'>
                            <p className='text-sm font-semibold ml-3 mb-2'>Team spending trend</p>
                            <div className='bg-[#363636] rounded-md p-2 ml-3 mr-3'>
                                <ResponsiveContainer width="100%" height={182}>
                                    <BarChart data={teamSpending}>
                                        <XAxis dataKey="name" fontWeight={600} fontSize={13} />
                                        <YAxis
                                            tickCount={teamSpending.length}
                                            fontWeight={600}
                                            fontSize={13}
                                            tickFormatter={(value) => {
                                                if (value >= 1000) {
                                                    return `${(value / 1000).toFixed(0)}k`;
                                                }
                                                return value;
                                            }}
                                        />
                                        <Bar dataKey="amount" barSize={20}>
                                            {teamSpending.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.amount < 40000 ? '#A0F0E8' : (entry.amount < 80000 ? '#66D9C8' : '#24DBC6')}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Second Chart */}
                        <div className='col-span-12 md:col-span-6 p-3 mb-4'>
                            <p className='text-sm font-semibold ml-3 mb-2'>Day to day expenses</p>
                            <div className='bg-[#363636] rounded-md p-2 ml-3 mr-3'>
                                <ResponsiveContainer width="100%" height={182}>
                                    <BarChart data={dayToDayExpense}>
                                        <XAxis dataKey="name" fontWeight={600} fontSize={13} />
                                        <YAxis
                                            tickCount={dayToDayExpense.length}
                                            fontWeight={600}
                                            fontSize={13}
                                            tickFormatter={(value) => `${value}%`}
                                        />
                                        <Bar dataKey="percentage" barSize={20}>
                                            {dayToDayExpense.map((entry, index) => (  // Use dayToDayExpense here
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        entry.percentage < 40
                                                            ? '#7525ED'
                                                            : (entry.percentage < 70
                                                                ? '#A470F4'
                                                                : '#5816DF')
                                                    }
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
