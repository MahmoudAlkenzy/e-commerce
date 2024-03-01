import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../services/apiAuth';
import { toast } from 'react-hot-toast';
export function useResetPassword() {
    const { mutate: reset, isLoading: isReseting } = useMutation({
        mutationFn: resetPassword,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.log(err);
            toast.error(err);
        },
    });
    return { reset, isReseting };
}
