import axios, { AxiosResponse } from 'axios';
import { Instrument } from '../../types';
import { axiosInstance } from '../../libs/axios.ts';
import { CustomError } from '../../utils/CustomError.tsx';

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
      throw new CustomError(
        error.response?.data.error || error.response?.data.message,
        error.response?.status
      );
    }
  }
};
