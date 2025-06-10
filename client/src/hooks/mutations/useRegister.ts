import { toast } from 'sonner';
import { queryClient } from '../../libs/tanstackQuery.ts';
import { postRegister } from '../../services/auth/register.ts';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: postRegister,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['userAuth'],
      });

      navigate('/');

      toast.success('Cadastro feito com sucesso!');
    },

    onError: error => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending, isError, error };
};
