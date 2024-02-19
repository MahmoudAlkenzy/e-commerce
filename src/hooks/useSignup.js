import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useToken } from '../context/AuthContext';

export function useSignup() {
    const { setToken } = useToken();
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (res) => {
            console.log(res);
            toast.success(`Register is success ${res?.user?.name} `);
            setToken(res.token);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { signup, isLoading };
}
