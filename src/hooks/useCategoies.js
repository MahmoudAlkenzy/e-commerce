import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/apiCategories';

export default function useCategoies() {
    const { data: categories, isLoading } = useQuery({
        queryFn: getCategories,
        queryKey: ['AllCategories'],
    });
    return { categories, isLoading };
}
