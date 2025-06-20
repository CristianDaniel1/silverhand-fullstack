import { useQuery } from '@tanstack/react-query';
import { myOrdersFetch } from '../../services/orders/myOrdersFetch.ts';

export const useMyOrders = ({ id }: { id: string }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['my-orders', { id }],
    queryFn: myOrdersFetch,
    staleTime: 1000 * 60 * 60,
  });

  return { data, isPending, isError, error };
};
