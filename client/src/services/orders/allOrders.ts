import axios, { AxiosResponse } from 'axios';
import { OrdersResponse } from '../../types';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';

export const allOrdersFetch = async () => {
  try {
    const response: AxiosResponse<OrdersResponse> = await axiosInstance.get(
      'orders'
    );
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
