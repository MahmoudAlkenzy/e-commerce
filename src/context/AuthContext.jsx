import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const authContext = createContext();
export function AuthContextProvider({ children }) {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('tkn') !== undefined) {
            setToken(localStorage.getItem('tkn'));
            getUserData();
        }
    }, []);
    function getUserData() {
        const userData = jwtDecode(localStorage.getItem('tkn'));
        setUserData(userData);
        console.log(userData);
    }
    if (!token && token !== null) return;
    return (
        <authContext.Provider
            value={{ token, setToken, getUserData, userData }}
        >
            {children}
        </authContext.Provider>
    );
}

export function useToken() {
    const { token, setToken } = useContext(authContext);
    if (token === undefined)
        throw new Error('this context used out the provider scoop');
    return { token, setToken };
}
