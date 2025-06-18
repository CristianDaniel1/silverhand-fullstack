import { useMutation } from '@tanstack/react-query';
import { deleteCartItem } from '../../services/cart/deleteCartItem';
import { queryClient } from '../../libs/tanstackQuery';
import { toast } from 'sonner';

export const useDeleteItem = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteCartItem,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
    onError: () => {
      toast.error('Erro ao deletar o item do carrinho');
    },
  });

  return { mutate, isPending, isError, error };
};
