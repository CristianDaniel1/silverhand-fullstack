import axios, { AxiosResponse } from 'axios';
import { BodyLogin, UserAuth } from '../../types';
import { axiosInstance } from '../../libs/axios';

export const postLogin = async ({ email, password }: BodyLogin) => {
  try {
    const response: AxiosResponse<UserAuth> = await axiosInstance.post(
      'auth/login',
      { email, password }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
