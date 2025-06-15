import axios from 'axios';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';

export const resetPassword = async ({
  newPassword,
}: {
  newPassword: string;
}) => {
  try {
    const response = await axiosInstance.post('auth/reset-password', {
      newPassword,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(error.response?.data.error, error.response?.status);
    }
  }
};
