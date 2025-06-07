import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { OrdersResponse } from '../../types';

export const myOrdersFetch = async () => {
  try {
    const response: AxiosResponse<OrdersResponse> = await axiosInstance.get(
      'orders/user'
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
