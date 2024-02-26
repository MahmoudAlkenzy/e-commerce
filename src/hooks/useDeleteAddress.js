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
            console.log('cas');
            console.log(data.data);
            queryClient.setQueryData(['userAddress'], data.data);
        },
        onError: () => {
            console.log('cascasc');
        },
    });
    return { data, isDeleting, deleting };
}
