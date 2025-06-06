import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../libs/axios';
import { InstrumentCategory, PaginatedInstruments } from '../types';

export interface FetchInstrumentsParams {
  page?: number;
  limit?: number;
  category: InstrumentCategory | null;
  stringNum: number | undefined;
  search: string | undefined;
}

export const fetchInstruments = async ({
  page = 1,
  limit = 6,
  category,
  stringNum,
  search,
}: FetchInstrumentsParams) => {
  let filterByCateg = '';
  if (category) filterByCateg += category.toUpperCase();
  let url = `instruments?page=${page}&limit=${limit}`;

  if (filterByCateg) url += `&category=${category}`;
  if (stringNum) url += `&stringNum=${stringNum}`;
  if (search) url += `&search=${search}`;

  try {
    const response: AxiosResponse<PaginatedInstruments> =
      await axiosInstance.get(url);

    const { page: currentPage, lastPage } = response.data;

    const nextCursor = currentPage === lastPage ? undefined : currentPage + 1;
    return { data: response.data, nextCursor };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data.message);
    }
  }
};
