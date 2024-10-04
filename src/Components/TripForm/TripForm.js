import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { tripsData } from '../Data';
import { MdAirplanemodeActive } from "react-icons/md";
export default function TripForm({ setActivePage }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [purpose, setPurpose] = useState('');
    const [flight, setFlight] = useState('');
    const [depart, setDepart] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [destination, setDestination] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [budget, setBudget] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hotel, setHotel] = useState('');
    const [status, setStatus] = useState('Not Submitted');


    const currentdate = new Date()
    const currentMonth = currentdate.toLocaleString('default', { month: 'long' })
    const currentYear = currentdate.getFullYear()
    const report = `${currentMonth}_${currentYear}`

    const onSubmit = () => {
        "if (name && type && purpose && flight && depart && departDate && destination && returnDate && budget && checkIn && checkOut && Hotel) {"
        const newTrip = {
            details: [
                {
                    icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                    date: departDate,
                    destination: destination,
                }
            ],
            name: name,
            budget: budget,
            report: report,
            status: status,
            type: type,
            purpose: purpose,
            flight: flight,
            depart: depart,
            returnDate: returnDate,
            checkIn: checkIn,
            checkOut: checkOut,
            hotel: hotel

        }
        tripsData.push(newTrip)
        console.log(tripsData)
        setName('')
        setType('')
        setPurpose('')
        setFlight('')
        setDepart('')
        setDepartDate('')
        setDestination('')
        setReturnDate('')
        setBudget('')
        setCheckIn('')
        setCheckOut('')
        setHotel('')
        setStatus('Not Submitted')
    }
    // }

    const navigation = useNavigate();
    const handleNavigation = (page, route) => {
        navigation(route)
        setActivePage(page)
    }
    return (
        <div className="p-4 sm:p-6 md:p-8 text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">New Trip</h2>
                <button onClick={() => handleNavigation('trips', '/home/trips')} className="text-[#24D6C2] border border-[#464646] p-1 bg-[#28282A] rounded-md mt-2">
                    <RxCross2 />
                </button>
            </div>
            <hr className="border-t-1 border-gray-600 mb-6" />

            {/* Name, Type, Purpose */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                    <label className="block font-bold w-full sm:w-40 md:w-28 text-[#969696] ">Name*</label>
                    <input type="text"
                        className="w-full  sm:w-[96%] lg:w-2/5 h-10 bg-[#383838] p-3 rounded-md border-none outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 mt-4">
                    <label className="block font-bold w-full sm:w-[125px] md:w-[95px] lg:w-[113px] text-[#969696]">Type*</label>
                    <div className="flex flex-col lg:flex-row items-start sm:items-left lg:gap-4">
                        <label className="flex items-center ">
                            <input type="radio"
                                name="type"
                                className="form-radio bg-[#383838] mr-2 "
                                checked={type === 'domestic'}
                                onClick={() => setType('domestic')}
                            />
                            Domestic
                        </label>
                        <label className="flex items-center">
                            <input type="radio"
                                name="type"
                                className="form-radio bg-[#383838] mr-2 "
                                checked={type === 'international'}
                                onClick={() => setType('international')}
                            />
                            International
                        </label>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 mt-4">
                    <label className="block font-bold w-full sm:w-44 md:w-[118px] text-[#969696] ">Purpose*</label>
                    <textarea
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full lg:w-2/5 h-20 bg-[#383838] p-3 rounded-md border-none outline-none"></textarea>
                </div>
            </div>


            {/* Itinerary Section */}
            <h3 className="font-bold text-xl mb-4 text-[#969696]">ITINERARY</h3>
            <hr className="border-t-1 border-gray-600 mb-6" />
            <div className="space-y-4">
                {/* Flight and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 ">
                    <label className="block font-bold w-full sm:w-[127px] md:w-[103px] lg:w-28 text-[#969696]">Flight*</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <label className="flex items-center">
                            <input type="radio"
                                name="flight"
                                className="form-radio bg-[#383838] mr-2"
                                onChange={(e) => setFlight(e.target.value)}
                                value={'one-way'}
                                checked={flight === 'one-way'}
                            />

                            One-way
                        </label>
                        <label className="flex items-center">
                            <input type="radio"
                                name="flight"
                                value={'roundtrip'}
                                className="form-radio bg-[#383838] mr-2"
                                onChange={(e) => setFlight(e.target.value)}
                                checked={flight === 'roundtrip'}
                            />
                            Roundtrip
                        </label>
                    </div>
                </div>

                {/* Depart From and Destination */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 sm:gap-4 lg:w-[860px] xl:w-[1500px]">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                        <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-28 xl:w-[110px]  text-[#969696]">Depart from*</label>
                        <input type="text"
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            className="w-full sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[595px] h-10 bg-[#383838] p-3 rounded-md border-none outline-none" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 lg:w-[350px]">
                        <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-12 lg:ml-[-19px] text-[#969696]">Date*</label>
                        <input type="date"
                            value={departDate}
                            onChange={(e) => setDepartDate(e.target.value)}
                            className="w-full sm:w-[70%] md:w-[80%] lg:w-[50%] h-10 bg-[#383838] p-3 rounded-md border-none outline-none" />
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 sm:gap-4 lg:w-[860px] xl:w-[1500px]">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                        <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-28 text-[#969696]">Destination*</label>
                        <input type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[595px] h-10 bg-[#383838] p-3 rounded-md border-none outline-none" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 lg:w-[350px]">
                        <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-12 lg:ml-[-19px] text-[#969696]">Date*</label>
                        <input type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full sm:w-[70%] md:w-[80%] lg:w-[50%]  h-10 bg-[#383838] p-3 rounded-md border-none outline-none" />
                    </div>
                </div>

                {/* Budget Limit */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                        <label className="block font-bold w-full sm:w-[175px] md:w-[103px] lg:w-28 text-[#969696]">Budget Limit*</label>
                        <input type="text"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full lg:w-[292px] md:w-[80%] sm:w-[98%] xl:w-[595px] h-10 bg-[#383838] p-3 rounded-md border-none outline-none" />
                    </div>
                </div>
            </div>

            {/* Accommodation */}
            <div className="flex flex-col gap-4 sm:gap-4 lg:gap-4">
                {/* Check-in */}
                <h3 className="font-bold text-xl mt-8 mb-4 text-[#969696]">ACCOMMODATION</h3>
                <div className="flex flex-col gap-4 lg:flex-col md:flex-col w-full">
                    <div className="flex flex-col sm:flex-row lg:flex-col md:flex-col w-full gap-4 xl:w-[700px]">
                        {/* Check-in */}
                        <div className="flex flex-col sm:flex-row lg:flex-row sm:items-center lg:items-center w-full">
                            <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-28 xl:w-30 mb-2 sm:mb-0 text-[#969696]">
                                Check-in*
                            </label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="w-full sm:w-[80%] md:w-[80%] lg:w-[300px] xl:w-[86%] h-10 bg-[#383838] p-3 rounded-md border-none outline-none"
                            />
                        </div>

                        {/* Check-out */}
                        <div className="flex flex-col sm:flex-row lg:flex-row sm:items-center lg:items-center w-full">
                            <label className="block font-bold w-full sm:w-[30%] md:w-[103px] lg:w-28 xl:w-30 mb-2 sm:mb-0 text-[#969696]">
                                Check-out*
                            </label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="w-full sm:w-[80%] md:w-[80%] lg:w-[300px] xl:w-[86%] h-10 bg-[#383838] p-3 rounded-md border-none outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Hotel */}
            <div className="flex flex-col sm:flex-row sm:items-center mt-4">
                <label className="block font-bold w-full sm:w-[166px] md:w-[103px] lg:w-[112px]  text-[#969696]">Hotel*</label>
                <input
                    type="text"
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                    className="w-full sm:w-[85%] md:w-[80%] lg:w-[302px] xl:w-[587px] h-10 bg-[#383838] p-3 rounded-md border-none outline-none"
                />
            </div>

            {/* Save Buttons */}
            <div className="flex justify-end mt-6 gap-4 flex-col sm:flex-row">
                {/* <button className="px-6 py-2 bg-gray-600 rounded-md hover:bg-gray-500 w-full sm:w-auto">Save draft</button> */}
                <button className="px-6 py-2 bg-teal-500 rounded-md hover:bg-teal-400 w-full sm:w-auto" onClick={onSubmit}>Save</button>
            </div>
        </div>
    );
}