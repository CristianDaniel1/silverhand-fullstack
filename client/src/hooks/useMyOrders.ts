import { useQuery } from '@tanstack/react-query';
import { myOrdersFetch } from '../services/orders/myOrdersFetch';

export const useMyOrders = ({ id }: { id: string }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['my-orders', { id }],
    queryFn: ({ signal }) => myOrdersFetch({ signal }),
    staleTime: 1000 * 10,
  });

  return { data, isPending, isError, error };
};
