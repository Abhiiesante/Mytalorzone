import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.images[0]);
                return null;
            }
        })
    }
    useEffect(() => {
        fetchProductData();
    }, [productId, products]);
    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex flex-col sm:gap-12 gap-12 sm:flex-row'>
                {/* Product Image */}
                <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

                    </div>
                </div>
            </div>
        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
