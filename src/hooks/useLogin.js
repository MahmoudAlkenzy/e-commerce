import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useToken } from '../context/AuthContext';

export function useLogin() {
    const { setToken } = useToken();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: loginApi,
        onSuccess: (res) => {
            console.log(res);
            toast.success(`elcome back ${res.user}`);
            localStorage.setItem('tkn', res.token);
            setToken(res.token);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { login, isLoading };
}
