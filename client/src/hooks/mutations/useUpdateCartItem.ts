import { useMutation } from '@tanstack/react-query';
import { updateCartItem } from '../../services/cart/updateCartItem';
import { toast } from 'sonner';
import { updateCartItemInCache } from '../../utils/cache/updateCartCache';

export const useUpdateCartItem = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateCartItem,
    onSuccess: updatedItem => {
      updateCartItemInCache(updatedItem!);
    },
    onError: () => {
      toast.error('Não foi possível atualizar o item');
    },
  });

  return { mutate, isPending, isError, error };
};
