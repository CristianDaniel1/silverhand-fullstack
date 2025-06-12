import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';
import { CartItem } from '../../types';

export const deleteCartItem = async ({ id }: { id: number }) => {
  try {
    const response: AxiosResponse<CartItem> = await axiosInstance.delete(
      `cart/items/${id}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
