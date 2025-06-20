import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';
import { CartItem } from '../../types';

export const addToCart = async ({ instrumentId }: { instrumentId: number }) => {
  try {
    const response: AxiosResponse<CartItem> = await axiosInstance.post(
      'cart/items',
      {
        instrumentId,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
