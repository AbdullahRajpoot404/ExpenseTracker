import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import registerUser from './RegisterUser';
import LoginBg from '../Static/LoginBg.jfif'
import { useForm } from 'react-hook-form';
import { checkAlert } from './SweetAlerts/SweetAlerts';
export default function Login({ onLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleLogin = (data, e) => {
        e.preventDefault()


        const { email, password } = data

        const users = JSON.parse(localStorage.getItem('users')) || [];


        const user = users.find((user) => user.email === email && user.password === password)
        if (user) {
            onLogin()
            navigate('/home')
        } else {
            checkAlert({
                title: 'Error',
                text: 'Invalid email or password',
                icon: 'error'
            })
        }
    };
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${LoginBg})` }}>
            <div className='flex items-center justify-center h-screen '>
                <form onSubmit={handleSubmit(handleLogin)} className='border-2 border-[#3eb5a7] p-8 rounded-xl'>
                    <h1 className='text-3xl text-[#24DBC6] font-bold mb-9 '>Login</h1>
                    <hr className='mb-3' />
                    <label className='text-[#9D9C9D] font-bold text-base'>Email:</label><br></br>
                    <input type="email"
                        name="email"
                        {...register('email', { required: 'Email is required' })}
                        placeholder="Enter your email"
                        className='bg-[#3C3C3C] text-white border-none rounded md:w-[35vw] p-2 mt-2 mb-3 focus:outline-none'
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold italic">{errors.email.message}</p>}
                    <br></br>
                    <label className='text-[#9D9C9D] font-bold text-base'>Password:</label><br></br>
                    <input type="password"
                        placeholder="Enter your Password"
                        {...register('password', { required: 'Password is required' })}
                        className='bg-[#3C3C3C] text-white border-none rounded md:w-[35vw] p-2 mt-2 focus:outline-none mb-3'
                    />
                    {errors.password && <p className="text-red-500 text-xs font-bold italic">{errors.password.message}</p>}
                    <br></br>

                    <label className='text-[#9D9C9D] text-sm '>Don't have an account?
                        <Link to="/signup" className='text-[#24DBC6] font-bold cursor-pointer text-sm'> Sign Up</Link>
                    </label><br></br>

                    <button className='bg-[#24DBC6] text-black border-none rounded w-full md:w-[35vw] p-3 mt-7 font-bold text-lg'
                        type='submit'
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>

    )
}
