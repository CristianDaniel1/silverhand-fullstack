import { queryClient } from '../../libs/tanstackQuery';
export const deleteCartCache = () => {
  queryClient.setQueryData(['cart'], null);
};
