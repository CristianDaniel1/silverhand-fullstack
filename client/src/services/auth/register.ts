import axios, { AxiosResponse } from 'axios';
import { UserAuth, UserRegister } from '../../types';
import { axiosInstance } from '../../libs/axios';
import { CustomError } from '../../utils/CustomError';

interface RegisterParams {
  user: UserRegister;
}

export const postRegister = async ({ user }: RegisterParams) => {
  try {
    const response: AxiosResponse<UserAuth> = await axiosInstance.post(
      'auth/register',
      user
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new CustomError(
        error.response?.data.error || error.response?.data.message,
        error.response?.status
      );
    }
  }
};
