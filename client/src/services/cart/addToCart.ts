import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';

export const addToCart = async ({ instrumentId }: { instrumentId: number }) => {
  try {
    const response: AxiosResponse = await axiosInstance.post('cart/items', {
      instrumentId,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
