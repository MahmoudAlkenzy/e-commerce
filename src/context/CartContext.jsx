/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { BaseUrl } from '../services/baseUrl';

export const CartContext = createContext();
export function CartContextProvider({ children }) {
    const [cart, setCart] = useState(null);
    const [numOfCartItem, setNumOfCartItem] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    async function getUserCart() {
        try {
            const { data } = await axios.get(`${BaseUrl}/api/v1/cart`, {
                headers: {
                    token: localStorage.getItem('tkn'),
                },
            });
            setCart(data.data.products);
            setCartPrice(data.data.totalCartPrice);
            setNumOfCartItem(data.numOfCartItems);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <CartContext.Provider
            value={{
                cart,
                numOfCartItem,
                cartPrice,
                setCart,
                setNumOfCartItem,
                setCartPrice,
                getUserCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
