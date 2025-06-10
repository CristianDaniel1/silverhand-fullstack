import axios from 'axios';
import { axiosInstance } from '../../libs/axios';

export const postLogout = async () => {
  try {
    const response = await axiosInstance.post('auth/logout');

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
