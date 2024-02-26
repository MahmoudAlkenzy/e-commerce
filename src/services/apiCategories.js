import axios from 'axios';
import { BaseUrl } from './baseUrl';
export async function getCategories() {
    try {
        const { data } = await axios.get(`${BaseUrl}/api/v1/categories`);
        return data.data;
    } catch (error) {
        throw new Error(  error.response.data.errors?.msg || error.response.data.message);
    }
}
