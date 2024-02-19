import axios from 'axios';
import { BaseUrl } from './baseUrl';
export async function signup({ userData }) {
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/auth/signup`,
            userData
        );
        return data;
    } catch (error) {
        if (error) {
            throw new Error(error.response.data.message);
        }
    }
}
export async function login({ userData }) {
    console.log(userData);
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/auth/signin`,
            userData
        );

        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}
