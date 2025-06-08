import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { OrdersResponse, SignalType } from '../../types';

export const myOrdersFetch = async ({ signal }: SignalType) => {
  try {
    const response: AxiosResponse<OrdersResponse> = await axiosInstance.get(
      'orders/user',
      { signal }
    );
    const data = response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data.error);
      throw new Error(error.response?.data.error);
    }
  }
};
