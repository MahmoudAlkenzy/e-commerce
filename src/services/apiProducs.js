import axios from 'axios';
import { BaseUrl } from './baseUrl';

export async function getProducts() {
    try {
        const { data } = await axios.get(`${BaseUrl}/api/v1/products`);
        return data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function getProduct(id) {
    try {
        const { data } = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        return data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
