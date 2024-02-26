import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromWishlist as apiRemoveFromWishlist } from '../services/apiWhishlist';
import { toast } from 'react-hot-toast';

export function useRemoveFromwhishList() {
    const queryClient = useQueryClient();
    const { mutate: removeFromwishlist, isRemoveing } = useMutation({
        mutationFn: apiRemoveFromWishlist,
        onSuccess: (data) => {
            console.log(data);
            toast.success('scs');
            queryClient.invalidateQueries({ queryKey: ['userWishlist'] });
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return { removeFromwishlist, isRemoveing };
}
