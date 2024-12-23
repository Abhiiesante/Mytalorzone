import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSumbitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post("https://mytalorzone-backend.vercel.app/", { name, email, password });
                console.log(response.data);
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    navigate('/login');
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post("https://mytalorzone-backend.vercel.app/", { email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);

                } else {
                    toast.error(response.data.message);
                }
            }

        } catch (err) {
            console.log(err);
            toast.error('Something went wrong');
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])
    return (
        <form onSubmit={onSumbitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Login' ? '' : <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Name'
                className='w-full border px-3 py-2 border-gray-800'
                required
            />}
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder='Email'
                className='w-full border px-3 py-2 border-gray-800'
                required
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
