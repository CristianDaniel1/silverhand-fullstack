import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addToCart } from '../../services/cart/addToCart.ts';
import { CustomError } from '../../utils/CustomError.tsx';
import { updateCartItemInCache } from '../../utils/cache/updateCartCache.ts';
import { queryClient } from '../../libs/tanstackQuery.ts';

export const useAddToCart = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: async updatedItem => {
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
      });

      updateCartItemInCache(updatedItem!);
      toast.success('Instrumento adicionado!');
    },
    onError: (error: CustomError) => {
      if (error.status === 401) toast.error('É necessário fazer o login');
      else toast.error('Não foi possível adicionar no carrinho');
    },
  });

  return { mutate, isPending, isError, error };
};
