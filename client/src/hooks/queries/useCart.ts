import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../../services/cart/cartFetch.ts';

export const useCart = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
    staleTime: 1000 * 10,
  });

  return { data, isPending, isError, error };
};
