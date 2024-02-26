import axios from 'axios';
import { BaseUrl } from './baseUrl';

export async function getBrands() {
    try {
        const { data } = await axios.get(`${BaseUrl}/api/v1/brands`);
        return data.data;
    } catch (error) {
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}
