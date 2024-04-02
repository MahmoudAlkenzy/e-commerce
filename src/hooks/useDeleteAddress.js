import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUserAddress } from '../services/apiUserData';

export default function useDeleteAddress() {
  const queryClient = useQueryClient();
  const {
    data,
    isLoading: isDeleting,
    mutate: deleting,
  } = useMutation({
    mutationFn: deleteUserAddress,
    mutationKey: ['userAddress'],
    onSuccess: (data) => {
      queryClient.setQueryData(['userAddress'], data.data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { data, isDeleting, deleting };
}
