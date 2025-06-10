import axios, { AxiosResponse } from 'axios';
import { Instrument } from '../../types';
import { axiosInstance } from '../../libs/axios.ts';

interface InstrumentIdFetchParams {
  id: number;
  signal: AbortSignal;
}

export const fetchInstrumentId = async ({
  id,
  signal,
}: InstrumentIdFetchParams) => {
  try {
    const response: AxiosResponse<Instrument> = await axiosInstance.get(
      `instruments/${id}`,
      { signal }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
