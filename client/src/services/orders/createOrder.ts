import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';

export const createOrder = async () => {
  try {
    const response: AxiosResponse = await axiosInstance.post('orders/user');

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
