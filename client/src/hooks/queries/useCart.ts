import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../../services/cart/cartFetch.ts';
import { CustomError } from '../../utils/CustomError.tsx';

export const useCart = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
    staleTime: 1000 * 60,
    retry(_, error: CustomError) {
      if (error.status == 401 || error.status === 404) return false;
      return true;
    },
  });

  return { data, isPending, isError, error };
};
