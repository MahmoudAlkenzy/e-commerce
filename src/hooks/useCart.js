import { useMutation } from '@tanstack/react-query';
import { addToCart } from '../services/apiCart';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { CartContext } from './../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

export function useAddToCart() {
    const navigate = useNavigate();
    const { getUserCart } = useContext(CartContext);

    const { mutate: addProToCart, isLoading } = useMutation({
        mutationFn: addToCart,
        onSuccess: (cartData) => {
            console.log(cartData.data.products);
            getUserCart();
            toast.success(cartData.message);
            navigate('/cart');
        },
        onError: (err) => toast.error(err),
    });

    return { addProToCart, isLoading };
}
