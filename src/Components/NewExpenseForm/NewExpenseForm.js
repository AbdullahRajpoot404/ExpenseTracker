import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { CategoryData, expensesData } from '../../Components/Data.js';
import { iconMaping } from '../../Components/Data.js';
import { checkAlert } from '../SweetAlerts/SweetAlerts.js';

export default function NewExpenseForm({ setActivePage }) {
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');
    const [payment, setPayment] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('');
    const [image, setImage] = useState(null); // State to store the image file

    const handleIcon = () => {
        setSelectedIcon(iconMaping[category]);
    };

    const currentdate = new Date();
    const currentMonth = currentdate.toLocaleString('default', { month: 'long' });
    const currentYear = currentdate.getFullYear();
    const report = `${currentMonth}_${currentYear}`;

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            };
            reader.readAsDataURL(file)
        }
    };

    const onSubmit = () => {
        if (subject === '' || date === '' || amount === '' || category === '' || payment === '' || image === null) {
            checkAlert({
                title: 'Incomplete Form ',
                text: 'Please fill all the fields',
                icon: 'error'
            })
        } else {
            const selectedIcon = iconMaping[category];
            const newExpense = {
                details: [
                    {
                        icon: selectedIcon,
                        date: date,
                        subject: subject,
                    }
                ],
                amount: amount,
                report: report,
                payment: payment,
                category: category,
                image: image,
            };

            const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || []
            const updatedExpenses = [...existingExpenses, newExpense];
            localStorage.setItem('expensesData', JSON.stringify(updatedExpenses))

            expensesData.push(newExpense)
            console.log(expensesData)

            setSubject('')
            setDate('')
            setAmount('')
            setCategory('Food')
            setPayment('')
            setImage(null)
        }
    };

    const navigate = useNavigate();
    const handleNavigation = (page, route) => {
        setActivePage(page);
        navigate(route);
    };

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
                        <label className="block text-sm font-bold w-1/3 lg:w-[145px] text-[#9D9D9D] mt-5">
                            Date*
                        </label>
                        <input
                            id="date"
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            className="w-full h-10 md:w-[525px] lg:w-[330px] xl:w-[370px] mt-5 p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>


                    <div className="mb-4 flex items-center gap-3">
                        <label className="block text-sm font-bold w-1/3 lg:w-[94px] xl:w-[128px] text-[#9D9D9D] mt-5">
                            Total*
                        </label>
                        <input
                            id="total"
                            type="text"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            className="w-full h-10 md:w-[525px] lg:w-[330px] xl:w-[370px] mt-5 p-3 bg-[#383838] rounded-md border-none outline-none"
                        />
                    </div>


                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-bold w-1/3 lg:w-[155px] xl:w-[137px] text-[#9D9D9D] mt-5">
                            Category*
                        </label>
                        <select
                            id="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="w-full lg:w-[330px] xl:w-[362px] h-10 p-2 bg-[#383838] rounded-md border-none mt-5"
                        >
                            {CategoryData.map((category, index) => (
                                <option key={index}>{category.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className="mb-4 flex items-center">
                        <label className="inline-flex items-center w-2/5 md:w-[130px] lg:w-[116px] xl:w-[140px] mt-5">
                            <span className=" font-bold text-[#9D9D9D] lg:w-[142px]">Payment</span>
                        </label>

                        <div className="flex gap-4 ml-[-3px]">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    checked={payment === 'Credited'}
                                    onClick={() => setPayment('Credited')}
                                    className="mt-5 outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold mt-5">Credited</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    checked={payment === 'Debited'}
                                    onClick={() => setPayment('Debited')}
                                    className="mt-5 outline-none appearance-none w-5 h-5 border-2 border-[#666666] bg-[#666666] rounded-md cursor-pointer checked:bg-[#666666] checked:border-transparent focus:outline-none relative checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-green-500 checked:before:content-['✓']"
                                />
                                <span className="ml-2 font-semibold mt-5">Debited</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right side image upload */}
                <div className="flex justify-center items-center rounded-lg border border-dashed border-[#383838]  h-[200px] md:h-[150px] lg:w-[300px] xl:w-auto lg:h-auto w-full bg-[#1B1B1B]">
                    <div className="text-center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="fileUpload"
                        />
                        <label htmlFor="fileUpload" className="cursor-pointer text-5xl">+</label>
                        <p className='cursor-pointer font-semibold'>Upload Image</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4 mr-10">
                <button onClick={onSubmit} className="bg-[#24D6C2] w-[114px] h-[44px] text-black font-bold mt-[100px] lg:mt-[90px] rounded-lg">
                    Save
                </button>
            </div>
        </div>
    );
}
