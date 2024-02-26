import { useQuery } from '@tanstack/react-query';
import { getUserWishlist } from '../services/apiWhishlist';

export function useWishlist() {
    const { data, isLoading } = useQuery({
        queryFn: getUserWishlist,
        queryKey: ['userWishlist'],
    });
    return { data, isLoading };
}
