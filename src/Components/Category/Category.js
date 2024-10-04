import React from 'react'
import { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CategoryData } from '../../Components/Data.js';

export default function Category() {
    const [showForms, setShowForms] = useState(false);
    const [name, setName] = useState('');
    const [editor, setEditor] = useState('');

    const onSubmit = () => {
        if (name && editor) {
            const newCategory = {
                name: name,
                editor: editor
            }
            CategoryData.push(newCategory)
            setName('')
            setEditor('')
        }
    }

    const handleShowForms = () => {
        setShowForms(!showForms);
    }
    return (
        <div className='p-7'>
            <div className='text-white flex justify-between p-4'>
                <div className='text-3xl font-bold'>Category</div>
                <div className='flex gap-2'>
                    <button
                        onClick={handleShowForms}
                        className='text-[12px] bg-[#24DBC6] h-[22px] px-2 rounded-md text-black font-bold mt-2'>+Add Category</button>
                    <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><IoFilter /></button>
                    <button className='border border-[#363636] px-1 text-[10px] rounded-md h-[22px] text-[#24DBC6] mt-2 font-bold bg-[#1B1B1B]' ><HiOutlineDotsHorizontal /></button>
                </div>
            </div >
            <hr className='border-t-1 border-[#363636]' />

            {showForms && (
                <div className='flex gap-4 p-4'>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Category Name'
                        className='bg-[#1B1B1B] text-white border border-[#363636] rounded-md px-2 py-1 w-[300px] h-10 outline-none'
                    />
                    <input
                        type='text'
                        name='editor'
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                        placeholder='Editor Name'
                        className='bg-[#1B1B1B] text-white border border-[#363636] rounded-md px-2 py-1 w-[300px] h-10 outline-none'
                    />
                    <button
                        className='bg-[#24DBC6] text-black font-bold px-4 rounded-md'
                        onClick={onSubmit}
                    >
                        Add
                    </button>
                </div>
            )}


            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    <table className='w-full text-left '>
                        <thead className='text-[#9D9D9D] h-[50px]'>
                            <tr>
                                <th className="pl-6">CATEGORY</th>
                                <th>EDITOR NAME</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {CategoryData.map((CategoryData, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#1B1B1B] h-[90px]" : "bg-[#28282A] h-[90px]"} `}>
                                    <td className='font-bold text-sm pl-7'>{CategoryData.name}</td>
                                    <td className='font-bold text-sm'>{CategoryData.editor}</td>
                                    <td>
                                        <div className='flex gap-2'>
                                            <MdOutlineRemoveRedEye className='cursor-pointer' />
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
    )
}
