import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { InstrumentCategory, PaginatedInstruments } from '../../types';
import { CustomError } from '../../utils/CustomError';

export interface FetchInstrumentsParams {
  page?: number;
  limit?: number;
  category: InstrumentCategory | null;
  stringNum?: number | undefined;
  search?: string | undefined;
}

interface FetchInstruments extends FetchInstrumentsParams {
  signal: AbortSignal;
}

export const fetchInstruments = async ({
  page = 1,
  limit = 8,
  category,
  stringNum,
  search,
  signal,
}: FetchInstruments) => {
  let url = `instruments?page=${page}&limit=${limit}`;

  if (category) url += `&category=${category}`;
  if (stringNum) url += `&stringNum=${stringNum}`;
  if (search) url += `&search=${search}`;

  try {
    const response: AxiosResponse<PaginatedInstruments> =
      await axiosInstance.get(url, { signal });

    const { page: currentPage, lastPage } = response.data;

    const nextCursor = currentPage === lastPage ? undefined : currentPage + 1;
    return { data: response.data, nextCursor };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
