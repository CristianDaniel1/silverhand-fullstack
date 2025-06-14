import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { OrdersResponse } from '../../types';
import { CustomError } from '../../utils/CustomError';

export const myOrdersFetch = async () => {
  try {
    const response: AxiosResponse<OrdersResponse> = await axiosInstance.get(
      'orders/user'
    );
    const data = response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(
        error.response?.data.message,
        error.response?.status
      );
    }
  }
};
