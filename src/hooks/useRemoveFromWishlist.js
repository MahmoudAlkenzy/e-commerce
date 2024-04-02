import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromWishlist as apiRemoveFromWishlist } from '../services/apiWhishlist';
import { toast } from 'react-hot-toast';

export function useRemoveFromwhishList() {
  const queryClient = useQueryClient();
  const { mutate: removeFromwishlist, isRemoveing } = useMutation({
    mutationFn: apiRemoveFromWishlist,
    onSuccess: ({ data, isAddToCart }) => {
      !isAddToCart && toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['userWishlist'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { removeFromwishlist, isRemoveing };
}
