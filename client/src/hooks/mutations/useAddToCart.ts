import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addToCart } from '../../services/cart/addToCart.ts';
import { queryClient } from '../../libs/tanstackQuery.ts';

export const useAddToCart = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
      });

      toast.success('Instrumento adicionado!');
    },
    onError: () => {
      toast.error('Não foi possível adicionar no carrinho');
    },
  });

  return { mutate, isPending, isError, error };
};
