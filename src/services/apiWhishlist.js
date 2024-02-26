import axios from 'axios';
import { BaseUrl } from './baseUrl';
const token = localStorage.getItem('tkn');
export async function getUserWishlist() {
    try {
        const { data } = await axios.get(`${BaseUrl}/api/v1/wishlist`, {
            headers: { token },
        });

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function addToWishlist({ productId }) {
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/wishlist`,
            {
                productId,
            },
            {
                headers: { token },
            }
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function removeFromWishlist({ productId, isAddToCart }) {
    try {
        const { data } = await axios.delete(
            `${BaseUrl}/api/v1/wishlist/${productId}`,
            { headers: { token } }
        );
        return { data, isAddToCart };
    } catch (error) {
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}
