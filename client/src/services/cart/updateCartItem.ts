import axios, { AxiosResponse } from 'axios';
import { CustomError } from '../../utils/CustomError';
import { axiosInstance } from '../../libs/axios';
import { CartItem } from '../../types';

export const updateCartItem = async ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => {
  try {
    const response: AxiosResponse<CartItem> = await axiosInstance.put(
      `cart/items/${id}`,
      { quantity }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
