import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className='flex flex-col gap-4'>
                    <img src={assets.logo} className='w-32 mb-5' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 text-lg'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600 text-lg'>
                        <li>Address: Hyderabad, Telangana</li>
                        <li>Phone: +91-9652304065</li>
                        <li>Email: jellaabhiram929@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <hr></hr>
                <p className='py-5 text-sm text-center'>Copyright 2024@mytalorzone.com - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
