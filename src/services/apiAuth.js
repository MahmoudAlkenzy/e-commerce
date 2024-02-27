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
        throw new Error(error.response.data.message);
    }
}
export async function login({ userData }) {
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/auth/signin`,
            userData
        );

        return data;
    } catch (error) {
        console.log(error);
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}

export async function forgetPassword({ email }) {
    console.log(email);
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/auth/forgotPasswords`,
            {
                email,
            }
        );
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}
