import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../libs/axios';
import { BodyLogin, UserAuth } from '../types';

interface AuthType {
  authUser: UserAuth | null;
  isCheckingAuth: boolean;
  isLoggingIn: boolean;

  postLogin: (bodyLogin: BodyLogin) => Promise<void>;
}

export const useAuthStore = create<AuthType>(set => {
  return {
    authUser: null,
    isLoggingIn: false,
    isCheckingAuth: true,

    postLogin: async ({ email, password }) => {
      try {
        const response: AxiosResponse<UserAuth> = await axiosInstance.post(
          'auth/login',
          {
            email,
            password,
          }
        );

        const data = response.data;
        set({ authUser: data });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data.message);
        }
      }
    },
  };
});
