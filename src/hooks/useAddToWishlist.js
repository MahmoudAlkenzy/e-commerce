import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToWishlist as apiAddToWishlist } from '../services/apiWhishlist';
import { toast } from 'react-hot-toast';

export function useAddToWishlist() {
    const queryClient = useQueryClient();
    const { mutate: addToWishlist, isLoading } = useMutation({
        mutationFn: apiAddToWishlist,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['userWishlist'] });
            console.log(data);
            toast.success(data.message);
        },
    });
    return { addToWishlist, isLoading };
}
