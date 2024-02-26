import { useRef } from 'react';
import { useToken } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCashOrder } from '../../hooks/useCashOrder';
import { useCheackOutSession } from '../../hooks/useCheackOutSession';
import { SpinnerMini } from './../../ui/spinners/Spinners';

export default function Payment() {
    const detaildRef = useRef();
    const phonedRef = useRef();
    const cityRef = useRef();
    const navigae = useNavigate();
    const { createCashOrder, isCreating } = useCashOrder();
    const { cheackOutSession, isLoading } = useCheackOutSession();
    const shippingAddress = {
        details: detaildRef.current?.value,
        phone: phonedRef.current?.value,
        city: cityRef.current?.value,
    };
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
                <div className="d-flex justify-content-between">
                    <button
                        disabled={isCreating}
                        onClick={() =>
                            createCashOrder(
                                { shippingAddress },
                                {
                                    onSuccess: () =>
                                        setTimeout(() => {
                                            navigae('/products');
                                        }, 1500),
                                }
                            )
                        }
                        className="btn btn-main"
                    >
                        Place cash payment order
                    </button>
                    <button
                        disabled={isLoading}
                        onClick={cheackOutSession}
                        className="btn btn-main"
                    >
                        {isLoading ? (
                            <SpinnerMini />
                        ) : (
                            'Check online session payment'
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}
