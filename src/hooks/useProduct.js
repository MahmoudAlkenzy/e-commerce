import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/apiProducs';

export default function useProduct() {
    const { id } = useParams();

    const { data: product, isLoading } = useQuery({
        queryFn: () => getProduct(id),
        queryKey: ['product', id],
    });

    return { product, isLoading };
}
