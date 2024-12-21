import React from 'react'

const NewsletterBox = () => {
    const onSumbitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem Ipsum dummy text for priting </p>
            <form onSubmit={onSumbitHandler} className='w-full sm:w-1/2 mx-auto flex items-center gap-3 my-6 border pl-3'>
                <input type="email" placeholder='Enter your email address' className='w-full sm:flex-1 outline-none' required />
                <button type='submit' className='bg-black text-white py-4 px-10 mt-3 text-xs'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsletterBox
