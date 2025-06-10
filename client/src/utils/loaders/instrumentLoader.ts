import { Params, redirect } from 'react-router';
import { queryClient } from '../../libs/tanstackQuery';
import { fetchInstrumentId } from '../../services/instruments/instrumentIdFetch';
import { getLastNumberFromStr } from '../stringFormatters.ts';

export const instrumentLoader = async ({ params }: { params: Params }) => {
  try {
    if (params?.instrumentId) {
      const id = getLastNumberFromStr(params.instrumentId);

      const data = await queryClient.fetchQuery({
        queryKey: ['instruments', { id }],
        queryFn: ({ signal }) => fetchInstrumentId({ id, signal }),
      });

      return data;
    }

    return redirect('/');
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
    return redirect('/login');
  }
};
