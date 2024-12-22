import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex  flex-col md:flex-row gap-16'>
                <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aspernatur quaerat animi earum laboriosam obcaecati ipsam, eos porro cum placeat voluptatum est, libero ex. Quo sed voluptatum quasi deleniti recusandae?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis molestias deserunt debitis laboriosam expedita dolorum veniam perferendis fugit dolore sapiente recusandae, eum eveniet explicabo. Ex maxime nihil deserunt voluptatem?</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rel</p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row mn-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusantium hic dolorem nemo ea sint quia veniam omnis recusandae! Rerum, harum reiciendis rem aliquid veritatis consectetur delectus minima nisi sed!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusantium hic dolorem nemo ea sint quia veniam omnis recusandae! Rerum, harum reiciendis rem aliquid veritatis consectetur delectus minima nisi sed!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional customer service</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusantium hic dolorem nemo ea sint quia veniam omnis recusandae! Rerum, harum reiciendis rem aliquid veritatis consectetur delectus minima nisi sed!</p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default About
