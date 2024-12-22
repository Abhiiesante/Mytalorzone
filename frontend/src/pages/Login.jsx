import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const onSumbitHandler = async (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSumbitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Login' ? '' : <input
                type="text"
                placeholder='Name'
                className='w-full border px-3 py-2 border-gray-800'
                required
            />}
            <input
                type="email"
                placeholder='Email'
                className='w-full border px-3 py-2 border-gray-800'
                required
            />
            <input
                type="password"
                placeholder='Password'
                className='w-full border px-3 py-2 border-gray-800'
                required
            />
            <div className='w-full flex justify-between text-sm mt-[-8px] cursor-pointer'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create an account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
                }
            </div>
            <button className='bg-black text-white py-3 px-6 mt-4 text-sm'>
                {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    )
}

export default Login
