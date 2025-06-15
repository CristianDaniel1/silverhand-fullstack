import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { resetPassword } from '../../services/auth/resetPassword';
import { useNavigate } from 'react-router';

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: resetPassword,
    onSuccess: async () => {
      toast.info('Senha redefinida com sucesso! Faça o seu login');

      navigate('/login');
    },
    onError: () => {
      toast.error('Erro ao atualizar a senha');
    },
  });

  return { mutate, isPending, isError, error, isSuccess };
};
