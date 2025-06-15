import axios from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';

export const requestPasswordReset = async ({ email }: { email: string }) => {
  try {
    const response = await axiosInstance.post('auth/request-password-reset', {
      email,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
