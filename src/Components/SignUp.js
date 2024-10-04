import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginBg from '../Static/LoginBg.jfif'
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import registerUser from './RegisterUser';
export default function SignUp() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const saveUser = (newuser) => {
        let user = JSON.parse(localStorage.getItem('users')) || []
        user.push(newuser)
        localStorage.setItem('users', JSON.stringify(user))
    }


    const onSubmit = (data) => {
        const { firstName, lastName, email, password } = data

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        registerUser.push(newUser)
        saveUser(newUser)

        navigate('/')
    }
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${LoginBg})` }}>
            <div className='flex items-center justify-center h-screen '>
                <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-[#3eb5a7] p-8 rounded-xl ' >
                    <h1 className='text-3xl text-[#24DBC6] font-bold mb-9 '>Sign Up</h1>
                    <hr className='mb-3' />

                    <label className='text-[#9D9C9D] font-bold text-base'>First Name:</label><br></br>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        {...register('firstName', { required: 'First name is required' })}
                        className='bg-[#3C3C3C] text-white border-none rounded md:w-[35vw] p-2 mt-2 mb-3 focus:outline-none'
                    />
                    {errors.firstName && <p className="text-red-500 text-xs font-bold italic">{errors.firstName.message}</p>}
                    <br></br>

                    <label className='text-[#9D9C9D] font-bold text-base'>Last Name:</label><br></br>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        {...register('lastName', { required: 'Last name is required' })}
                        className='bg-[#3C3C3C] text-white  rounded md:w-[35vw] p-2 mt-2 mb-3 focus:outline-none'
                    />
                    {errors.lastName && <p className="text-red-500 font-bold text-xs italic">{errors.lastName.message}</p>}
                    <br></br>

                    <label className='text-[#9D9C9D] font-bold text-base'>Email:</label><br></br>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', { required: 'Email is required' })}
                        className='bg-[#3C3C3C] text-white border-none rounded md:w-[35vw] p-2 mt-2 mb-3 focus:outline-none'
                    />
                    {errors.email && <p className="text-red-500 font-bold text-xs italic">{errors.email.message}</p>}
                    <br></br>

                    <label className='text-[#9D9C9D] font-bold text-base'>Password:</label><br></br>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', { required: 'Password is required' })}
                        className='bg-[#3C3C3C] text-white border-none rounded md:w-[35vw] p-2 mt-2 focus:outline-none mb-3'
                    />
                    {errors.password && <p className="text-red-500 font-bold text-xs italic">{errors.password.message}</p>}
                    <br></br>

                    <label className='text-[#9D9C9D] text-sm '>Already a member?
                        <Link to="/" className='text-[#24DBC6] font-bold cursor-pointer text-sm'> Login</Link>
                    </label><br></br>

                    <button className='bg-[#24DBC6] text-black border-none rounded w-full md:w-[35vw] p-3 mt-7 font-bold text-lg'
                        type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>

    )
}

