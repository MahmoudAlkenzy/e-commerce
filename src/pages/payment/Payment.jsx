import axios from 'axios';
import { BaseUrl } from '../../services/baseUrl';
import { useContext, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import { useToken } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Payment() {
    const detaildRef = useRef();
    const phonedRef = useRef();
    const cityRef = useRef();
    const navigae = useNavigate();
    const { cartId, clearCart } = useContext(CartContext);
    const { token } = useToken();
    async function createCashOrder() {
        const shippingAddress = {
            details: detaildRef.current.value,
            phone: phonedRef.current.value,
            city: cityRef.current.value,
        };

        try {
            const { data } = await axios.post(
                `${BaseUrl}/api/v1/orders/${cartId}`,
                shippingAddress,
                {
                    headers: { token },
                }
            );
            clearCart({ isPayment: true });
            toast.success('create order success');
            console.log(data);
            setTimeout(() => {
                navigae('/products');
            }, 1500);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    return (
        <>
            <div className="w-50 mx-auto d-flex flex-column gap-3 py-5">
                <div>
                    <label className="mb-1" htmlFor="details">
                        details
                    </label>
                    <input
                        ref={detaildRef}
                        placeholder="Enter your addres"
                        className="form-control"
                        id="details"
                        type="text"
                    />
                </div>
                <div>
                    <label className="mb-1" htmlFor="phone">
                        phone
                    </label>
                    <input
                        ref={phonedRef}
                        placeholder="Enter your phone"
                        className="form-control"
                        id="phone"
                        type="text"
                    />
                </div>
                <div>
                    <label className="mb-1" htmlFor="city">
                        city
                    </label>
                    <input
                        ref={cityRef}
                        placeholder=" enter your address"
                        className="form-control"
                        id="city"
                        type="text"
                    />
                </div>
                <button onClick={createCashOrder} className="btn btn-main">
                    Place order
                </button>
            </div>
        </>
    );
}
