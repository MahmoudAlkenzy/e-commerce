import { useMutation } from '@tanstack/react-query';
import { forgetPassword } from '../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useForgetPassword() {
    const {
        mutate: resetPassword,
        isLoading,
        data,
    } = useMutation({
        mutationFn: forgetPassword,
        mutationKey: ['sent'],

        onSuccess: (data) => {
            console.log(data);
            toast.success(data.message);
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return { resetPassword, isLoading, data };
}
