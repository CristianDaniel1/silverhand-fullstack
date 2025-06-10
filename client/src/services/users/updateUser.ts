import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../libs/axios';
import { UpdateUserType } from '../../schemas/updateUser.ts';
import { UserAuth } from '../../types';

interface UpdateUserParams {
  user: UpdateUserType;
  id: string;
}

export const updateUser = async ({ user, id }: UpdateUserParams) => {
  try {
    const response: AxiosResponse<UserAuth> = await axiosInstance.put(
      `users/${id}`,
      user
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
  }
};
