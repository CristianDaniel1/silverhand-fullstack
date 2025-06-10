import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../libs/tanstackQuery';
import { updateUser } from '../../services/users/updateUser';
import { toast } from 'sonner';

export const useUpdateUser = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['userAuth'],
      });

      toast.success('Atualizado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao atualizar seu perfil');
    },
  });

  return { mutate, isPending, isError, error };
};
