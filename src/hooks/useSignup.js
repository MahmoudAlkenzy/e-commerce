import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (res) => {
      toast.success(`Register is success ${res?.user?.name} `);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signup, isLoading };
}
