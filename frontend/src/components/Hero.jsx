import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* left */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex item-center gap-2'>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                        <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='text-3xl md:text-5xl font-bold leading-relaxed'>New Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base font-semibold text-[#414141]'>Shop Now</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* right */}
            <img src={assets.hero_img} className='w-full sm:w-1/2 object-cover' alt="" />
        </div>
    )
}

export default Hero
