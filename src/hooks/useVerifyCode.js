import { useMutation } from '@tanstack/react-query';
import { verifyResetCode } from '../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

export default function useVerifyCode() {
    const { verifyState, setVerifyState } = useContext(authContext);

    const { mutate: verifyCode, isLoading: isVerifing } = useMutation({
        mutationFn: verifyResetCode,
        onSuccess: (data) => {
            console.log(data);
            setVerifyState(data);
            toast.success(data.status);
        },
        onError: (err) => {
            console.log(err);
            toast.error(`${err}`);
        },
    });
    return { verifyCode, isVerifing, verifyState };
}
