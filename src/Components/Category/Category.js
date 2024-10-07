import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CategoryData as initialCategoryData } from '../../Components/Data.js';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { checkAlert } from '../SweetAlerts/SweetAlerts.js';

export default function Category() {
    const [categories, setCategories] = useState(initialCategoryData)
    const [showForms, setShowForms] = useState(false)
    const [name, setName] = useState('')
    const [editor, setEditor] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)

    const onSubmit = () => {
        if (name && editor) {
            if (isEditing) {
                const updatedCategories = categories.map((category, index) =>
                    index === currentIndex
                        ? { name: name, editor: editor }
                        : category
                );
                setCategories(updatedCategories)
                setIsEditing(false)
            } else {

                const newCategory = {
                    name: name,
                    editor: editor
                };
                setCategories([...categories, newCategory])
            }

            setName('')
            setEditor('')
            setShowForms(false)
        }
    }

    const handleDelete = (id) => {
        if (isEditing) {
            checkAlert({
                title: 'Error',
                text: 'Please save your changes before deleting',
                icon: 'error'
            })
        } else {
            const updatedCategories = categories.filter((category, index) => index !== id)
            setCategories(updatedCategories)
        }
    }

    const handleEdit = (index) => {
        const categoryToEdit = categories[index]
        setName(categoryToEdit.name)
        setEditor(categoryToEdit.editor)
        setCurrentIndex(index)
        setIsEditing(true)
        setShowForms(true)
    }

    const handleShowForms = () => {
        setShowForms(!showForms);
        if (!isEditing) {
            setName('');
            setEditor('');
        }
    }

    return (
        <div className='p-7'>
            <div className='text-white flex justify-between p-4'>
                <div className='text-3xl font-bold'>Category</div>
                <div className='flex gap-2'>
                    <button
                        onClick={handleShowForms}
                        className='text-[12px] bg-[#24DBC6] h-[22px] px-2 rounded-md text-black font-bold mt-2'>
                        {isEditing ? "Edit Category" : "+Add Category"}
                    </button>
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
                        {isEditing ? "Update" : "Add"}
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
                            {categories.map((category, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#1B1B1B] h-[90px]" : "bg-[#28282A] h-[90px]"} `}>
                                    <td className='font-bold text-sm pl-7'>{category.name}</td>
                                    <td className='font-bold text-sm'>{category.editor}</td>
                                    <td>
                                        <div className='flex gap-2'>
                                            <FaEdit
                                                onClick={() => handleEdit(index)}
                                                className='cursor-pointer text-[#25B9A6] text-xl' />
                                            <MdDelete
                                                onClick={() => handleDelete(index)}
                                                className='text-[#A41E31] cursor-pointer font-extrabold text-xl' />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
