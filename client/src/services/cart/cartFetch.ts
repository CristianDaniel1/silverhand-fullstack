import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CartResponse } from '../../types';
import { CustomError } from '../../utils/CustomError';

export const fetchCart = async () => {
  try {
    const response: AxiosResponse<CartResponse> = await axiosInstance.get(
      'cart'
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
