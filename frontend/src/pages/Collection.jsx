import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useEffect } from 'react';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilters, setShowFilters] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    }

    const applyFilters = () => {
        let productsCopy = products.slice();
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }
        setFilterProducts(productsCopy);
    }

    const sortProducts = (e) => {
        let productsCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(productsCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(productsCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilters();
                break;
        }
    }

    useEffect(() => {
        applyFilters();
    }, [category, subCategory, search, showSearch, products])

    useEffect(() => {
        sortProducts();
    }, [sortType])
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
                <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} alt="" />
                {/* category */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Saree'} className='w-3' onChange={toggleCategory} />Saree
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Kurta'} className='w-3' onChange={toggleCategory} />Kurta
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Lehenga'} className='w-3' onChange={toggleCategory} />Lehenga
                        </p>
                    </div>
                </div>
                {/* sub category */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Topwear'} className='w-3' onChange={toggleSubCategory} />Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Bottomwear'} className='w-3' onChange={toggleSubCategory} />Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Winterwear'} className='w-3' onChange={toggleSubCategory} />Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* products */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sn:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 px-2 text-sm'>
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* map products */}
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection
