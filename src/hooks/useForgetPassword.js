import { useMutation } from '@tanstack/react-query';
import { forgetPassword } from '../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { authContext } from '../context/AuthContext';

export function useForgetPassword() {
    // const [useremail, setEmail] = useState(null);
    const { useremail, setEmail } = useContext(authContext);
    const {
        mutate: resetPassword,
        isLoading,
        data,
    } = useMutation({
        mutationFn: ({ email }) => {
            setEmail(email);
            return forgetPassword({ email });
        },
        mutationKey: ['sent'],

        onSuccess: (data) => {
            console.log('userName', useremail);
            toast.success(data.message);
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return { resetPassword, isLoading, data, useremail };
}
