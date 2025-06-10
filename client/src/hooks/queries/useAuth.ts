import { useQuery } from '@tanstack/react-query';
import { fetchCheckAuth } from '../../services/auth/checkAuthFetch';

export const useAuth = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['userAuth'],
    queryFn: () => fetchCheckAuth(),
    staleTime: 1000 * 10,
    retry: false,
  });

  return { userAuth: data?.user, isPending, isError, error };
};
