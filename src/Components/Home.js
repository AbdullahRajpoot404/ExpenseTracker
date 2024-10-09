import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Expenses from './Expenses/Expenses';
import Trips from './Trips/Trips';
import Approvals from './Approvals/Approvals';
import NewExpenseForm from './NewExpenseForm/NewExpenseForm';
import TripForm from './TripForm/TripForm';
import Category from './Category/Category';

export default function Home({ onLogout }) {
    const [isOpen, setIsOpen] = useState(true);
    const [activePage, setActivePage] = useState('dashboard'); // Default active page is dashboard

    const toggler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#1B1B1B] min-h-screen flex flex-col relative w-auto">
            <div className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 flex justify-end items-center">
                <GiHamburgerMenu
                    className="w-[40px] h-[40px] text-[#666666] cursor-pointer lg:hidden"
                    onClick={toggler}
                />
            </div>

            <div className="p-10 grid grid-cols-1 lg:grid-cols-12 flex-grow">
                {/* Sidebar */}
                <div className={`fixed sm:mt-5 top-0 left-0 h-full text-white transition-transform duration-300 lg:static lg:col-span-2 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                    <Sidebar
                        isOpen={isOpen}
                        setActivePage={setActivePage}
                        onLogout={onLogout}
                    />
                </div>

                {/* Main content */}
                <div className="col-span-1 lg:col-span-10 bg-black h-full min-h-[90vh] mb-2">
                    {activePage === 'dashboard' && <Dashboard setActivePage={setActivePage} />}
                    {activePage === 'expenses' && <Expenses setActivePage={setActivePage} />}
                    {activePage === 'trips' && <Trips setActivePage={setActivePage} />}
                    {activePage === 'approvals' && <Approvals />}
                    {activePage === 'newexpenseform' && <NewExpenseForm setActivePage={setActivePage} />}
                    {activePage === 'tripform' && <TripForm setActivePage={setActivePage} />}
                    {activePage === 'category' && <Category setActivePage={setActivePage} />}

                </div>
            </div>
        </div>

    );
}
