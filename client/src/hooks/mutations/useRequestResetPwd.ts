import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { requestPasswordReset } from '../../services/auth/requestResetPassword';
import { CustomError } from '../../utils/CustomError';

export const useRequestResetPwd = () => {
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: requestPasswordReset,
    onSuccess: async () => {
      toast.info('Foi enviado um e-mail para redefinir a sua senha');
    },
    onError: (error: CustomError) => {
      if (error.status === 400)
        toast.error('Não foi encontrado um usuario com esse e-mail');
      else toast.error('Erro ao enviar e-mail');
    },
  });

  return { mutate, isPending, isError, error, isSuccess };
};
