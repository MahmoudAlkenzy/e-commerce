import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/apiProducs';

export default function useProducts() {
    const {
        data: products,
        error,
        isLoading,
    } = useQuery({
        queryFn: getProducts,
        queryKey: ['products'],
    });

    return { products, error, isLoading };
}
