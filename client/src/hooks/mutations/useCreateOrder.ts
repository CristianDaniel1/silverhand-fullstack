import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { queryClient } from '../../libs/tanstackQuery';
import { toast } from 'sonner';
import { createOrder } from '../../services/orders/createOrder';
import { deleteCartCache } from '../../utils/cache/deleteCartCache';

export const useCreateOrder = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: createOrder,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['my-orders'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['cart'],
          refetchType: 'none',
        }),
      ]);

      navigate('/');
      deleteCartCache();
      toast.success('Pedido realizado com sucesso');
    },
    onError: () => {
      toast.error('Dados incorretos!');
    },
  });

  return { mutate, isPending, isError, error, isSuccess };
};
