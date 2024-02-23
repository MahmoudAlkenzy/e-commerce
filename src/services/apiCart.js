import axios from 'axios';
import { BaseUrl } from './baseUrl';

export async function addToCart({ productId, token, isHome }) {
    try {
        const { data } = await axios.post(
            `${BaseUrl}/api/v1/cart`,
            {
                productId: productId,
            },
            {
                headers: { token },
            }
        );
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// export async function getUserCart({ token }) {
//     console.log(token);
//     try {
//         const { data } = await axios.get(`${BaseUrl}/api/v1/cart`, {
//             headers: {
//                 token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZmOTI3NDlmZWY2NmFhYzU4ODhmMyIsIm5hbWUiOiJtYWhtb3VkIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDg0ODQxMTIsImV4cCI6MTcxNjI2MDExMn0.FM5fY9b2y4FvibKNq7NC6dXPmWHfw_CDguZLA_lmdrM',
//             },
//         });
//         console.log(data);
//         return data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }
