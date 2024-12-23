import React, { useEffect } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
    const { search, setSearch } = useContext(ShopContext);
    const { showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        if (location.pathname.includes('/collection') && showSearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className='border-t border-b border-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                <img src={assets.search_icon} className='w-4 ml-2' alt="" />
            </div>
            <img src={assets.cross_icon} onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' alt="" />
        </div>
    ) : null
}

export default SearchBar
