/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { BaseUrl } from '../services/baseUrl';
import { useToken } from './AuthContext';
import { toast } from 'react-hot-toast';

export const CartContext = createContext();
export function CartContextProvider({ children }) {
  const { token } = useToken();
  const [cart, setCart] = useState(null);
  const [numOfCartItem, setNumOfCartItem] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartId, setcartId] = useState(null);
  async function getUserCart() {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/v1/cart`, {
        headers: {
          token: localStorage.getItem('tkn'),
        },
      });
      if (data.numOfCartItems !== 0) {
        setCart(data.data.products);
        localStorage.setItem('userId', data.data.cartOwner);
        setCartPrice(data.data.totalCartPrice);
        setNumOfCartItem(data.numOfCartItems);
        setcartId(data.data._id);
      }
    } catch (error) {
      setCart([]);

      setCartPrice(0);
      setNumOfCartItem(0);
      setcartId(undefined);
    }
  }
  async function updateCart({ id, count }) {
    try {
      const { data } = await axios.put(`${BaseUrl}/api/v1/cart/${id}`, { count }, { headers: { token } });
      setCart(data.data.products);
      setCartPrice(data.data.totalCartPrice);
      setNumOfCartItem(data.numOfCartItems);
      setcartId(data.data._id);

      toast.success('Product count updated');
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async function deleteItem(id) {
    try {
      const { data } = await axios.delete(`${BaseUrl}/api/v1/cart/${id}`, {
        headers: { token },
      });

      setCart(data.data.products);
      setCartPrice(data.data.totalCartPrice);
      setNumOfCartItem(data.numOfCartItems);
      setcartId(data.data._id);

      toast.success('Product deleted ');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function clearCart({ isPayment }) {
    try {
      await axios.delete(`${BaseUrl}/api/v1/cart`, {
        headers: { token },
      });
      setCart([]);
      setCartPrice(0);
      setNumOfCartItem(0);
      !isPayment && toast.success('Cart was cleared');
    } catch (error) {
      throw new Error(error.message);
    }
  }
  useEffect(() => {
    if (localStorage.getItem('tkn')) {
      getUserCart();
    }
  }, [token]);

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
        updateCart,
        deleteItem,
        clearCart,
        cartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
