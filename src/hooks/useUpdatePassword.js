import { useMutation } from '@tanstack/react-query';
import { updateUserPassword } from '../services/apiUserData';
import { toast } from 'react-hot-toast';

export default function useUpdatePassword() {
    const { isLoading: isUpdating, mutate: update } = useMutation({
        mutationFn: updateUserPassword,
        onSuccess: () => {
            toast.success('password was updated successfully');
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { isUpdating, update };
}
