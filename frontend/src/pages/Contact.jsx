import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col  justify-center md:flex-row gap-10 mb-20'>
                <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>Hyderabad <br />Telangana</p>
                    <p>Tel: (+91) 56278-98763 <br />email: jadmin@mytarolzone.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at Mytarolzone</p>
                    <p className='text-gray-500'>Learn more about us</p>
                    <p></p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default Contact
