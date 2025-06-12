import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../libs/tanstackQuery';
import { toast } from 'sonner';
import { deleteCart } from '../../services/cart/deleteCart';

export const useDeleteCart = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.setQueryData(['cart'], []);
      toast.success('Carrinho deletado!');
    },
    onError: () => {
      toast.error('Erro ao deletar o carrinho');
    },
  });

  return { mutate, isPending, isError, error };
};
