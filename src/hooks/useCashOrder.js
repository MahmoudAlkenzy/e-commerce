import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
export function useCashOrder() {
    const { cartId, clearCart } = useContext(CartContext);

    const { mutate: createCashOrder, isLoading: isCreating } = useMutation({
        mutationFn: () => createCashOrder(cartId),
        onSuccess: (data) => {
            clearCart({ isPayment: true });
            toast.success('create order success');
            console.log(data);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { createCashOrder, isCreating };
}
