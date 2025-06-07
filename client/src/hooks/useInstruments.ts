import { useInfiniteQuery } from '@tanstack/react-query';
import {
  fetchInstruments,
  FetchInstrumentsParams,
} from '../services/instruments/instrumentsFetch';

export const useInstruments = ({
  category,
  stringNum,
  search,
}: FetchInstrumentsParams) => {
  const {
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
    isError,
    error,
    data,
  } = useInfiniteQuery({
    queryKey: ['instruments', category, stringNum, search],
    queryFn: ({ pageParam = 1 }) =>
      fetchInstruments({ category, stringNum, search, page: pageParam }),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60,
    getNextPageParam: lastPage =>
      lastPage?.data.hasNextPage ? lastPage?.nextCursor : undefined,
  });

  return {
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
    isError,
    error,
    instruments: data?.pages.flatMap(page => page?.data.instruments) ?? [],
  };
};
