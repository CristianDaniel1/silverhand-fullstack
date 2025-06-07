import { AxiosResponse } from 'axios';
import { redirect } from 'react-router';
import { axiosInstance } from '../libs/axios';
import { useAuthStore } from '../store/authStore';

export const createAuthLoader = (allowedRoles?: string[]) => async () => {
  try {
    const res: AxiosResponse = await axiosInstance.get('/auth/check');
    const user = res.data;

    if (allowedRoles && !allowedRoles.includes(user.role)) return redirect('/');

    useAuthStore.setState({ authUser: user });
    return user;
  } catch (error: unknown) {
    console.log(error);
    useAuthStore.setState({ authUser: null });
    return redirect('/login');
  }
};
