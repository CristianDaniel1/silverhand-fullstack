import { useQuery } from '@tanstack/react-query';
import { allOrdersFetch } from '../../services/orders/allOrders';

export const useOrders = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['orders'],
    queryFn: allOrdersFetch,
    staleTime: 1000 * 60 * 60,
  });

  return { data, isPending, isError, error };
};
