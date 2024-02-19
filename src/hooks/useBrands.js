import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../services/apiBrands';

export function useBrands() {
    const { data: brands, isLoading } = useQuery({
        queryFn: getBrands,
        queryKey: ['AllBrands'],
    });
    return { brands, isLoading };
}
