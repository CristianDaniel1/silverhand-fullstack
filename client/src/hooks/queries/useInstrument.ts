import { useQuery } from '@tanstack/react-query';
import { fetchInstrumentId } from '../../services/instruments/instrumentIdFetch';

export const useInstrument = ({ id }: { id: number }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['instruments', { id }],
    queryFn: ({ signal }) => fetchInstrumentId({ id, signal }),
    staleTime: 1000 * 60,
  });

  return { data, isPending, isError, error };
};
