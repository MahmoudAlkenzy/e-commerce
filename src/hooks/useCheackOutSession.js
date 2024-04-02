import { useMutation } from '@tanstack/react-query';
import { cheackOutSession as apicheackOutSession } from '../services/apiPayment';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCheackOutSession() {
    const { cartId, clearCart } = useContext(CartContext);

    const { mutate: cheackOutSession, isLoading } = useMutation({
        mutationFn: ({ shippingAddress }) =>
            apicheackOutSession({ cartId, shippingAddress }),
        onSuccess: (data) => {
            window.open(data.session.url, '_self');
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { cheackOutSession, isLoading };
}
