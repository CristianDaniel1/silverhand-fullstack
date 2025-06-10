import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { UserAuth } from '../../types';

export const fetchCheckAuth = async (allowedRoles?: string[]) => {
  try {
    const res: AxiosResponse<UserAuth> = await axiosInstance.get('/auth/check');
    const user = res.data;
    let isAllowed = true;

    if (allowedRoles && !allowedRoles.includes(user.role)) isAllowed = false;

    return { user, isAllowed };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
