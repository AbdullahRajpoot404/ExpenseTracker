import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { expensesData } from '../../Components/Data.js';
import { useNavigate } from 'react-router-dom';
import { checkAlert } from '../SweetAlerts/SweetAlerts.js';
import searchImg from '../../Static/search.png';


export default function Expenses({ setActivePage }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleNavigation = (page, route) => {
        setActivePage(page);
        navigate(route);
    };


    const filteredExpenses = searchQuery.length >= 3 ?
        expensesData.filter((expense) =>
            expense.details[0]?.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            expense.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            expense.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
            expense.report.toLowerCase().includes(searchQuery.toLowerCase()) ||
            expense.payment.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : expensesData;


    const totalAmount = expensesData.reduce((acc, expense) => acc + parseFloat(expense.amount), 0)

    const creditAmount = expensesData.reduce((acc, expense) =>
        expense.payment === 'Credited' ? acc + parseFloat(expense.amount) : acc, 0)

    const debitAmount = expensesData.reduce((acc, expense) =>
        expense.payment === 'Debited' ? acc + parseFloat(expense.amount) : acc, 0)
    return (
        <>
            <div className='p-7'>
                <div className='text-white flex justify-between p-4'>
                    <div className='text-3xl font-bold'>Expenses</div>
                    <div className='flex gap-2'>
                        <input
                            type="text"
                            className='border border-[#363636] px-2 text-[12px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B] outline-none'
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className='border border-[#363636] px-1 text-[13px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' >
                            <FaSearch />
                        </button>
                        <button
                            onClick={() => handleNavigation('newexpenseform', '/home/newexpenseform')}
                            className='text-[12px] bg-[#24DBC6] h-[22px] px-2 rounded-md text-black font-bold mt-2'>
                            + New expenses
                        </button>
                    </div>
                </div>
                <hr className='border-t-1 border-[#363636]' />

                <div className='grid grid-cols-12'>
                    <div className='col-span-12 w-full text-left max-h-[460px] overflow-y-auto scrollbar-thin'>
                        {filteredExpenses.length > 0 ? (
                            <table className='w-full text-left max-h-[500px] overflow-y-auto scrollbar-thin'>
                                <thead className='text-[#9D9D9D] h-[50px]'>
                                    <tr>
                                        <th className='text-center'>
                                            <input id="custom-checkbox" type="checkbox" className="appearance-none w-5 h-5 border-2 border-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative  checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']" />
                                        </th>
                                        <th>DETAILS</th>
                                        <th>CATEGORY</th>
                                        <th>AMOUNT</th>
                                        <th>REPORT</th>
                                        <th>PAYMENT</th>
                                    </tr>
                                </thead>
                                <tbody className='text-white'>
                                    {filteredExpenses.map((expense, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? "bg-[#1B1B1B] h-[90px]" : "bg-[#28282A] h-[90px]"}`}>
                                            <td className='text-center'>
                                                <input id="custom-checkbox" type="checkbox" className="appearance-none w-5 h-5 border-2 border-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative  checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']" />
                                            </td>
                                            <td>
                                                <div className='flex items-center text-white gap-2'>
                                                    <div className='bg-[#154241] rounded-full p-2'>
                                                        {expense.details && expense.details[0]?.icon}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-[#A1A1A1] text-[12px] font-bold">
                                                            {expense.details && expense.details[0]?.date}
                                                        </p>
                                                        <p className="text-sm font-bold">
                                                            {expense.details && expense.details[0]?.subject}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='font-bold text-sm'>{expense.category}</td>
                                            <td className='font-bold text-sm'>{expense.amount}</td>
                                            <td className='font-bold text-sm'>{expense.report}</td>
                                            <td>
                                                <button className='bg-[#891D5D] text-[11px] text-white px-2 py-1 rounded-3xl  font-bold w-[100px]'>
                                                    {expense.payment}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-white text-center font-bold text-xl mt-[70px]">
                                <img src={searchImg} alt="Search" className="mb-4" />
                                <h1 className="font-extrabold text-3xl text-[#35DCC6]">Task not found
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
                {filteredExpenses.length > 0 && (
                    <div className="bg-[#28282A] p-5 rounded-lg max-w-md ml-auto mt-8">
                        <h2 className="text-xl font-bold text-center border-b pb-2 mb-4 text-white">Expense Summary</h2>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-semibold">Credit</span>
                            <span className="font-semibold text-white">{creditAmount}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-semibold">Debit</span>
                            <span className="font-semibold text-white">{debitAmount}</span>
                        </div>
                        <div className="flex justify-between items-center border-t pt-2 mt-4">
                            <span className="text-lg font-bold text-white">Total</span>
                            <span className="text-lg font-bold text-white">{totalAmount}</span>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}
