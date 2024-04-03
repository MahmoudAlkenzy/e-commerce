import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { createCashOrder as createCashOrderAPI } from './../services/apiPayment';

export function useCashOrder() {
  const { cartId, clearCart } = useContext(CartContext);

  const { mutate: createCashOrder, isLoading: isCreating } = useMutation({
    mutationFn: ({ shippingAddress }) => createCashOrderAPI({ cartId, shippingAddress }),
    onSuccess: (data) => {
      clearCart({ isPayment: true });
      toast.success('create order success');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createCashOrder, isCreating };
}
