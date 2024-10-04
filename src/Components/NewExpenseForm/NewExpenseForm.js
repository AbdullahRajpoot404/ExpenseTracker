import React from 'react';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { CategoryData, expensesData } from '../../Components/Data.js'
import { iconMaping } from '../../Components/Data.js';
export default function NewExpenseForm({ setActivePage }) {
    const [subject, setSubject] = useState('')
    const [merchant, setMerchant] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('Food')
    const [description, setDescription] = useState('')
    const [employee, setEmployee] = useState('')
    const [payment, setPayment] = useState('')
    const [selectedIcon, setSelectedIcon] = useState('')

    const handleIcon = () => {
        setSelectedIcon(iconMaping[category])
    }

    const currentdate = new Date()
    const currentMonth = currentdate.toLocaleString('default', { month: 'long' })
    const currentYear = currentdate.getFullYear()
    const report = `${currentMonth}_${currentYear}`


    const onSubmit = () => {
        if (subject === '' || merchant === '' || date === '' || amount === '' || category === '' || description === '' || employee === '' || payment === '') {
            alert('Please fill in all required fields')
        } else {
            const selectedIcon = iconMaping[category]
            const newExpense = {
                details: [
                    {
                        icon: selectedIcon,
                        date: date,
                        subject: subject,
                    }
                ],
                merchant: merchant,
                amount: amount,
                report: report,
                payment: payment,
                category: category,
                discription: description,
                employee: employee,
            }
            expensesData.push(newExpense)
            console.log(expensesData)
            setSubject('')
            setMerchant('')
            setDate('')
            setAmount('')
            setCategory('Food')
            setDescription('')
            setEmployee('')
            setPayment('')
        }


    }

    const navigate = useNavigate()
    const handleNavigation = (page, route) => {
        setActivePage(page)
        navigate(route)
    }
    return (
        <div className="mx-auto p-4 sm:p-6 md:p-8 text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-3xl font-bold">New Expense</h2>
                <button onClick={() => handleNavigation('expenses', '/home/expenses')} className="text-[#24D6C2] border border-[#464646] p-1 bg-[#28282A] rounded-md mt-2">
                    <RxCross2 />
                </button>
            </div>
            <hr className='border-t-1 border-[#363636]' />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[110px] md:gap-3 sm:gap-32 mt-[50px]">
                <div className="flex flex-col lg:w-[350px] xl:w-[500px] sm:w-full">
                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[143px]  text-[#9D9D9D]" >
                            Subject*
                        </label>
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full md:w-[525px] lg:w-[330px] xl:w-[370px] h-10 p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold  w-1/3 lg:w-[143px] text-[#9D9D9D]">
                            Merchant*
                        </label>
                        <input
                            id="merchant"
                            type="text"
                            onChange={(e) => setMerchant(e.target.value)}
                            value={merchant}
                            className="w-full md:w-[525px] lg:w-[330px] xl:w-[370px] h-10 p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[145px]   text-[#9D9D9D]">
                            Date*
                        </label>
                        <input
                            id="date"
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            className="w-full h-10 md:w-[525px] lg:w-[330px] xl:w-[370px] p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>

                    <div className="mb-4 flex items-center gap-3">
                        <label className="block text-sm font-bold w-1/3 lg:w-[94px] xl:w-[128px] text-[#9D9D9D]">
                            Total*
                        </label>
                        <input
                            id="total"
                            type="text"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            className="w-9/12 xl:w-[200px] lg:w-[152px] md:w-[400px] sm:w-[200px] h-10 p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                        <select
                            id="currency"
                            className="w-4/12 lg:w-[80px] xl:w-[149px] sm:w-[100px] h-10 p-2 bg-[#383838] rounded-md border-none"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>

                    <div className="mb-4 flex items-center xl:ml-[139px] lg:ml-[108px] md:ml-[125px]">
                        <label className=" inline-flex items-center">
                            <input id="custom-checkbox" type="checkbox" className=" outline-none appearance-none w-5 h-5  border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative  checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']" />
                            <span className="ml-2 font-bold text-[#9D9D9D]" >Reimbursable</span>
                        </label>
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[155px] xl:w-[137px] text-[#9D9D9D]">
                            Category*
                        </label>
                        <select
                            id="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="w-full lg:w-[330px] xl:w-[362px] h-10 p-2 bg-[#383838] rounded-md border-none"
                        >
                            {CategoryData.map((category, index) => (
                                <option key={index}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[155px] xl:w-[137px]  text-[#9D9D9D] ">
                            Description
                        </label>
                        <textarea
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="w-full h-20 p-3 lg:w-[330px] xl:w-[362px]  bg-[#383838] rounded-md border-none"
                        ></textarea>
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[155px] xl:w-[137px] text-[#9D9D9D]">
                            Employee*
                        </label>
                        <input
                            id="employee"
                            onChange={(e) => setEmployee(e.target.value)}
                            value={employee}
                            type="text"
                            className="w-full h-10 p-3 lg:w-[330px] xl:w-[362px] bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>


                    <div className="mb-4 flex items-center ">
                        <label className="inline-flex items-center w-2/5 md:w-[130px] lg:w-[116px] xl:w-[140px]">
                            <span className=" font-bold text-[#9D9D9D] lg:w-[142px] ">Payment</span>
                        </label>

                        <div className=" flex gap-4 ml-[-3px] ">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    checked={payment === 'Credited'}
                                    onClick={() => setPayment('Credited')}
                                    className=" outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold">Credited</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    checked={payment === 'Debited'}
                                    onClick={() => setPayment('Debited')}
                                    className=" outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold">Debited</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center ">
                        <label className="inline-flex items-center w-2/5 md:w-[130px] lg:w-[116px] xl:w-[140px]">
                            <span className=" font-bold text-[#9D9D9D] lg:w-[142px] ">Add to report</span>
                        </label>

                        <div className=" flex gap-4 ml-[-3px] ">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className=" outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className=" outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold">No</span>
                            </label>
                        </div>
                    </div>




                </div>

                {/* Right side - File upload */}
                <div className="flex justify-center items-center rounded-lg border border-dashed border-[#383838]  h-[200px] md:h-[150px] lg:w-[300px] xl:w-auto lg:h-auto w-full bg-[#1B1B1B]">
                    <div className="text-center">
                        <span className="text-5xl cursor-pointer">+</span>
                        <p className='cursor-pointer font-semibold'>Upload an invoice</p>
                    </div>
                </div>
            </div>

            {/* Save buttons */}
            <div className="flex justify-end mt-6 gap-4 mr-2">
                <button className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gray-600 rounded-md hover:bg-gray-500">
                    Save draft
                </button>
                <button className="px-4 py-2 sm:px-6 sm:py-2.5 bg-teal-500 rounded-md hover:bg-teal-400" onClick={() => { onSubmit(); }}>
                    Save
                </button>
            </div>
        </div>
    );
}
