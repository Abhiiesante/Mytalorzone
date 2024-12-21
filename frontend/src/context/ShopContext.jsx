import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 150;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(search ? true : false);

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;