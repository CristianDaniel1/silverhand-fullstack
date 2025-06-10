import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';

export const fetchCart = async () => {
  try {
    const response: AxiosResponse = await axiosInstance.get('cart');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
