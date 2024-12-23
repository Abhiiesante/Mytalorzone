import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 150;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select product size');
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        if (token) {
            try {
                const response = await axios.post("https://mytalorzone-frontend-eight.vercel.app/api/cart/add", { itemId, size }, { headers: { token } });


            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }


    const getCartCount = () => {
        let totalCount = 0;
        for (let items in cartItems) {
            for (let item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        if (token) {
            try {
                const response = await axios.post("https://mytalorzone-frontend-eight.vercel.app/api/cart/update", { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post("https://mytalorzone-frontend-eight.vercel.app/api/cart/get", {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            } else {
                toast.error(response.data.message);
            }
        }
        catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get("https://mytalorzone-frontend-eight.vercel.app/api/product/list");
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, [token])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch,
        setShowSearch, cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl, token, setToken, setCartItems
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;