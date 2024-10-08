import React from 'react';
import UserImage from '../Static/User.jpg';
import { FaHome } from "react-icons/fa";
import { BsFillCalendar2CheckFill, BsCalendar2Fill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, setActivePage, onLogout }) {
    const navigate = useNavigate();

    const handleNavigation = (page, route) => {
        setActivePage(page);
        navigate(route);
    };

    const handleLogoutClick = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div className={`transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-auto`}>
            <div className="flex flex-col items-center">
                <img src={UserImage} alt="User" className="w-[100px] h-[100px] rounded-full" />
                <label className="text-[#A4A4A4] mt-5 text-lg font-semibold">Abdullah</label>
            </div>

            <div className='mr-10 lg:ml-[-12px]'>
                <div className='flex mt-[60px] gap-3 text-xl p-4 group hover:bg-[#28282A] font-semibold rounded-lg xl:w-[160px] lg:w-[150px] md:w-[120px]'>
                    <div className='flex items-center gap-3' onClick={() => handleNavigation('dashboard', '/home/dashboard')}>
                        <FaHome className='text-white mt-1 group-hover:text-[#24DBC6] cursor-pointer' />
                        <label className='text-white group-hover:text-[#24DBC6] cursor-pointer'>Home</label>
                    </div>
                </div>

                <div className='flex mt-3 gap-3 text-xl p-4 group hover:bg-[#28282A] font-semibold rounded-lg md:w-[130px] lg:w-[150px] xl:w-[160px]'>
                    <div className='flex items-center gap-3' onClick={() => handleNavigation('expenses', '/home/expenses')}>
                        <BsCalendar2Fill className='mt-1 text-white group-hover:text-[#24DBC6] cursor-pointer' />
                        <label className='text-white group-hover:text-[#24DBC6] cursor-pointer'>Expenses</label>
                    </div>
                </div>

                <div className='flex mt-3 gap-3 text-xl p-4 group hover:bg-[#28282A] font-semibold rounded-lg lg:w-[150px] xl:w-[160px] md:text-lg'>
                    <div className='flex items-center gap-3' onClick={() => handleNavigation('category', '/home/category')}>
                        <BiSolidCategory className='text-xl text-white group-hover:text-[#24DBC6] cursor-pointer ' />
                        <label className='text-white group-hover:text-[#24DBC6] cursor-pointer'>Category</label>
                    </div>
                </div>

                <div className='flex mt-[305px] gap-3 text-xl p-4 group font-semibold rounded-lg md:text-lg'>
                    <button onClick={handleLogoutClick} className='bg-[#28282A] rounded-lg w-[500px] h-[60px]'>
                        <span className='text-[#24DBC6] cursor-pointer'>LOGOUT</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
