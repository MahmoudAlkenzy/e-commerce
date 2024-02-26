import axios from 'axios';
import { BaseUrl } from './baseUrl';

const token = localStorage.getItem('tkn');
export async function createCashOrder({ cartId, shippingAddress }) {
    try {
        await axios.post(
            `${BaseUrl}/api/v1/orders/${cartId}`,
            shippingAddress,
            {
                headers: { token },
            }
        );
    } catch (error) {
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}
export async function cheackOutSession({ cartId, shippingAddress }) {
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/orders/checkout-session/${cartId}`,
            shippingAddress,
            {
                headers: { token },
                params: {
                    url: `${window.location.origin}/#`,
                },
            }
        );
        return data;
    } catch (error) {
        throw new Error(
            error.response.data.errors?.msg || error.response.data.message
        );
    }
}
