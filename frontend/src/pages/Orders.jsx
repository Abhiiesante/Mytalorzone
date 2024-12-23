import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import axios from 'axios'
import { useEffect } from 'react'

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = React.useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post("https://mytalorzone-backend.vercel.app", {}, { headers: { token } });
            if (response.data.success) {
                let allOrdersItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['date'] = order.date;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        allOrdersItem.push(item);
                    })
                });
                setOrderData(allOrdersItem.reverse());
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        loadOrderData();
    }, [token]);

    return (
        <div className='border-t pt-16'>
            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'} />

            </div>
            <div>
                {orderData.map((item, index) => (
                    <div key={index} className='py-4 border-t border-b text-gray-700 flex felx-col md:flex-row md:items-center md:jusitfy-between gap-4'>
                        <div className='flex items-start gap-6'>
                            <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                            <div>
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-1 text-base text-gray-500'>
                                    <p>{currency}{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                                <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                                <p className='mt-1'>Payment:<span className='text-gray-400'>{item.paymentMethod}</span></p>

                            </div>
                        </div>
                        <div className='md:w-1/2 flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text-sm md:text-base'>{item.status}</p>
                            </div>
                            <button onClick={loadOrderData} className='bg-black text-white text-sm py-2 px-4 font-medium rounded-sm'>TRACK ORDER</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
